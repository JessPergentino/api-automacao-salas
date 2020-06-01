import { Request, Response } from "express";

class IndexController {
  static mostrarIndex(req: Request, res: Response): Response {
    console.log(req.params)
    return res.send("Conectou na API");
  }
}

export default IndexController;