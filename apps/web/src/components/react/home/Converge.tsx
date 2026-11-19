import { Cctv, ChevronRight, Drone, Forklift, HardHat, Siren, Thermometer, type LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { videos } from "../../../data/content";
import { translate } from "../../../i18n";
import { VideoShot } from "../Section";

// 흩어진 시스템 칩이 처음 놓이는 위치 [가로 vw, 세로 vh]
const chipOrigins: [number, number][] = [
  [-30, -20],
  [30, -16],
  [-35, 6],
  [33, 4],
  [-20, 26],
  [22, 28],
];

const chipIcons: LucideIcon[] = [Cctv, Thermometer, Siren, HardHat, Drone, Forklift];

/** 스크롤하면 흩어진 시스템 6개가 가운데로 모이고, 하나의 3D 화면으로 바뀐다 */
export default function Converge({ lang }: { lang: string }) {
  const text = translate(lang).home.converge;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const titleA = useTransform(scrollYProgress, [0, 0.3, 0.38], [1, 1, 0]);
  const titleB = useTransform(scrollYProgress, [0.38, 0.5], [0, 1]);
  const titleBy = useTransform(scrollYProgress, [0.38, 0.5], [24, 0]);
  const shotOpacity = useTransform(scrollYProgress, [0.3, 0.48], [0, 1]);
  const shotScale = useTransform(scrollYProgress, [0.32, 0.8], [0.55, 1]);
  const targetOpacity = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0]);
  const targetScale = useTransform(scrollYProgress, [0, 0.38], [1, 0.82]);
  const progressWidth = useTransform(scrollYProgress, [0.02, 0.42], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[280vh] bg-background">
      <div className="sticky top-18 flex h-[calc(100svh-4.5rem)] flex-col items-center overflow-hidden px-5">
        <div className="relative mt-[8vh] grid w-full max-w-4xl place-items-center text-center">
          <motion.div style={{ opacity: titleA }} className="col-start-1 row-start-1">
            <h2 className="text-[2.25rem] font-bold display-tight sm:text-5xl lg:text-6xl">
              {text.titleA[0]}
              <br />
              {text.titleA[1]}
            </h2>
            <div className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base font-semibold sm:text-lg">
              <span className="flex flex-col items-center leading-tight">
                <span className="text-muted-foreground">{text.scattered}</span>
                <span className="mt-1 text-sm font-medium text-muted-foreground/80 sm:text-base">{text.scatteredSub}</span>
              </span>
              <span className="relative flex w-20 items-center sm:w-28" aria-hidden>
                <span className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-border">
                  <motion.span style={{ width: progressWidth }} className="absolute inset-y-0 left-0 bg-primary" />
                </span>
                <ChevronRight className="-ml-2 size-5 text-primary" strokeWidth={2.5} />
              </span>
              <span className="text-primary">{text.platform}</span>
            </div>
          </motion.div>
          <motion.div style={{ opacity: titleB, y: titleBy }} className="col-start-1 row-start-1">
            <h2 className="text-[2.25rem] font-bold display-tight sm:text-5xl lg:text-6xl">
              {text.titleB.before}
              <span className="text-primary">{text.titleB.highlight}</span>
              {text.titleB.after}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">{text.descriptionB}</p>
          </motion.div>
        </div>

        <div className="relative min-h-0 w-full max-w-6xl flex-1 [container-type:size]">
          {/* 흩어진 시스템이 모여드는 자리 */}
          <motion.div
            style={{ opacity: targetOpacity, scale: targetScale }}
            aria-hidden
            className="absolute left-1/2 top-[38%] -ml-[7.5rem] -mt-12 grid h-24 w-60 place-items-center rounded-2xl border-2 border-dashed border-primary/50 bg-primary/5"
          >
            <span className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Safers</span>
          </motion.div>

          {text.systems.map((label, i) => (
            <ConvergeChip
              key={label}
              label={label}
              icon={chipIcons[i] ?? Cctv}
              index={i}
              origin={chipOrigins[i] ?? [0, 0]}
              progress={scrollYProgress}
            />
          ))}

          <motion.div
            style={{
              opacity: shotOpacity,
              scale: shotScale,
              // 제목 아래 남은 공간에 맞춰 폭을 정해서 16:9 영상이 항상 다 보이게 한다
              width: "min(100%, 64rem, calc((100cqh - 3rem) * 16 / 9))",
            }}
            className="absolute inset-x-0 top-6 mx-auto origin-top"
          >
            <VideoShot src={videos.convergeTwinLoop} poster={videos.convergeTwinPoster} label={text.videoLabel} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ConvergeChip({
  label,
  icon: Icon,
  index,
  origin,
  progress,
}: {
  label: string;
  icon: LucideIcon;
  index: number;
  origin: [number, number];
  progress: MotionValue<number>;
}) {
  const x = useTransform(progress, [0.05, 0.4], [`${origin[0]}vw`, "0vw"]);
  const y = useTransform(progress, [0.05, 0.4], [`${origin[1]}vh`, "0vh"]);
  const opacity = useTransform(progress, [0, 0.3, 0.42], [1, 1, 0]);
  const scale = useTransform(progress, [0.25, 0.42], [1, 0.6]);

  return (
    <motion.div
      style={{ x, y, opacity, scale }}
      className="absolute left-1/2 top-[38%] min-w-44 -translate-x-1/2 -translate-y-1/2 sm:min-w-54"
    >
      <div
        className="rounded-2xl border border-border bg-card p-3 shadow-soft animate-float sm:p-4"
        style={{ animationDelay: `${index * -0.8}s` }}
      >
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-foreground">
            <Icon className="size-5" />
          </span>
          <p className="whitespace-nowrap text-base font-bold sm:text-lg">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}
