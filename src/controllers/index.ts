import { Request, Response } from "express";
import Info from "../models/Info.model";

import { rc4, tratarMensagem } from '../utils/rc4'

class InfoController {
  static async salvarInfos(req: Request, res: Response): Promise<Response> {
    // console.log(req.params);
    const luminosidade = tratarMensagem(req.params.luminosidade)
    const temperatura = tratarMensagem(req.params.temperatura)
    const lampada = tratarMensagem(req.params.lampada)
    const arCondicionado = tratarMensagem(req.params.arCondicionado)
    const pessoas = tratarMensagem(req.params.pessoas)

    /* console.log(rc4("xxxxxxxxxxxxxxxxxxxxxx", luminosidade))
    console.log(rc4("xxxxxxxxxxxxxxxxxxxxxx", temperatura))
    console.log(rc4("xxxxxxxxxxxxxxxxxxxxxx", lampada))
    console.log(rc4("xxxxxxxxxxxxxxxxxxxxxx", arCondicionado))
    console.log(rc4("xxxxxxxxxxxxxxxxxxxxxx", pessoas)) */

    const info = new Info({
      sala: req.params.sala,
      luminosidade: rc4("xxxxxxxxxxxxxxxxxxxxxx", luminosidade),
      temperatura: rc4("xxxxxxxxxxxxxxxxxxxxxx", temperatura),
      lampada: rc4("xxxxxxxxxxxxxxxxxxxxxx", lampada) === "1" ? true : false,
      arCondicionado: rc4("xxxxxxxxxxxxxxxxxxxxxx", arCondicionado) === "1" ? true : false,
      pessoas: rc4("xxxxxxxxxxxxxxxxxxxxxx", pessoas) === "1" ? true : false,
    });

    const infoCadastrada = await info.save();

    return res.json(infoCadastrada);
  }

  static async listarInfos(req: Request, res: Response): Promise<Response> {
    const sala = req.params.sala;

    const infos = await Info.findAll({
      where: { sala },
      order: [["createdAt", "DESC"]],
    });

    return res.json(infos);
  }
}

export default InfoController;
