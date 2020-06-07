import { Router, Request, Response } from "express";
import InfoController from "../controllers";

const main = Router();

main.get("/:sala&&:luminosidade&&:temperatura&&:lampada&&:arCondicionado&&:pessoas", (req: Request, res: Response): void => {
  InfoController.salvarInfos(req, res);
});


main.get("/infos/:sala", (req: Request, res: Response): void => {
  InfoController.listarInfos(req, res);
});

export default main;
