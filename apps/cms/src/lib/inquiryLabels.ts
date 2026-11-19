import type { CctvEnv, InquiryService, SiteCount } from '../types/inquiry.ts'

// 화면에 보여 줄 한국어 이름 (apps/api/prisma/schema.prisma 주석과 같게 둔다)
export const serviceLabels: Record<InquiryService, string> = {
  PLATFORM: '통합 플랫폼',
  AI_SAFETY_BLACKBOX: 'AI 안전감지·블랙박스',
  AI_CONVERSATIONAL: 'AI 대화형 관제',
  AI_HEALTH: 'AI 보건관리',
  CCTV_MONITORING: '실시간 CCTV 관제',
  HEAVY_EQUIPMENT: '중장비 연동 관리',
  PARTNERSHIP: '제휴·마케팅',
}

export const siteCountLabels: Record<SiteCount, string> = {
  ONE: '1곳',
  TWO_TO_FIVE: '2–5곳',
  SIX_OR_MORE: '6곳 이상',
  UNDECIDED: '미정',
}

export const cctvEnvLabels: Record<CctvEnv, string> = {
  EXISTING: '기존 CCTV 활용',
  NEW: '새로 구축',
  UNDECIDED: '미정',
}

// "2026. 11. 19. 14:30" 형식
export function formatDate(value: string) {
  return new Date(value).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
