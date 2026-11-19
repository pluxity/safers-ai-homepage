// 사이트에서 쓰는 이미지·영상과 언어와 상관없는 정보 (Lovable 시안 src/lib/content.ts 기준)
// 화면 문구는 src/i18n/의 언어별 파일에 있고, 여기서 언어에 맞게 합쳐서 돌려준다.
// 이미지(jpg)는 Astro에서 import하면 객체(ImageMetadata)라서 .src로 주소만 꺼내 쓴다.
// 영상(mp4)은 import하면 바로 주소 문자열이다.

import { translate } from "../i18n";

import twinIntegrated from "../assets/shots/twin-integrated.jpg";
import aiCctvGrid from "../assets/shots/ai-cctv-grid.jpg";
import safersAiChat from "../assets/shots/safers-ai-chat.jpg";
import equipmentMap from "../assets/shots/equipment-map.jpg";
import mobileApp from "../assets/shots/mobile-app.jpg";
import nationalDashboard from "../assets/shots/national-dashboard.jpg";
import configSingleSite from "../assets/shots/config-single-site.jpg";
import configMultiSite from "../assets/shots/config-multi-site.jpg";
import safelog3d from "../assets/shots/safelog-3d.jpg";
import twinCctv from "../assets/shots/twin-cctv.jpg";
import emergency3d from "../assets/shots/emergency-3d.jpg";
import liveCctv from "../assets/shots/live-cctv.jpg";
import equipmentRegister from "../assets/shots/equipment-register.jpg";
import twinEquipment from "../assets/shots/twin-equipment.jpg";
import aiSafetyLoop from "../assets/video/ai-safety-loop.mp4";
import aiSafetyPoster from "../assets/video/ai-safety-poster.jpg";
import liveCctvLoop from "../assets/video/live-cctv-loop.mp4";
import liveCctvPoster from "../assets/video/live-cctv-poster.jpg";
import twinLoop from "../assets/video/twin-loop.mp4";
import twinPoster from "../assets/video/twin-poster.jpg";
import aiHealthLoop from "../assets/video/ai-health-loop.mp4";
import aiHealthPoster from "../assets/video/ai-health-poster.jpg";
import convergeTwinLoop from "../assets/video/converge-twin-loop.mp4";
import convergeTwinPoster from "../assets/video/converge-twin-poster.jpg";
import aiChatLoop from "../assets/video/ai-chat-loop.mp4";
import aiChatPoster from "../assets/video/ai-chat-poster.jpg";
import equipmentLoop from "../assets/video/equipment-loop.mp4";
import equipmentPoster from "../assets/video/equipment-poster.jpg";
import heroVideo from "../assets/video/main-visual-bg.mp4";
import heroPoster from "../assets/video/main-visual-poster.jpg";
import dashboardVideo from "../assets/video/national-dashboard-loop.mp4";
import dashboardPoster from "../assets/video/national-dashboard-poster.jpg";
import dayTwinClip from "../assets/day/day-twin.mp4";
import dayTwinPoster from "../assets/day/day-twin-poster.jpg";
import daySafetyClip from "../assets/day/day-safety.mp4";
import daySafetyPoster from "../assets/day/day-safety-poster.jpg";
import dayHealthClip from "../assets/day/day-health.mp4";
import dayHealthPoster from "../assets/day/day-health-poster.jpg";
import dayCctvClip from "../assets/day/day-cctv.mp4";
import dayCctvPoster from "../assets/day/day-cctv-poster.jpg";
import daySafelogClip from "../assets/day/day-safelog.mp4";
import daySafelogPoster from "../assets/day/day-safelog-poster.jpg";
import dayChatClip from "../assets/day/day-chat.mp4";
import dayChatPoster from "../assets/day/day-chat-poster.jpg";
import dayEquipmentClip from "../assets/day/day-equipment.mp4";
import dayEquipmentPoster from "../assets/day/day-equipment-poster.jpg";

export const videos = {
  hero: heroVideo,
  heroPoster: heroPoster.src,
  dashboard: dashboardVideo,
  dashboardPoster: dashboardPoster.src,
  aiSafetyLoop,
  aiSafetyPoster: aiSafetyPoster.src,
  liveCctvLoop,
  liveCctvPoster: liveCctvPoster.src,
  twinLoop,
  twinPoster: twinPoster.src,
  aiHealthLoop,
  aiHealthPoster: aiHealthPoster.src,
  /** 플랫폼 페이지용: 자막 없이 잘라 낸 3D 트윈 영상 */
  convergeTwinLoop,
  convergeTwinPoster: convergeTwinPoster.src,
  aiChatLoop,
  aiChatPoster: aiChatPoster.src,
  equipmentLoop,
  equipmentPoster: equipmentPoster.src,
};

export const shots = {
  twinIntegrated: twinIntegrated.src,
  aiCctvGrid: aiCctvGrid.src,
  safersAiChat: safersAiChat.src,
  equipmentMap: equipmentMap.src,
  mobileApp: mobileApp.src,
  nationalDashboard: nationalDashboard.src,
  configSingleSite: configSingleSite.src,
  configMultiSite: configMultiSite.src,
  safelog3d: safelog3d.src,
  twinCctv: twinCctv.src,
  emergency3d: emergency3d.src,
  liveCctv: liveCctv.src,
  equipmentRegister: equipmentRegister.src,
  twinEquipment: twinEquipment.src,
};

export const contact = {
  phone: "02 332 9002",
  email: "safers@pluxity.com",
};

/** PLUXITY 공식 사이트 */
export const pluxityUrl = "https://www.pluxity.com";

/* ───────── 서비스 ───────── */

export type ServiceId = "ai-safety" | "ai-chat" | "ai-health" | "live-cctv" | "equipment";

/** 서비스 → 문의 API의 관심 서비스(InquiryService enum) 값 */
export const serviceInquiryValue: Record<ServiceId, string> = {
  "ai-safety": "AI_SAFETY_BLACKBOX",
  "ai-chat": "AI_CONVERSATIONAL",
  "ai-health": "AI_HEALTH",
  "live-cctv": "CCTV_MONITORING",
  equipment: "HEAVY_EQUIPMENT",
};

/** 서비스별 번호와 미디어 (순서가 화면 순서) */
const serviceMedia: { id: ServiceId; no: string; image: string; video?: string; videoPoster?: string }[] = [
  { id: "ai-safety", no: "01", image: shots.emergency3d, video: videos.aiSafetyLoop, videoPoster: videos.aiSafetyPoster },
  { id: "ai-chat", no: "02", image: shots.safersAiChat, video: videos.aiChatLoop, videoPoster: videos.aiChatPoster },
  { id: "ai-health", no: "03", image: shots.mobileApp, video: videos.aiHealthLoop, videoPoster: videos.aiHealthPoster },
  { id: "live-cctv", no: "04", image: shots.liveCctv, video: videos.liveCctvLoop, videoPoster: videos.liveCctvPoster },
  { id: "equipment", no: "05", image: shots.equipmentMap, video: videos.equipmentLoop, videoPoster: videos.equipmentPoster },
];

export type Service = (typeof serviceMedia)[number] & {
  /** 문의 폼에서 쓰는 짧은 이름 */
  short: string;
  name: string;
  tagline: string;
  summary: string;
  points: { title: string; body: string }[];
  imageAlt: string;
};

/** 언어에 맞는 서비스 목록 (미디어 + 문구) */
export function getServices(lang: string): Service[] {
  const text = translate(lang).serviceText;
  return serviceMedia.map((m) => ({ ...m, ...text[m.id] }));
}

/* ───────── 어느 현장의 하루 ───────── */

const dayMedia: { key: keyof ReturnType<typeof translate>["dayText"]; serviceId?: ServiceId; clip: string; image: string }[] = [
  { key: "twin", clip: dayTwinClip, image: dayTwinPoster.src },
  { key: "safety", serviceId: "ai-safety", clip: daySafetyClip, image: daySafetyPoster.src },
  { key: "health", serviceId: "ai-health", clip: dayHealthClip, image: dayHealthPoster.src },
  { key: "equipment", serviceId: "equipment", clip: dayEquipmentClip, image: dayEquipmentPoster.src },
  { key: "cctv", serviceId: "live-cctv", clip: dayCctvClip, image: dayCctvPoster.src },
  { key: "chat", serviceId: "ai-chat", clip: dayChatClip, image: dayChatPoster.src },
  { key: "safelog", serviceId: "ai-safety", clip: daySafelogClip, image: daySafelogPoster.src },
];

export type DayStep = {
  time: string;
  title: string;
  body: string;
  serviceId?: ServiceId;
  serviceName: string;
  /** 클립의 첫 프레임 이미지 */
  image: string;
  imageAlt: string;
  /** 해당 단계가 활성화되면 한 번 재생되는 짧은 클립 */
  clip?: string;
};

/** 언어에 맞는 "어느 현장의 하루" 단계 목록 */
export function getDaySteps(lang: string): DayStep[] {
  const text = translate(lang).dayText;
  return dayMedia.map(({ key, ...m }) => ({ ...m, ...text[key] }));
}
