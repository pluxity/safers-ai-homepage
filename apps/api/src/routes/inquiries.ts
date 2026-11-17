import express, { type Request, type Response } from "express";
import { prisma } from "../lib/prisma";
import { sendInquiryMail } from "../lib/mailer";

export const inquiriesRouter = express.Router();

// GET    /api/inquiries     목록 조회
inquiriesRouter.get("/", async (req: Request, res: Response) => {
    const status = req.query.status as "NEW" | "DONE" | "SPAM" | undefined;
    const page = Number(req.query.page) || 1;
    const size = 20;

    const inquiries = await prisma.inquiry.findMany({
        where: {status},
        orderBy: [{created_at: "desc"}, {id: "desc"}],
        skip: (page - 1) * size,
        take: size
    });
    res.json(inquiries);
})

// GET    /api/inquiries/3   상세 조회
inquiriesRouter.get("/:id", async (req: Request, res: Response) => {
    const inquiry = await prisma.inquiry.findUnique({ where: { id: Number(req.params.id) } });
    res.json(inquiry);
})

// POST   /api/inquiries     문의 접수
inquiriesRouter.post("/", async (req: Request, res: Response) => {
    const inquiry = await prisma.inquiry.create({data: { ...req.body, privacy_agreed_at: new Date() }});

    try{
        await sendInquiryMail(inquiry);
    }catch(error){
        const message = error instanceof Error ? error.message : String(error);
        console.error("문의 알림 메일 발송 실패", message);
    }
    
    res.status(201).json(inquiry);
})
