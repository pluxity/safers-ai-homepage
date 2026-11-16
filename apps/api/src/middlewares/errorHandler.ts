import type { ErrorRequestHandler, RequestHandler } from "express";
import { z } from "zod";
import { Prisma } from "../generated/prisma/client";

// 없는 주소로 요청이 오면 404
export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({ error: { message: `없는 주소입니다: ${req.method} ${req.path}` } });
};

// 모든 에러를 같은 모양 { error: { message, details? } } 으로 응답
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  // zod 검사 실패 → 400
  if (err instanceof z.ZodError) {
    res.status(400).json({
      error: { message: "입력값이 올바르지 않습니다.", details: z.flattenError(err).fieldErrors },
    });
    return;
  }

  // 요청 본문이 올바른 JSON이 아님 → 400
  if (err?.type === "entity.parse.failed") {
    res.status(400).json({ error: { message: "요청 본문이 올바른 JSON이 아닙니다." } });
    return;
  }

  // 수정·삭제할 데이터가 없음 (Prisma P2025) → 404
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
    res.status(404).json({ error: { message: "데이터를 찾을 수 없습니다." } });
    return;
  }

  // 그 밖의 에러 → 500 (자세한 내용은 서버 로그에만)
  console.error(err);
  res.status(500).json({ error: { message: "서버 오류가 발생했습니다." } });
};
