import express from "express";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/requestLogger";
import { authRouter } from "./routes/auth"; 
import { healthRouter } from "./routes/health";
import { postsRouter } from "./routes/posts";
import { inquiriesRouter } from "./routes/inquiries";

export const app = express();

app.use(requestLogger);
app.use(express.json());
app.use("/api", healthRouter);
app.use("/api/auth", authRouter);      
app.use("/api/posts", postsRouter);
app.use("/api/inquiries", inquiriesRouter);
app.use(notFoundHandler);
app.use(errorHandler);
