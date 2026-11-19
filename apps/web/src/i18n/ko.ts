// 한국어 문구 (기준 언어). 다른 언어 파일은 이 모양(Dict)을 그대로 따라야 한다.

export const ko = {
  meta: {
    notFoundTitle: "페이지를 찾을 수 없습니다 | Safers 세이퍼스",
  },

  nav: {
    platform: "플랫폼",
    services: "서비스",
    contact: "도입 문의",
    pluxity: "PLUXITY",
    pluxityHome: "PLUXITY 홈페이지",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
  },

  footer: {
    description: "AI CCTV로 위험을 감지하고, 사고 전후 상황을 3D로 기록하는 건설현장 통합 안전관리 플랫폼.",
    pluxityButton: "PLUXITY 홈페이지 바로가기",
    menuTitle: "메뉴",
    contactTitle: "연락처",
    company: "주식회사 플럭시티 · 대표이사 윤재민",
    address: "경기도 안양시 동안구 벌말로 66 평촌하이필드 801–804호",
    copyright: "© PLUXITY Co., Ltd. All Rights Reserved.",
  },

  cta: {
    title: ["우리 현장에 맞는 구성,", "함께 설계해 드립니다."],
    description: "현장 규모와 기존 CCTV 환경을 알려주시면 필요한 서비스만 골라 제안드립니다.",
    button: "도입 문의하기",
  },

  home: {
    title: "Safers 세이퍼스 | AI CCTV 기반 건설현장 안전관리 플랫폼",
    hero: {
      eyebrow: "AI CCTV 기반 건설현장 통합 안전관리",
      title: ["위험은 먼저 감지하고,", "사고 전후는 3D로 기록합니다."],
      description:
        "세이퍼스는 AI 영상분석으로 현장 위험을 실시간으로 찾아내고, 흩어진 안전 솔루션을 하나의 화면으로 묶습니다.",
      primary: "도입 문의하기",
      secondary: "서비스 살펴보기",
    },
    converge: {
      titleA: ["화면은 여섯 개,", "현장은 하나입니다."],
      scattered: "흩어진 안전 솔루션",
      scatteredSub: "별도 화면 · 별도 로그인",
      platform: "하나의 플랫폼",
      titleB: { before: "이제, ", highlight: "하나의 화면", after: "으로." },
      descriptionB: "세이퍼스는 AI CCTV를 중심으로 흩어진 안전 솔루션을 3D 디지털 트윈 위에 모읍니다.",
      videoLabel: "현장 3D 통합관리 화면",
      /** 순서대로 CCTV, 온도계, 경보, 안전모, 드론, 지게차 아이콘과 짝지어진다 */
      systems: ["CCTV 관제", "환경 모니터링", "위험 경고 솔루션", "스마트 안전장구", "드론 안전 관측", "중장비 관리"],
    },
    day: {
      eyebrow: "어느 현장의 하루",
      title: ["출근부터 다음 날까지,", "세이퍼스가 지켜보는 현장"],
      description: "하나의 현장에서 하루 동안 벌어지는 일을 따라가며 세이퍼스의 서비스를 만나보세요.",
      more: "자세히",
      cta: "다섯 가지 서비스 자세히 보기",
    },
    multiSite: {
      eyebrow: "현장이 2곳 이상이라면",
      title: ["현장이 늘어나도,", "화면은 하나입니다."],
      description:
        "지도 위에서 전국 현장의 안전 상태와 주요 위험 이벤트를 한눈에 봅니다. 궁금한 현장은 바로 3D 대시보드로 들어가 확인하세요.",
      videoLabel: "전국 현장 통합 대시보드 화면",
      highlights: [
        ["정상부터 위험까지", "5단계로 나뉜 현장별 안전 상태"],
        ["실시간 공유", "지역별 현황과 최근 이벤트"],
        ["데이터 기반 분석", "축적된 기록으로 현장별 안전 현황 비교"],
      ],
    },
  },

  services: {
    title: "서비스 | Safers 세이퍼스 건설현장 안전관리",
    hero: {
      eyebrow: "서비스",
      title: ["현장 규모와 필요에 따라,", "선택하고 확장하는 안전관리."],
      description:
        "모든 현장은 3D 통합관리에서 시작합니다. 그 위에 필요한 서비스를 더하고, 현장이 늘어나면 전국을 한 화면으로 넓힙니다.",
      jumpTitle: "선택형 서비스 바로가기",
    },
    base: {
      eyebrow: "공통 기반 · 모든 현장에 기본 제공",
      title: "현장 3D 통합관리",
      description:
        "CCTV를 중심으로 환경 센서, 위험 경보, 스마트 안전장구, 드론 데이터를 3D 디지털 트윈 위에 모아 현장 전체를 한 화면에서 관리합니다.",
      tabsLabel: "현장 3D 통합관리 기능",
      videoLabel: "현장 3D 통합관리 화면",
      pillars: [
        {
          k: "위험인지",
          t: "AI CCTV가 먼저 위험을 알아챕니다",
          items: ["이상행동 자동 감지", "위험구역 접근·충돌 위험 알림", "환경·가스·화재 센서 연동 즉시 통보"],
        },
        {
          k: "현황파악",
          t: "누가, 어디서, 무엇을 하는지 3D로 봅니다",
          items: ["작업자·장비 위치 시각화", "층·구역 단위 작업 현황 확인", "드론·연동 장비 데이터 통합 표시"],
        },
        {
          k: "운영관리",
          t: "본사와 현장이 같은 화면을 봅니다",
          items: ["전국 현장 안전관리 현황 통합 조회", "사고 발생 시 위치 기반 즉각 대응", "이력 데이터 기반 사후 관리"],
        },
      ],
    },
    details: {
      eyebrow: "선택형 서비스 01 – 05",
      title: "필요한 기능만 골라 더하세요",
      description: "다섯 가지 서비스는 현장 수와 관계없이 필요한 것만 선택할 수 있습니다.",
    },
    config: {
      eyebrow: "우리 현장 구성 만들어보기",
      title: "세 가지만 고르면, 구성이 완성됩니다",
      description: "선택한 구성을 그대로 담아 상담을 요청할 수 있습니다.",
      q1: "운영 중인 현장은 몇 곳인가요?",
      q2: "현장에 CCTV가 이미 설치되어 있나요?",
      q3: "필요한 서비스를 골라주세요",
      cctvOptions: {
        EXISTING: {
          title: "네, 기존 CCTV를 활용할게요",
          desc: "RTSP / ONVIF 표준으로 제조사와 관계없이 연결하고 AI 영상분석을 적용합니다.",
        },
        NEW: {
          title: "아니요, 새로 구축할게요",
          desc: "AI 분석에 최적화된 장비와 게이트웨이 서버를 함께 구축합니다. 폐쇄망·온프레미스도 대응합니다.",
        },
      },
      singleAlt: "한 현장의 3D 통합관리 화면",
      multiAlt: "여러 현장을 한눈에 보여주는 전국 현장 통합 대시보드 화면",
      mine: "나의 구성",
      dashboard: "전국 현장 통합 대시보드",
      tagExpand: "확장",
      tagBase: "기본",
      base: "현장 3D 통합관리",
      sitesPrefix: "현장",
      cctvExisting: "기존 CCTV 연동",
      cctvNew: "AI 영상분석 장비 포함",
      button: "이 구성으로 상담 요청하기",
      footnote:
        "모든 구성에 실시간 영상관제, AI 영상분석, 위험상황 자동감지, 이벤트 자동 기록, 5단계 위험경보가 기본 제공되며, VPN 암호화 통신으로 KISA 인증 기준을 충족합니다.",
    },
  },

  contact: {
    title: "도입 문의 | Safers 세이퍼스",
    eyebrow: "도입 문의",
    heading: ["우리 현장에 맞는", "구성을 제안드립니다."],
    lead: "남겨주신 내용을 확인한 뒤 담당자가 신속히 연락드립니다.",
    direct: "바로 연락하기",
    form: {
      fromConfigurator: "서비스 페이지에서 만든 구성이 아래에 반영되었습니다.",
      topicsLegend: "관심 서비스 (복수 선택)",
      platform: "통합 플랫폼",
      partnership: "제휴 / 마케팅",
      sitesLegend: "운영 현장 수",
      cctvLegend: "CCTV 환경",
      cctv: { EXISTING: "기존 CCTV 활용", NEW: "새로 구축", UNDECIDED: "미정" },
      name: "이름",
      company: "회사명",
      email: "이메일",
      phone: "연락처",
      message: "문의 내용",
      messagePlaceholder: "현장 위치, 도입 희망 시기 등을 적어주시면 더 정확한 제안이 가능합니다.",
      agree: "개인정보 처리방침에 동의합니다. (필수)",
      errAgree: "개인정보 처리방침에 동의해 주세요.",
      errTopic: "관심 서비스를 하나 이상 골라 주세요.",
      success: "문의가 접수되었습니다. 확인 후 신속히 연락드리겠습니다.",
      failure: "전송에 실패했습니다. 아래 메일로 직접 문의해 주세요:",
      sending: "보내는 중…",
      submit: "문의 보내기",
    },
  },

  notFound: {
    eyebrow: "404 · PAGE NOT FOUND",
    title: ["페이지를", "찾을 수 없습니다."],
    description: ["주소가 바뀌었거나 삭제된 페이지입니다.", "아래 버튼으로 원하시는 곳으로 이동해 주세요."],
    home: "홈으로",
  },

  /** 운영 현장 수 (서비스 페이지와 문의 폼에서 같이 사용) */
  siteCounts: { ONE: "1곳", TWO_TO_FIVE: "2–5곳", SIX_OR_MORE: "6곳 이상", UNDECIDED: "미정" },

  /** 서비스 소개 글 (이미지·영상은 data/content.ts에 따로 있음) */
  serviceText: {
    "ai-safety": {
      short: "AI 안전감지 · 블랙박스",
      name: "AI 안전감지 + AI 블랙박스",
      tagline: "AI가 위험을 감지하고, 사고 전후를 자동으로 기록",
      summary:
        "기존 CCTV 관제에 AI 영상분석을 적용해 위험 상황을 자동으로 선별·기록합니다. 위험 감지부터 사후 조치까지의 모든 기록을 3D 디지털 트윈 타임라인(SafeLog)에 담습니다.",
      points: [
        { title: "지능형 이상 감지", body: "쓰러짐·침입·배회·안전모 미착용 등 이상 행동을 자동 감지하고 관리자에게 즉시 통보" },
        { title: "스마트 긴급 방송", body: "화재·붕괴 등 상황별 프리셋 시나리오로 해당 구역에 대피·안내 방송을 즉시 송출" },
        { title: "3D 블랙박스 SafeLog", body: "위험 상황과 조치 이력을 시계열로 기록해 관리·감독 의무 이행의 근거자료로 활용" },
      ],
      imageAlt: "3D 디지털 트윈 위에 위험 경보가 표시된 AI 안전감지 화면",
    },
    "ai-chat": {
      short: "AI 대화형 관제",
      name: "AI 대화형 관제",
      tagline: "자연어로 원하는 기능과 정보를 빠르게 탐색",
      summary:
        "며칠 치 영상을 돌려보는 대신 한 문장으로 묻습니다. 고속 탐지(YOLO) → 맥락 판단(VLM) → 자연어 보고(AI Agent)의 3단계로 오탐을 거르고 상황을 요약합니다.",
      points: [
        { title: "자연어 영상 검색", body: "“최근 이틀 동안 안전모 안 쓴 사람 찾아줘” 한 문장으로 관련 영상 추출" },
        { title: "오탐 필터링", body: "VLM이 상황 맥락을 이해해 위험도를 재평가" },
        { title: "리포트 근거 확보", body: "SafeLog와 결합해 안전관리 리포트 근거자료를 자동 확보" },
      ],
      imageAlt: "Safers AI 대화형 관제 검색 화면",
    },
    "ai-health": {
      short: "AI 보건관리",
      name: "AI 보건관리",
      tagline: "현장 환경을 감지하고, 근로자에게 필요한 안전·보건 정보를 안내",
      summary:
        "체감온도계로 현장을 실시간 모니터링하고 관심·주의·경고·위험 4단계로 자동 판정합니다. 기준 초과 시 관리자 앱에서 근로자 앱으로 휴식·수분섭취 안내를 전송합니다.",
      points: [
        { title: "체감온도 자동 감지", body: "관심·주의·경고·위험 4단계 기준에 따른 자동 판정" },
        { title: "즉각적인 현장 전파", body: "관리자 앱 → 근로자 앱으로 휴식·수분섭취 안내 자동 전송" },
        { title: "보건 리포트", body: "전파·조치 이력을 일별·월별 통계로 집계해 인쇄·제출" },
      ],
      imageAlt: "현장관리자·근로자용 Safers 모바일 앱 화면",
    },
    "live-cctv": {
      short: "실시간 CCTV 관제",
      name: "실시간 CCTV 관제",
      tagline: "현장 CCTV 영상을 실시간으로 확인하고 원격으로 관리",
      summary:
        "기존 카메라·NVR을 그대로 연계해 웹과 모바일에서 현장 영상을 실시간 확인합니다. RTSP / ONVIF 표준을 지원해 제조사와 관계없이 연결됩니다.",
      points: [
        { title: "기존 인프라 연계", body: "기존 카메라·NVR 연계, 제조사 독립적 연동" },
        { title: "PTZ 원격 제어", body: "웹에서 카메라 방향·줌을 원격으로 제어" },
        { title: "모바일 관제", body: "관리자 모바일 앱에서 언제든 현장 영상 확인" },
      ],
      imageAlt: "여러 현장 CCTV를 한 화면에 보여주는 실시간 관제 화면",
    },
    equipment: {
      short: "중장비 연동 관리",
      name: "중장비 연동 관리",
      tagline: "장비 등록·승인부터 실시간 위치와 이동경로까지",
      summary:
        "중장비 등록부터 현장 투입까지 하나의 체계로 관리합니다. 현장 맵에서 장비 위치를 실시간으로 확인하고, 타임라인으로 시간대별 이동 흐름을 재생합니다.",
      points: [
        { title: "등록·승인·투입", body: "장비 등록부터 승인, 현장 투입까지 단일 프로세스" },
        { title: "실시간 위치 관제", body: "3D 현장 맵에서 장비 위치와 상태를 실시간 확인" },
        { title: "이동경로 재생", body: "타임라인으로 시점별 장비 이동 동선 조회" },
      ],
      imageAlt: "현장 3D 맵 위에 중장비 위치가 표시된 관제 화면",
    },
  },

  /** "어느 현장의 하루" 단계별 글 */
  dayText: {
    twin: {
      time: "07:30",
      title: "작업 시작 전, 현장 전체를 한 화면에",
      body: "CCTV, 환경 센서, 작업자와 장비 위치가 3D 디지털 트윈 위에 모입니다. 오늘 위험한 구역이 어디인지 출근길에 확인합니다.",
      serviceName: "공통 기반 · 현장 3D 통합관리",
      imageAlt: "현장 3D 통합관리 화면",
    },
    safety: {
      time: "10:24",
      title: "B동 12층, 안전모 미착용 감지",
      body: "AI가 영상 속 위험을 스스로 찾아 관리자에게 바로 알립니다. 해당 구역에는 안내 방송이 자동으로 송출됩니다.",
      serviceName: "AI 안전감지 + AI 블랙박스",
      imageAlt: "AI가 안전모 미착용 작업자를 감지한 CCTV 화면",
    },
    health: {
      time: "13:10",
      title: "체감온도 ‘경고’ 단계 진입",
      body: "기준을 넘는 순간 근로자 앱으로 휴식과 수분 섭취 안내가 전달됩니다. 전파 이력은 보건 리포트로 남습니다.",
      serviceName: "AI 보건관리",
      imageAlt: "근로자 휴대폰으로 체감온도·안전 안내가 전달되는 화면",
    },
    equipment: {
      time: "14:40",
      title: "굴착기가 작업 구역으로 진입",
      body: "등록·승인된 장비의 위치와 이동 경로를 현장 맵에서 실시간으로 따라갑니다.",
      serviceName: "중장비 연동 관리",
      imageAlt: "현장 맵 위에 굴착기 이동 경로가 그려지는 화면",
    },
    cctv: {
      time: "16:00",
      title: "본사에서 현장 영상을 직접 확인",
      body: "기존 CCTV를 그대로 연결해 본사와 모바일에서 실시간으로 보고, 카메라 방향과 줌도 원격으로 조정합니다.",
      serviceName: "실시간 CCTV 관제",
      imageAlt: "여러 현장 CCTV를 한 화면에 보여주는 관제 화면",
    },
    chat: {
      time: "17:50",
      title: "“오늘 안전모 안 쓴 사람 찾아줘”",
      body: "하루치 영상을 돌려보는 대신 한 문장으로 묻습니다. AI가 관련 장면을 찾아 요약해 보고합니다.",
      serviceName: "AI 대화형 관제",
      imageAlt: "Safers AI에게 현장명을 말하자 해당 현장으로 이동하는 화면",
    },
    safelog: {
      time: "다음 날",
      title: "그때 그 순간을 3D로 다시 재생",
      body: "위험 감지부터 조치까지의 기록이 3D 타임라인에 남아, 관리·감독 의무 이행의 근거가 됩니다.",
      serviceName: "3D 블랙박스 SafeLog",
      imageAlt: "SafeLog에 기록된 위험 이벤트 목록 화면",
    },
  },
};

export type Dict = typeof ko;
