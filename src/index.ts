import express from "express";
import { PORT } from "./env";
import { errorMiddleware } from "./shared/middlewares/error.middleware";
import healthRouter from "./modules/health/health.routes";

export const app = express();

app.use(express.json());

const commonRoute = "/api/v1";

app.use(`${commonRoute}/health`, healthRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started at port  ${PORT}`);
});
