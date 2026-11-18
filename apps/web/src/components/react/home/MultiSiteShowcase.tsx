import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { videos } from "../../../data/content";
import { Reveal, VideoShot } from "../Section";

const highlights = [
  ["정상부터 위험까지", "5단계로 나뉜 현장별 안전 상태"],
  ["실시간 공유", "지역별 현황과 최근 이벤트"],
  ["데이터 기반 분석", "축적된 기록으로 현장별 안전 현황 비교"],
] as const;

/** 전국 대시보드 영상: 스크롤하면 살짝 커지고, 아래 세 가지 특징이 차례로 나타난다 */
export default function MultiSiteShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);

  return (
    <>
      <motion.div ref={ref} style={{ scale }} className="mt-16 origin-bottom">
        <VideoShot src={videos.dashboard} poster={videos.dashboardPoster} label="전국 현장 통합 대시보드 화면" />
      </motion.div>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {highlights.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08} className="border-t-2 border-foreground pt-5">
            <p className="text-xl font-bold">{t}</p>
            <p className="mt-2 text-lg text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}
