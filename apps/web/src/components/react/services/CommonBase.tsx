import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { videos } from "../../../data/content";
import { cn } from "../../../lib/cn";
import { SectionHeading, VideoShot } from "../Section";

const pillars = [
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
];

/** 공통 기반(현장 3D 통합관리): 탭 세 개로 기능을 나눠 보여 준다 */
export default function CommonBase() {
  const [tab, setTab] = useState(0);
  const p = pillars[tab];
  if (!p) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading
          eyebrow="공통 기반 · 모든 현장에 기본 제공"
          title="현장 3D 통합관리"
          description="CCTV를 중심으로 환경 센서, 위험 경보, 스마트 안전장구, 드론 데이터를 3D 디지털 트윈 위에 모아 현장 전체를 한 화면에서 관리합니다."
        />

        <div role="tablist" aria-label="현장 3D 통합관리 기능" className="mt-14 flex gap-2 border-b border-border">
          {pillars.map((x, i) => (
            <button
              key={x.k}
              role="tab"
              type="button"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={cn(
                "relative px-4 pb-4 pt-2 text-lg font-semibold transition-colors sm:px-6 sm:text-xl",
                tab === i ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {x.k}
              {tab === i && (
                <motion.span layoutId="base-tab" className="absolute inset-x-0 -bottom-px h-[0.1875rem] bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.6fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold display-tight">{p.t}</h3>
              <ul className="mt-8 space-y-4">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-lg">
                    <Check className="mt-1.5 size-5 shrink-0 text-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <VideoShot
            src={videos.twinLoop}
            poster={videos.twinPoster}
            label="현장 3D 통합관리 화면"
            className="aspect-video object-contain"
          />
        </div>
      </div>
    </section>
  );
}
