import { ArrowRight } from "lucide-react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { getDaySteps, type DayStep } from "../../../data/content";
import { translate } from "../../../i18n";
import { cn } from "../../../lib/cn";

/**
 * "어느 현장의 하루" 타임라인과 오른쪽 고정 화면.
 * 글이 화면 가운데에 오면 해당 단계의 클립이 오른쪽에서 재생된다. (제목 부분은 Astro 쪽에 있음)
 * servicesPath: 언어에 맞는 서비스 페이지 주소 (Astro 쪽에서 getRelativeLocaleUrl로 만들어 넘긴다)
 */
export default function DayStory({ lang, servicesPath }: { lang: string; servicesPath: string }) {
  const steps = getDaySteps(lang);
  const more = translate(lang).home.day.more;
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-28 pt-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 lg:px-8 lg:pb-36">
      <ol className="relative border-l border-ink-border">
        {steps.map((s, i) => (
          <DayStepItem
            key={s.time}
            step={s}
            index={i}
            active={active === i}
            onActive={setActive}
            moreLabel={more}
            servicesPath={servicesPath}
          />
        ))}
      </ol>

      <div className="hidden lg:block">
        <div className="sticky top-[calc(50svh-15rem)]">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-ink-raised shadow-panel">
            {steps.map((s, i) => (
              <MotionPhoto
                key={s.time}
                step={s}
                active={active === i}
                eager={i === 0}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-[opacity]",
                  active === i ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between text-ink-muted">
            <span className="text-lg font-semibold text-ink-foreground">{steps[active]?.serviceName}</span>
            <span className="font-mono">
              {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayStepItem({
  step,
  index,
  active,
  onActive,
  moreLabel,
  servicesPath,
}: {
  step: DayStep;
  index: number;
  active: boolean;
  onActive: (i: number) => void;
  moreLabel: string;
  servicesPath: string;
}) {
  // 긴 줄 전체가 아니라 글 부분을 지켜봐서, 글이 화면 가운데에 올 때 그림이 바뀌게 한다
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-48% 0px -48% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li
      className={cn(
        "relative py-10 pl-8 transition-opacity duration-500 sm:pl-12 lg:flex lg:min-h-[62vh] lg:flex-col lg:justify-center lg:py-0",
        active ? "lg:opacity-100" : "lg:opacity-35",
      )}
    >
      <span
        className={cn(
          "absolute -left-1.75 top-12 size-3.5 rounded-full border-2 transition-colors lg:top-1/2 lg:-mt-1.75",
          active ? "border-primary-bright bg-primary-bright" : "border-ink-muted bg-ink",
        )}
      />
      <div ref={ref}>
        <p className="text-3xl font-bold tabular-nums text-primary-bright sm:text-4xl">{step.time}</p>
        <h3 className="mt-4 text-2xl font-bold display-tight sm:text-3xl">{step.title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">{step.body}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="rounded-full border border-ink-border px-4 py-1.5 text-[0.95rem]">{step.serviceName}</span>
          {step.serviceId && (
            <a
              href={`${servicesPath}#${step.serviceId}`}
              className="inline-flex items-center gap-1 text-[0.95rem] font-semibold text-primary-bright hover:underline"
            >
              {moreLabel} <ArrowRight className="size-4" />
            </a>
          )}
        </div>
      </div>
      <InlineMotionPhoto step={step} />
    </li>
  );
}

/** 단계가 활성화되면 클립을 한 번 재생하고 마지막 장면에서 멈춘다 */
function MotionPhoto({
  step,
  active,
  eager = false,
  className,
}: {
  step: DayStep;
  active: boolean;
  eager?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (active) {
      v.currentTime = 0;
      void v.play().catch(() => {});
      return;
    }
    // 사라지는 동안은 장면을 유지했다가, 다 사라진 뒤 조용히 처음으로 되감는다
    const timer = window.setTimeout(() => {
      v.pause();
      v.currentTime = 0;
    }, 1100);
    return () => window.clearTimeout(timer);
  }, [active]);

  const media = "h-full w-full object-cover object-top";

  return (
    <div className={cn("overflow-hidden", className)}>
      {step.clip ? (
        <video
          ref={ref}
          src={step.clip}
          poster={step.image}
          aria-label={step.imageAlt}
          muted
          playsInline
          preload={eager ? "auto" : "metadata"}
          className={media}
        />
      ) : (
        <img src={step.image} alt={step.imageAlt} loading={eager ? "eager" : "lazy"} className={media} />
      )}
    </div>
  );
}

/** 모바일: 단계마다 자기 클립을 갖고, 화면에 들어오면 재생한다 */
function InlineMotionPhoto({ step }: { step: DayStep }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  return (
    <div ref={ref} className="mt-8 lg:hidden">
      <MotionPhoto step={step} active={inView} className="aspect-video rounded-lg border border-ink-border bg-ink-raised" />
    </div>
  );
}
