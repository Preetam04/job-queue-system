import { Router } from "express";

import * as HealthContoller from "./health.controller";

const router = Router();

router.route("/").get(HealthContoller.healthCheck);

export default router;
