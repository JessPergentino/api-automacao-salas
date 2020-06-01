import { Router, Request, Response } from "express";
import IndexController from "../controllers";

const main = Router();

main.get("/:temperatura&&:luminosidade&&:presente", (req: Request, res: Response): void => {
  IndexController.mostrarIndex(req, res);
});

export default main;
