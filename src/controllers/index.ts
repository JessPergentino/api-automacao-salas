import { Request, Response } from "express";
import Info from "../models/Info.model";

class InfoController {
  static async salvarInfos(req: Request, res: Response): Promise<Response> {
    console.log(req.params);

    const info = new Info({
      sala: req.params.sala,
      luminosidade: req.params.luminosidade,
      temperatura: req.params.temperatura,
      lampada: req.params.lampada === "1" ? true : false,
      arCondicionado: req.params.arCondicionado === "1" ? true : false,
      pessoas: req.params.pessoas === "1" ? true : false,
    });

    const infoCadastrada = await info.save();

    return res.json(infoCadastrada);
  }

  static async listarInfos(req: Request, res: Response): Promise<Response> {
    console.log(req.params);
    const sala = req.params.sala;

    const infos = await Info.findAll({
      where: { sala },
      order: [["createdAt", "DESC"]],
    });

    return res.json(infos);
  }
}

export default InfoController;
