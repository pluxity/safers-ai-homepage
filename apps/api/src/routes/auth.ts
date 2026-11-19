import express, { type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";


export const authRouter = express.Router();

authRouter.post("/login", (req: Request, res: Response) => {
    const { password } = req.body ?? {};

    if(password !== env.ADMIN_PASSWORD) {
        res.status(401).json({error: {message: "비밀번호가 올바르지 않습니다."}})
        return;
    }
    
    const token = jwt.sign({ role: "admin" }, env.JWT_SECRET, { expiresIn: "8h" });
    res.json({ token });
})