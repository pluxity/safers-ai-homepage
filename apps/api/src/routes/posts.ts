import express, { type Request, type Response } from "express";
import { prisma } from "../lib/prisma";

export const postsRouter = express.Router();

// GET    /api/posts     목록 조회
postsRouter.get("/", async (req: Request, res: Response) => {
    const locale = req.query.locale as "KO" | "EN" | undefined;
    const status = req.query.status as "DRAFT" | "PUBLISHED" | undefined;
    const page = Number(req.query.page) || 1;
    const size = 20;

    const posts = await prisma.post.findMany({
        where: {locale, status},
        orderBy: [{published_at: "desc"}, {id: "desc"}],
        skip: (page - 1) * size,
        take: size
    });
    res.json(posts);
})

// GET    /api/posts/3   상세 조회
postsRouter.get("/:id", async (req: Request, res: Response) => {
    const post = await prisma.post.findUnique({where:{id:Number(req.params.id)}});
    res.json(post);
})

// POST   /api/posts     생성
postsRouter.post("/", async (req: Request, res: Response) => {
    const post = await prisma.post.create({data: req.body});
    res.status(201).json(post);
})

// PUT    /api/posts/3   수정 (전체 교체)
postsRouter.put("/:id", async (req: Request, res: Response) => {
    const post = await prisma.post.update({where:{id:Number(req.params.id)}, data: req.body});
    res.json(post);
})

// DELETE /api/posts/3   삭제
postsRouter.delete("/:id", async (req: Request, res: Response) => {
    await prisma.post.delete({where:{id:Number(req.params.id)}});
    res.status(204).end();
})
