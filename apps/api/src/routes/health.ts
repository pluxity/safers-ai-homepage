import { Router } from "express";

export const healthRouter = Router();

// GET /api/health 
healthRouter.get("/health", (_req, res) => {
  res.json({ ok: true });
});
