import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

import main from "./routes/index";

const app: Application = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://ahp-spa.herokuapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

// Rotas
app.use(main);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Route Not found");
  next(error);
});

app.use(
  (
    error: { message: string; status: number },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(error.status || 500);
    res.json({
      status: "error",
      message: error.message,
    });
    next();
  }
);

const PORT: any = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
