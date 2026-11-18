// 사이트 문구와 미디어 (Lovable 시안 src/lib/content.ts 기준)
// 이미지(jpg)는 Astro에서 import하면 객체(ImageMetadata)라서 .src로 주소만 꺼내 쓴다.
// 영상(mp4)은 import하면 바로 주소 문자열이다.

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

/** "어느 현장의 하루"에서 쓰는 짧은 클립 */
const dayClips = {
  twin: { clip: dayTwinClip, poster: dayTwinPoster.src },
  safety: { clip: daySafetyClip, poster: daySafetyPoster.src },
  health: { clip: dayHealthClip, poster: dayHealthPoster.src },
  cctv: { clip: dayCctvClip, poster: dayCctvPoster.src },
  safelog: { clip: daySafelogClip, poster: daySafelogPoster.src },
  chat: { clip: dayChatClip, poster: dayChatPoster.src },
  equipment: { clip: dayEquipmentClip, poster: dayEquipmentPoster.src },
};

export const contact = {
  phone: "02 332 9002",
  email: "safers@pluxity.com",
  address: "경기도 안양시 동안구 벌말로 66 평촌하이필드 801–804호",
};

/** PLUXITY 공식 사이트 */
export const pluxityUrl = "https://www.pluxity.com";

/** Safers 도입 전 현장이 따로 쓰던 시스템들 (하나의 화면으로 모이는 연출에 사용) */
export const scatteredSystems = [
  "CCTV 관제",
  "환경 모니터링",
  "위험 경고 솔루션",
  "스마트 안전장구",
  "드론 안전 관측",
  "중장비 관리",
];

export type Service = {
  id: string;
  no: string;
  name: string;
  /** 문의 폼에서 쓰는 짧은 이름 */
  short: string;
  tagline: string;
  summary: string;
  points: { title: string; body: string }[];
  image: string;
  imageAlt: string;
  /** 있으면 이미지 대신 반복 영상을 보여 준다 */
  video?: string;
  videoPoster?: string;
};

export const services: Service[] = [
  {
    id: "ai-safety",
    short: "AI 안전감지 · 블랙박스",
    no: "01",
    name: "AI 안전감지 + AI 블랙박스",
    tagline: "AI가 위험을 감지하고, 사고 전후를 자동으로 기록",
    summary:
      "기존 CCTV 관제에 AI 영상분석을 적용해 위험 상황을 자동으로 선별·기록합니다. 위험 감지부터 사후 조치까지의 모든 기록을 3D 디지털 트윈 타임라인(SafeLog)에 담습니다.",
    points: [
      {
        title: "지능형 이상 감지",
        body: "쓰러짐·침입·배회·안전모 미착용 등 이상 행동을 자동 감지하고 관리자에게 즉시 통보",
      },
      {
        title: "스마트 긴급 방송",
        body: "화재·붕괴 등 상황별 프리셋 시나리오로 해당 구역에 대피·안내 방송을 즉시 송출",
      },
      {
        title: "3D 블랙박스 SafeLog",
        body: "위험 상황과 조치 이력을 시계열로 기록해 관리·감독 의무 이행의 근거자료로 활용",
      },
    ],
    image: shots.emergency3d,
    imageAlt: "3D 디지털 트윈 위에 위험 경보가 표시된 AI 안전감지 화면",
    video: videos.aiSafetyLoop,
    videoPoster: videos.aiSafetyPoster,
  },
  {
    id: "ai-chat",
    short: "AI 대화형 관제",
    no: "02",
    name: "AI 대화형 관제",
    tagline: "자연어로 원하는 기능과 정보를 빠르게 탐색",
    summary:
      "며칠 치 영상을 돌려보는 대신 한 문장으로 묻습니다. 고속 탐지(YOLO) → 맥락 판단(VLM) → 자연어 보고(AI Agent)의 3단계로 오탐을 거르고 상황을 요약합니다.",
    points: [
      { title: "자연어 영상 검색", body: "“최근 이틀 동안 안전모 안 쓴 사람 찾아줘” 한 문장으로 관련 영상 추출" },
      { title: "오탐 필터링", body: "VLM이 상황 맥락을 이해해 위험도를 재평가" },
      { title: "리포트 근거 확보", body: "SafeLog와 결합해 안전관리 리포트 근거자료를 자동 확보" },
    ],
    image: shots.safersAiChat,
    imageAlt: "Safers AI 대화형 관제 검색 화면",
    video: videos.aiChatLoop,
    videoPoster: videos.aiChatPoster,
  },
  {
    id: "ai-health",
    short: "AI 보건관리",
    no: "03",
    name: "AI 보건관리",
    tagline: "현장 환경을 감지하고, 근로자에게 필요한 안전·보건 정보를 안내",
    summary:
      "체감온도계로 현장을 실시간 모니터링하고 관심·주의·경고·위험 4단계로 자동 판정합니다. 기준 초과 시 관리자 앱에서 근로자 앱으로 휴식·수분섭취 안내를 전송합니다.",
    points: [
      { title: "체감온도 자동 감지", body: "관심·주의·경고·위험 4단계 기준에 따른 자동 판정" },
      { title: "즉각적인 현장 전파", body: "관리자 앱 → 근로자 앱으로 휴식·수분섭취 안내 자동 전송" },
      { title: "보건 리포트", body: "전파·조치 이력을 일별·월별 통계로 집계해 인쇄·제출" },
    ],
    image: shots.mobileApp,
    imageAlt: "현장관리자·근로자용 Safers 모바일 앱 화면",
    video: videos.aiHealthLoop,
    videoPoster: videos.aiHealthPoster,
  },
  {
    id: "live-cctv",
    short: "실시간 CCTV 관제",
    no: "04",
    name: "실시간 CCTV 관제",
    tagline: "현장 CCTV 영상을 실시간으로 확인하고 원격으로 관리",
    summary:
      "기존 카메라·NVR을 그대로 연계해 웹과 모바일에서 현장 영상을 실시간 확인합니다. RTSP / ONVIF 표준을 지원해 제조사와 관계없이 연결됩니다.",
    points: [
      { title: "기존 인프라 연계", body: "기존 카메라·NVR 연계, 제조사 독립적 연동" },
      { title: "PTZ 원격 제어", body: "웹에서 카메라 방향·줌을 원격으로 제어" },
      { title: "모바일 관제", body: "관리자 모바일 앱에서 언제든 현장 영상 확인" },
    ],
    image: shots.liveCctv,
    imageAlt: "여러 현장 CCTV를 한 화면에 보여주는 실시간 관제 화면",
    video: videos.liveCctvLoop,
    videoPoster: videos.liveCctvPoster,
  },
  {
    id: "equipment",
    short: "중장비 연동 관리",
    no: "05",
    name: "중장비 연동 관리",
    tagline: "장비 등록·승인부터 실시간 위치와 이동경로까지",
    summary:
      "중장비 등록부터 현장 투입까지 하나의 체계로 관리합니다. 현장 맵에서 장비 위치를 실시간으로 확인하고, 타임라인으로 시간대별 이동 흐름을 재생합니다.",
    points: [
      { title: "등록·승인·투입", body: "장비 등록부터 승인, 현장 투입까지 단일 프로세스" },
      { title: "실시간 위치 관제", body: "3D 현장 맵에서 장비 위치와 상태를 실시간 확인" },
      { title: "이동경로 재생", body: "타임라인으로 시점별 장비 이동 동선 조회" },
    ],
    image: shots.equipmentMap,
    imageAlt: "현장 3D 맵 위에 중장비 위치가 표시된 관제 화면",
    video: videos.equipmentLoop,
    videoPoster: videos.equipmentPoster,
  },
];

export type DayStep = {
  time: string;
  title: string;
  body: string;
  serviceId?: string;
  serviceName: string;
  /** 정지 이미지. 클립이 있으면 클립의 첫 프레임 */
  image: string;
  imageAlt: string;
  /** 해당 단계가 활성화되면 한 번 재생되는 짧은 클립 */
  clip?: string;
};

/** "어느 현장의 하루": 서비스를 하루 흐름으로 보여 주는 예시 시나리오 */
export const daySteps: DayStep[] = [
  {
    time: "07:30",
    title: "작업 시작 전, 현장 전체를 한 화면에",
    body: "CCTV, 환경 센서, 작업자와 장비 위치가 3D 디지털 트윈 위에 모입니다. 오늘 위험한 구역이 어디인지 출근길에 확인합니다.",
    serviceName: "공통 기반 · 현장 3D 통합관리",
    image: dayClips.twin.poster,
    clip: dayClips.twin.clip,
    imageAlt: "현장 3D 통합관리 화면",
  },
  {
    time: "10:24",
    title: "B동 12층, 안전모 미착용 감지",
    body: "AI가 영상 속 위험을 스스로 찾아 관리자에게 바로 알립니다. 해당 구역에는 안내 방송이 자동으로 송출됩니다.",
    serviceId: "ai-safety",
    serviceName: "AI 안전감지 + AI 블랙박스",
    image: dayClips.safety.poster,
    clip: dayClips.safety.clip,
    imageAlt: "AI가 안전모 미착용 작업자를 감지한 CCTV 화면",
  },
  {
    time: "13:10",
    title: "체감온도 ‘경고’ 단계 진입",
    body: "기준을 넘는 순간 근로자 앱으로 휴식과 수분 섭취 안내가 전달됩니다. 전파 이력은 보건 리포트로 남습니다.",
    serviceId: "ai-health",
    serviceName: "AI 보건관리",
    image: dayClips.health.poster,
    clip: dayClips.health.clip,
    imageAlt: "근로자 휴대폰으로 체감온도·안전 안내가 전달되는 화면",
  },
  {
    time: "14:40",
    title: "굴착기가 작업 구역으로 진입",
    body: "등록·승인된 장비의 위치와 이동 경로를 현장 맵에서 실시간으로 따라갑니다.",
    serviceId: "equipment",
    serviceName: "중장비 연동 관리",
    image: dayClips.equipment.poster,
    clip: dayClips.equipment.clip,
    imageAlt: "현장 맵 위에 굴착기 이동 경로가 그려지는 화면",
  },
  {
    time: "16:00",
    title: "본사에서 현장 영상을 직접 확인",
    body: "기존 CCTV를 그대로 연결해 본사와 모바일에서 실시간으로 보고, 카메라 방향과 줌도 원격으로 조정합니다.",
    serviceId: "live-cctv",
    serviceName: "실시간 CCTV 관제",
    image: dayClips.cctv.poster,
    clip: dayClips.cctv.clip,
    imageAlt: "여러 현장 CCTV를 한 화면에 보여주는 관제 화면",
  },
  {
    time: "17:50",
    title: "“오늘 안전모 안 쓴 사람 찾아줘”",
    body: "하루치 영상을 돌려보는 대신 한 문장으로 묻습니다. AI가 관련 장면을 찾아 요약해 보고합니다.",
    serviceId: "ai-chat",
    serviceName: "AI 대화형 관제",
    image: dayClips.chat.poster,
    clip: dayClips.chat.clip,
    imageAlt: "Safers AI에게 현장명을 말하자 해당 현장으로 이동하는 화면",
  },
  {
    time: "다음 날",
    title: "그때 그 순간을 3D로 다시 재생",
    body: "위험 감지부터 조치까지의 기록이 3D 타임라인에 남아, 관리·감독 의무 이행의 근거가 됩니다.",
    serviceId: "ai-safety",
    serviceName: "3D 블랙박스 SafeLog",
    image: dayClips.safelog.poster,
    clip: dayClips.safelog.clip,
    imageAlt: "SafeLog에 기록된 위험 이벤트 목록 화면",
  },
];
