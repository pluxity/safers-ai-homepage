import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const requireAuth: RequestHandler = (req, res, next) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice("Bearer ".length) : undefined;

  if (!token) {
    res.status(401).json({ error: { message: "로그인이 필요합니다." } });
    return;
  }

  try {
    jwt.verify(token, env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: { message: "로그인이 만료되었습니다. 다시 로그인해 주세요." } });
  }
};
