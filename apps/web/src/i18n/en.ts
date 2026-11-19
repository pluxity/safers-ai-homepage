// 영어 문구 (초안). ko.ts와 같은 모양(Dict)이어야 하며, 빠진 항목이 있으면 타입 에러가 난다.
// 회사·제품 공식 영문 표기와 마케팅 문구는 기획·영업 쪽 검토가 필요하다.
import type { Dict } from "./ko";

export const en: Dict = {
  meta: {
    notFoundTitle: "Page not found | Safers",
  },

  nav: {
    platform: "Platform",
    services: "Services",
    contact: "Contact Sales",
    pluxity: "PLUXITY",
    pluxityHome: "PLUXITY website",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  footer: {
    description:
      "An integrated safety platform for construction sites that detects hazards with AI CCTV and records what happens before and after incidents in 3D.",
    pluxityButton: "Visit PLUXITY website",
    menuTitle: "Menu",
    contactTitle: "Contact",
    company: "PLUXITY Co., Ltd. · CEO Jaemin Yoon",
    address: "Suites 801–804, Pyeongchon Highfield, 66 Beolmal-ro, Dongan-gu, Anyang-si, Gyeonggi-do, Korea",
    copyright: "© PLUXITY Co., Ltd. All Rights Reserved.",
  },

  cta: {
    title: ["A setup that fits your site,", "designed with you."],
    description: "Tell us about your site size and existing CCTV, and we'll recommend only the services you need.",
    button: "Contact Sales",
  },

  home: {
    title: "Safers | AI CCTV Safety Management for Construction Sites",
    hero: {
      eyebrow: "AI CCTV-based integrated safety for construction sites",
      title: ["Detect risks first.", "Capture every incident, before and after, in 3D."],
      description:
        "Safers finds site hazards in real time with AI video analytics and brings your scattered safety solutions together on one screen.",
      primary: "Contact Sales",
      secondary: "Explore services",
    },
    converge: {
      titleA: ["Six screens,", "one site."],
      scattered: "Scattered safety tools",
      scatteredSub: "Separate screens · separate logins",
      platform: "One platform",
      titleB: { before: "Now, on ", highlight: "a single screen", after: "." },
      descriptionB: "Safers puts AI CCTV at the center and brings scattered safety solutions onto one 3D digital twin.",
      videoLabel: "3D integrated site management screen",
      systems: ["CCTV monitoring", "Environment sensors", "Hazard alerts", "Smart safety gear", "Drone observation", "Heavy equipment"],
    },
    day: {
      eyebrow: "A day on site",
      title: ["From clock-in to the next day,", "Safers keeps watch over the site."],
      description: "Follow one site through a single day and see how each Safers service fits in.",
      more: "Learn more",
      cta: "See all five services",
    },
    multiSite: {
      eyebrow: "Running two or more sites?",
      title: ["More sites,", "still one screen."],
      description:
        "See the safety status and key hazard events of every site on a single map. Jump straight into any site's 3D dashboard.",
      videoLabel: "Multi-site dashboard",
      highlights: [
        ["From normal to critical", "Five safety levels for every site"],
        ["Shared in real time", "Regional status and recent events"],
        ["Data-driven insight", "Compare sites using accumulated records"],
      ],
    },
  },

  services: {
    title: "Services | Safers Construction Site Safety",
    hero: {
      eyebrow: "Services",
      title: ["Choose what you need,", "scale as you grow."],
      description:
        "Every site starts with 3D integrated management. Add the services you need on top, and expand to a multi-site view as your sites grow.",
      jumpTitle: "Jump to an optional service",
    },
    base: {
      eyebrow: "Core platform · included with every site",
      title: "3D Integrated Site Management",
      description:
        "Bring CCTV, environment sensors, hazard alerts, smart safety gear, and drone data onto a 3D digital twin and manage the whole site from one screen.",
      tabsLabel: "3D integrated site management features",
      videoLabel: "3D integrated site management screen",
      pillars: [
        {
          k: "Detect",
          t: "AI CCTV spots hazards first",
          items: [
            "Automatic detection of abnormal behavior",
            "Alerts for danger-zone entry and collision risk",
            "Instant alerts from environment, gas, and fire sensors",
          ],
        },
        {
          k: "Understand",
          t: "See who is doing what, and where, in 3D",
          items: ["Worker and equipment locations visualized", "Work status by floor and zone", "Drone and connected device data in one view"],
        },
        {
          k: "Operate",
          t: "Headquarters and sites share the same screen",
          items: ["Safety status of every site in one place", "Location-based response when incidents occur", "Follow-up management based on historical data"],
        },
      ],
    },
    details: {
      eyebrow: "Optional services 01 – 05",
      title: "Add only what you need",
      description: "Choose any of the five services, regardless of how many sites you run.",
    },
    config: {
      eyebrow: "Build your setup",
      title: "Three choices, and your setup is ready",
      description: "Request a consultation with the setup you've built.",
      q1: "How many sites do you operate?",
      q2: "Do your sites already have CCTV?",
      q3: "Which services do you need?",
      cctvOptions: {
        EXISTING: {
          title: "Yes, use our existing CCTV",
          desc: "We connect cameras from any manufacturer via RTSP / ONVIF and apply AI video analytics.",
        },
        NEW: {
          title: "No, we'll install new cameras",
          desc: "We deploy equipment and gateway servers optimized for AI analytics. Closed-network and on-premises deployments are also supported.",
        },
      },
      singleAlt: "3D integrated management screen for a single site",
      multiAlt: "Dashboard showing many sites at a glance",
      mine: "My setup",
      dashboard: "Multi-site dashboard",
      tagExpand: "Scale",
      tagBase: "Core",
      base: "3D Integrated Site Management",
      sitesPrefix: "Size:",
      cctvExisting: "Existing CCTV connected",
      cctvNew: "Includes AI video analytics equipment",
      button: "Request a consultation with this setup",
      footnote:
        "Every setup includes live video monitoring, AI video analytics, automatic hazard detection, automatic event recording, and five-level hazard alerts, with VPN-encrypted communication meeting KISA (Korea Internet & Security Agency) certification standards.",
    },
  },

  contact: {
    title: "Contact Sales | Safers",
    eyebrow: "Contact Sales",
    heading: ["Let us propose", "the right setup for your site."],
    lead: "We'll review your inquiry and get back to you shortly.",
    direct: "Reach us directly",
    form: {
      fromConfigurator: "The setup you built on the Services page has been applied below.",
      topicsLegend: "Services of interest (select all that apply)",
      platform: "Integrated platform",
      partnership: "Partnership / Marketing",
      sitesLegend: "Number of sites",
      cctvLegend: "CCTV environment",
      cctv: { EXISTING: "Use existing CCTV", NEW: "Install new", UNDECIDED: "Not decided" },
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "Message",
      messagePlaceholder: "Tell us your site location and preferred timeline so we can prepare a more accurate proposal.",
      agree: "I agree to the privacy policy. (Required)",
      errAgree: "Please agree to the privacy policy.",
      errTopic: "Please select at least one service.",
      success: "Your inquiry has been received. We'll get back to you shortly.",
      failure: "We couldn't send your inquiry. Please email us directly:",
      sending: "Sending…",
      submit: "Send inquiry",
    },
  },

  notFound: {
    eyebrow: "404 · PAGE NOT FOUND",
    title: ["We couldn't", "find that page."],
    description: ["The address may have changed or the page was removed.", "Use the button below to find your way."],
    home: "Back to home",
  },

  siteCounts: { ONE: "1 site", TWO_TO_FIVE: "2–5 sites", SIX_OR_MORE: "6+ sites", UNDECIDED: "Not decided" },

  serviceText: {
    "ai-safety": {
      short: "AI safety detection · black box",
      name: "AI Safety Detection + AI Black Box",
      tagline: "AI detects hazards and records what happens before and after",
      summary:
        "Apply AI video analytics to your existing CCTV to automatically flag and record hazardous situations. Every record, from detection to follow-up action, is kept on a 3D digital twin timeline (SafeLog).",
      points: [
        { title: "Intelligent anomaly detection", body: "Detects falls, intrusion, loitering, missing hard hats and more, and alerts managers instantly" },
        { title: "Smart emergency broadcast", body: "Preset scenarios for fire, collapse and more send evacuation and guidance announcements to the affected zone" },
        { title: "3D Black Box SafeLog", body: "Records hazards and actions over time as evidence that safety obligations were met" },
      ],
      imageAlt: "AI safety detection screen with hazard alerts on a 3D digital twin",
    },
    "ai-chat": {
      short: "Conversational AI monitoring",
      name: "Conversational AI Monitoring",
      tagline: "Find features and information quickly in plain language",
      summary:
        "Instead of scrubbing through days of footage, ask in one sentence. A three-step pipeline of fast detection (YOLO), context judgment (VLM), and natural-language reporting (AI Agent) filters false alarms and summarizes the situation.",
      points: [
        { title: "Natural-language video search", body: "“Find people without hard hats in the last two days” pulls the relevant footage" },
        { title: "False-alarm filtering", body: "The VLM understands context and re-evaluates risk" },
        { title: "Evidence for reports", body: "Combined with SafeLog to collect evidence for safety reports automatically" },
      ],
      imageAlt: "Safers conversational AI search screen",
    },
    "ai-health": {
      short: "AI health management",
      name: "AI Health Management",
      tagline: "Sense site conditions and give workers the safety and health guidance they need",
      summary:
        "Monitor the site in real time with heat-index sensors and classify conditions into four levels: watch, caution, warning, and danger. When a threshold is crossed, rest and hydration guidance goes from the manager app to the worker app.",
      points: [
        { title: "Automatic heat-index detection", body: "Automatic classification into four levels: watch, caution, warning, danger" },
        { title: "Instant on-site alerts", body: "Rest and hydration guidance sent from the manager app to the worker app" },
        { title: "Health reports", body: "Alert and action history aggregated into daily and monthly statistics for printing and submission" },
      ],
      imageAlt: "Safers mobile app screens for site managers and workers",
    },
    "live-cctv": {
      short: "Live CCTV monitoring",
      name: "Live CCTV Monitoring",
      tagline: "View site CCTV in real time and manage it remotely",
      summary:
        "Connect your existing cameras and NVRs as they are and view site footage live on the web and mobile. RTSP / ONVIF support means cameras from any manufacturer can connect.",
      points: [
        { title: "Works with existing infrastructure", body: "Connects existing cameras and NVRs, independent of manufacturer" },
        { title: "Remote PTZ control", body: "Control camera direction and zoom from the web" },
        { title: "Mobile monitoring", body: "Check site footage anytime in the manager mobile app" },
      ],
      imageAlt: "Live monitoring screen showing CCTV from multiple sites",
    },
    equipment: {
      short: "Heavy equipment management",
      name: "Heavy Equipment Management",
      tagline: "From registration and approval to live location and movement history",
      summary:
        "Manage heavy equipment in one workflow, from registration to deployment on site. See equipment locations live on the site map and replay movement over time on a timeline.",
      points: [
        { title: "Register · approve · deploy", body: "One process from equipment registration to approval and deployment" },
        { title: "Live location monitoring", body: "Equipment location and status on a 3D site map in real time" },
        { title: "Movement replay", body: "Review equipment routes at any point on the timeline" },
      ],
      imageAlt: "Monitoring screen with heavy equipment positions on a 3D site map",
    },
  },

  dayText: {
    twin: {
      time: "07:30",
      title: "Before work starts, the whole site on one screen",
      body: "CCTV, environment sensors, and worker and equipment locations come together on a 3D digital twin. Check today's danger zones on the way in.",
      serviceName: "Core · 3D Integrated Site Management",
      imageAlt: "3D integrated site management screen",
    },
    safety: {
      time: "10:24",
      title: "Building B, 12F: missing hard hat detected",
      body: "AI finds the hazard in the footage and alerts the manager right away. An announcement plays automatically in that zone.",
      serviceName: "AI Safety Detection + AI Black Box",
      imageAlt: "CCTV screen where AI detected a worker without a hard hat",
    },
    health: {
      time: "13:10",
      title: "Heat index enters the ‘warning’ level",
      body: "The moment the threshold is crossed, rest and hydration guidance goes to the worker app. The alert history is kept in the health report.",
      serviceName: "AI Health Management",
      imageAlt: "Heat-index and safety guidance delivered to a worker's phone",
    },
    equipment: {
      time: "14:40",
      title: "An excavator enters the work zone",
      body: "Follow the location and route of registered, approved equipment on the site map in real time.",
      serviceName: "Heavy Equipment Management",
      imageAlt: "Excavator route drawn on the site map",
    },
    cctv: {
      time: "16:00",
      title: "Headquarters checks the site footage directly",
      body: "Existing CCTV connects as is, so headquarters and mobile users watch live and adjust camera direction and zoom remotely.",
      serviceName: "Live CCTV Monitoring",
      imageAlt: "Monitoring screen showing CCTV from multiple sites",
    },
    chat: {
      time: "17:50",
      title: "“Find anyone without a hard hat today”",
      body: "Instead of rewatching a day of footage, ask in one sentence. AI finds the relevant scenes and reports a summary.",
      serviceName: "Conversational AI Monitoring",
      imageAlt: "Saying a site name to Safers AI moves the view to that site",
    },
    safelog: {
      time: "Next day",
      title: "Replay that exact moment in 3D",
      body: "Everything from detection to action stays on a 3D timeline as evidence that safety obligations were met.",
      serviceName: "3D Black Box SafeLog",
      imageAlt: "Hazard events recorded in SafeLog",
    },
  },
};
