import { z } from "zod";

// ─── enum  ───
export const Locale = z.enum(["KO", "EN"]);
export const PostCategory = z.enum(["COMPANY", "SAFERS", "NOTICE"]);
export const PostStatus = z.enum(["DRAFT", "PUBLISHED"]);
export const InquiryService = z.enum([
    "PLATFORM", "AI_SAFETY_BLACKBOX", "AI_CONVERSATIONAL", "AI_HEALTH",
    "CCTV_MONITORING", "HEAVY_EQUIPMENT", "PARTNERSHIP",
]);
export const SiteCount = z.enum(["ONE", "TWO_TO_FIVE", "SIX_OR_MORE", "UNDECIDED"]);
export const CctvEnv = z.enum(["EXISTING", "NEW", "UNDECIDED"]);
export const InquiryStatus = z.enum(["NEW", "DONE", "SPAM"]);


// ─── 소식: POST, PUT 요청 검사 ───
export const PostInput = z.object({
    locale: Locale.default("KO"),
    category: PostCategory,
    title: z.string().trim().min(1).max(200),
    summary: z.string().trim().min(1).max(300),
    body_html: z.string().min(1),
    thumbnail_path: z.string().max(300).nullish(),
    source_url: z.url().max(500).nullish(),
    status: PostStatus.default("DRAFT"),
    published_at: z.coerce.date().nullish(),
})

export type PostInput = z.infer<typeof PostInput>;


// ─── 문의: POST, PUT 요청 검사 ───
export const InquiryInput = z.object({
    locale: Locale.default("KO"),
    services: z.array(InquiryService).min(1),
    site_count: SiteCount,
    cctv_env: CctvEnv,
    name: z.string().trim().min(1).max(50),
    company: z.string().trim().min(1).max(100),
    email: z.email().max(254),
    phone: z.string().trim().min(1).max(30),
    message: z.string().trim().nullish(),
    privacy_agreed: z.literal(true),
    marketing_agreed: z.boolean().default(false),
})

export type InquiryInput = z.infer<typeof InquiryInput>;