import type { NextFunction, Request, Response } from "express";

function healthCheck(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    message: "Server Healthy",
    status: 200,
  });
}

export { healthCheck };
