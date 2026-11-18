import { ArrowRight, Check, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";

import { services, shots } from "../../../data/content";
import { buttonClass } from "../../ui/button";
import { cn } from "../../../lib/cn";
import { SectionHeading } from "../Section";

const siteOptions = ["1곳", "2–5곳", "6곳 이상"] as const;
type SiteOption = (typeof siteOptions)[number];

const cctvOptions = [
  {
    id: "existing",
    title: "네, 기존 CCTV를 활용할게요",
    desc: "RTSP / ONVIF 표준으로 제조사와 관계없이 연결하고 AI 영상분석을 적용합니다.",
  },
  {
    id: "new",
    title: "아니요, 새로 구축할게요",
    desc: "AI 분석에 최적화된 장비와 게이트웨이 서버를 함께 구축합니다. 폐쇄망·온프레미스도 대응합니다.",
  },
] as const;
type CctvOption = (typeof cctvOptions)[number]["id"];

/** 세 가지를 고르면 구성을 보여 주고, 그 구성을 담아 문의 페이지로 보낸다 */
export default function Configurator() {
  const [sites, setSites] = useState<SiteOption>("1곳");
  const [cctv, setCctv] = useState<CctvOption>("existing");
  const [picked, setPicked] = useState<string[]>(["ai-safety"]);
  const multi = sites !== "1곳";

  const toggle = (id: string) =>
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const pickedServices = services.filter((s) => picked.includes(s.id));

  // 문의 페이지가 읽어 갈 수 있게 주소 뒤에 선택값을 붙인다
  const contactHref = `/contact?${new URLSearchParams({ services: picked.join(","), sites, cctv }).toString()}`;

  return (
    <section id="configure" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading
          eyebrow="우리 현장 구성 만들어보기"
          title="세 가지만 고르면, 구성이 완성됩니다"
          description="선택한 구성을 그대로 담아 상담을 요청할 수 있습니다."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-14">
            <Question no="1" title="운영 중인 현장은 몇 곳인가요?">
              <div className="grid grid-cols-3 gap-2">
                {siteOptions.map((o) => (
                  <OptionButton key={o} selected={sites === o} onClick={() => setSites(o)} className="py-4 text-lg">
                    {o}
                  </OptionButton>
                ))}
              </div>
            </Question>

            <Question no="2" title="현장에 CCTV가 이미 설치되어 있나요?">
              <div className="grid gap-3 sm:grid-cols-2">
                {cctvOptions.map((o) => (
                  <OptionButton key={o.id} selected={cctv === o.id} onClick={() => setCctv(o.id)} className="p-5 text-left">
                    <span className="block text-lg font-semibold">{o.title}</span>
                    <span
                      className={cn(
                        "mt-2 block text-[0.95rem] leading-relaxed",
                        cctv === o.id ? "opacity-90" : "text-muted-foreground",
                      )}
                    >
                      {o.desc}
                    </span>
                  </OptionButton>
                ))}
              </div>
            </Question>

            <Question no="3" title="필요한 서비스를 골라주세요">
              <div className="flex flex-wrap gap-2">
                {services.map((s) => {
                  const on = picked.includes(s.id);
                  return (
                    <OptionButton
                      key={s.id}
                      selected={on}
                      onClick={() => toggle(s.id)}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-base"
                    >
                      {on ? <Check className="size-4" /> : <Plus className="size-4" />}
                      {s.name}
                    </OptionButton>
                  );
                })}
              </div>
            </Question>
          </div>

          <div>
            <div className="sticky top-28 overflow-hidden rounded-2xl bg-ink text-ink-foreground shadow-panel">
              <div className="relative aspect-[2/1] overflow-hidden bg-card">
                <img
                  src={shots.configSingleSite}
                  alt="한 현장의 3D 통합관리 화면"
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
                    multi ? "opacity-0" : "opacity-100",
                  )}
                />
                <img
                  src={shots.configMultiSite}
                  alt="여러 현장을 한눈에 보여주는 전국 현장 통합 대시보드 화면"
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
                    multi ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[0.95rem] font-semibold text-primary-bright">나의 구성</p>
                <ul className="mt-5 space-y-2">
                  <AnimatePresence initial={false}>
                    {multi && (
                      <Layer key="dash" tag="확장">
                        전국 현장 통합 대시보드
                      </Layer>
                    )}
                    {pickedServices.map((s) => (
                      <Layer key={s.id} tag={s.no}>
                        {s.name}
                      </Layer>
                    ))}
                    <Layer key="base" tag="기본" strong>
                      현장 3D 통합관리
                    </Layer>
                  </AnimatePresence>
                </ul>
                <p className="mt-5 text-[0.95rem] text-ink-muted">
                  현장 {sites} · {cctv === "existing" ? "기존 CCTV 연동" : "AI 영상분석 장비 포함"}
                </p>
                <a href={contactHref} className={buttonClass("primary", "xl", "mt-7 w-full")}>
                  이 구성으로 상담 요청하기 <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-4xl text-base leading-relaxed text-muted-foreground">
          모든 구성에 실시간 영상관제, AI 영상분석, 위험상황 자동감지, 이벤트 자동 기록, 5단계 위험경보가 기본 제공되며, VPN
          암호화 통신으로 KISA 인증 기준을 충족합니다.
        </p>
      </div>
    </section>
  );
}

function Question({ no, title, children }: { no: string; title: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="flex items-baseline gap-3 text-2xl font-bold">
        <span className="font-mono text-lg text-primary">Q{no}</span>
        {title}
      </legend>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

function OptionButton({
  selected,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { selected: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "rounded-xl border-2 font-semibold transition-colors",
        selected ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card hover:border-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Layer({ tag, strong, children }: { tag: string; strong?: boolean; children: ReactNode }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden"
    >
      <div
        className={cn(
          "flex items-center gap-4 rounded-lg px-4 py-3 text-lg",
          strong ? "bg-primary text-primary-foreground" : "border border-ink-border",
        )}
      >
        <span className={cn("w-10 font-mono text-sm", strong ? "opacity-90" : "text-ink-muted")}>{tag}</span>
        <span className="font-semibold">{children}</span>
      </div>
    </motion.li>
  );
}
