export type InquiryService =
  | 'PLATFORM'
  | 'AI_SAFETY_BLACKBOX'
  | 'AI_CONVERSATIONAL'
  | 'AI_HEALTH'
  | 'CCTV_MONITORING'
  | 'HEAVY_EQUIPMENT'
  | 'PARTNERSHIP'

export type SiteCount = 'ONE' | 'TWO_TO_FIVE' | 'SIX_OR_MORE' | 'UNDECIDED'

export type CctvEnv = 'EXISTING' | 'NEW' | 'UNDECIDED'

export type InquiryStatus = 'NEW' | 'DONE' | 'SPAM'

export type Inquiry = {
  id: number
  locale: 'KO' | 'EN'
  services: InquiryService[]
  site_count: SiteCount
  cctv_env: CctvEnv
  name: string
  company: string
  email: string
  phone: string
  message: string | null
  privacy_agreed_at: string
  marketing_agreed: boolean
  status: InquiryStatus
  memo: string | null
  created_at: string
}

export type InquiryList = {
  items: Inquiry[]
  totalPages: number
}
