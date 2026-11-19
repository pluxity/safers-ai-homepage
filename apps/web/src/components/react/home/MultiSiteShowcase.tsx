import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { videos } from "../../../data/content";
import { translate } from "../../../i18n";
import { Reveal, VideoShot } from "../Section";

/** 전국 대시보드 영상: 스크롤하면 살짝 커지고, 아래 세 가지 특징이 차례로 나타난다 */
export default function MultiSiteShowcase({ lang }: { lang: string }) {
  const text = translate(lang).home.multiSite;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);

  return (
    <>
      <motion.div ref={ref} style={{ scale }} className="mt-16 origin-bottom">
        <VideoShot src={videos.dashboard} poster={videos.dashboardPoster} label={text.videoLabel} />
      </motion.div>

      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {text.highlights.map(([title, desc], i) => (
          <Reveal key={title} delay={i * 0.08} className="border-t-2 border-foreground pt-5">
            <p className="text-xl font-bold">{title}</p>
            <p className="mt-2 text-lg text-muted-foreground">{desc}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}
