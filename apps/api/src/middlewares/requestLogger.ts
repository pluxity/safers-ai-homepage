import type { RequestHandler } from "express";
import { logger } from "../lib/logger";

// 요청마다 한 줄: 메서드, 경로, 응답 코드, 걸린 시간
// request body는 개인정보·비밀번호가 들어 있어 남기지 않는다 (마스킹해서 남기는 방식은 우선 보류)
export const requestLogger: RequestHandler = (req, res, next) => {
  const startedAt = Date.now();

  res.on("finish", () => {
    logger.info("request", {
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      ms: Date.now() - startedAt,
    });
  });

  next();
};
