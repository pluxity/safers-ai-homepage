import type { Inquiry, InquiryService, SiteCount, CctvEnv } from "../generated/prisma/client";

// Microsoft Graph API로 메일 발송 (회사 Microsoft 365, 앱 등록 + Mail.Send 애플리케이션 권한)
// 필요한 .env: MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MAIL_FROM, MAIL_TO

async function getAccessToken() {
    const res = await fetch(`https://login.microsoftonline.com/${process.env["MS_TENANT_ID"]}/oauth2/v2.0/token`, {
        method: "POST",
        body: new URLSearchParams({
            client_id: process.env["MS_CLIENT_ID"] ?? "",
            client_secret: process.env["MS_CLIENT_SECRET"] ?? "",
            scope: "https://graph.microsoft.com/.default",
            grant_type: "client_credentials",
        }),
    });
    if (!res.ok) {
        throw new Error(`토큰 발급 실패 (${res.status}): ${await res.text()}`);
    }

    const data = (await res.json()) as { access_token: string };
    return data.access_token;
}

async function sendMail(to: string, subject: string, content: string) {
    const token = await getAccessToken();

    const res = await fetch(`https://graph.microsoft.com/v1.0/users/${process.env["MAIL_FROM"]}/sendMail`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            message: {
                subject,
                body: { contentType: "Text", content },
                toRecipients: [{ emailAddress: { address: to } }],
            },
            saveToSentItems: true,
        }),
    });
    if (!res.ok) {
        throw new Error(`메일 발송 실패 (${res.status}): ${await res.text()}`);
    }
}

const SERVICE_LABEL: Record<InquiryService, string> = {
    PLATFORM: "통합 플랫폼",
    AI_SAFETY_BLACKBOX: "AI 안전감지·블랙박스",
    AI_CONVERSATIONAL: "AI 대화형 관제",
    AI_HEALTH: "AI 보건관리",
    CCTV_MONITORING: "실시간 CCTV 관제",
    HEAVY_EQUIPMENT: "중장비 연동 관리",
    PARTNERSHIP: "제휴 / 마케팅",
};
const SITE_COUNT_LABEL: Record<SiteCount, string> = {
    ONE: "1곳",
    TWO_TO_FIVE: "2–5곳",
    SIX_OR_MORE: "6곳 이상",
    UNDECIDED: "미정",
};
const CCTV_ENV_LABEL: Record<CctvEnv, string> = {
    EXISTING: "기존 CCTV 활용",
    NEW: "새로 구축",
    UNDECIDED: "미정",
};

export async function sendInquiryMail(inquiry: Inquiry) {
    const subject = `[SAFERS 문의 #${inquiry.id}] ${inquiry.company} / ${inquiry.name}`;
    const content = [
        `관심 서비스: ${inquiry.services.map((s) => SERVICE_LABEL[s]).join(", ")}`,
        `운영 현장 수: ${SITE_COUNT_LABEL[inquiry.site_count]}`,
        `CCTV 환경: ${CCTV_ENV_LABEL[inquiry.cctv_env]}`,
        "",
        `이름: ${inquiry.name}`,
        `회사명: ${inquiry.company}`,
        `이메일: ${inquiry.email}`,
        `연락처: ${inquiry.phone}`,
        "",
        "문의 내용:",
        inquiry.message ?? "(없음)",
        "",
        `접수 시각: ${inquiry.created_at.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`,
        `문의 번호: ${inquiry.id}`,
    ].join("\n");

    await sendMail(process.env["MAIL_TO"] ?? "", subject, content);
}
