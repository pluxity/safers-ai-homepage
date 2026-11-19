import { ArrowRight, Check, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";

import { getServices, shots, type ServiceId } from "../../../data/content";
import { translate } from "../../../i18n";
import { buttonClass } from "../../ui/button";
import { cn } from "../../../lib/cn";
import { SectionHeading } from "../Section";

// 값은 API(DB enum)와 같은 코드로 둔다. 화면 글자는 문구 파일에서 꺼낸다.
const siteOptions = ["ONE", "TWO_TO_FIVE", "SIX_OR_MORE"] as const;
type SiteOption = (typeof siteOptions)[number];

const cctvOptions = ["EXISTING", "NEW"] as const;
type CctvOption = (typeof cctvOptions)[number];

/**
 * 세 가지를 고르면 구성을 보여 주고, 그 구성을 담아 문의 페이지로 보낸다.
 * contactPath: 언어에 맞는 문의 페이지 주소 (Astro 쪽에서 getRelativeLocaleUrl로 만들어 넘긴다)
 */
export default function Configurator({ lang, contactPath }: { lang: string; contactPath: string }) {
  const dict = translate(lang);
  const text = dict.services.config;
  const services = getServices(lang);

  const [sites, setSites] = useState<SiteOption>("ONE");
  const [cctv, setCctv] = useState<CctvOption>("EXISTING");
  const [picked, setPicked] = useState<ServiceId[]>(["ai-safety"]);
  const multi = sites !== "ONE";

  const toggle = (id: ServiceId) =>
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const pickedServices = services.filter((s) => picked.includes(s.id));

  // 문의 페이지가 읽어 갈 수 있게 주소 뒤에 선택값을 붙인다 (값은 언어와 상관없는 코드)
  const query = new URLSearchParams({ services: picked.join(","), sites, cctv }).toString();
  const contactHref = `${contactPath}?${query}`;

  return (
    <section id="configure" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} description={text.description} />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-14">
            <Question no="1" title={text.q1}>
              <div className="grid grid-cols-3 gap-2">
                {siteOptions.map((o) => (
                  <OptionButton key={o} selected={sites === o} onClick={() => setSites(o)} className="py-4 text-lg">
                    {dict.siteCounts[o]}
                  </OptionButton>
                ))}
              </div>
            </Question>

            <Question no="2" title={text.q2}>
              <div className="grid gap-3 sm:grid-cols-2">
                {cctvOptions.map((o) => (
                  <OptionButton key={o} selected={cctv === o} onClick={() => setCctv(o)} className="p-5 text-left">
                    <span className="block text-lg font-semibold">{text.cctvOptions[o].title}</span>
                    <span
                      className={cn(
                        "mt-2 block text-[0.95rem] leading-relaxed",
                        cctv === o ? "opacity-90" : "text-muted-foreground",
                      )}
                    >
                      {text.cctvOptions[o].desc}
                    </span>
                  </OptionButton>
                ))}
              </div>
            </Question>

            <Question no="3" title={text.q3}>
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
                  alt={text.singleAlt}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
                    multi ? "opacity-0" : "opacity-100",
                  )}
                />
                <img
                  src={shots.configMultiSite}
                  alt={text.multiAlt}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
                    multi ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[0.95rem] font-semibold text-primary-bright">{text.mine}</p>
                <ul className="mt-5 space-y-2">
                  <AnimatePresence initial={false}>
                    {multi && (
                      <Layer key="dash" tag={text.tagExpand}>
                        {text.dashboard}
                      </Layer>
                    )}
                    {pickedServices.map((s) => (
                      <Layer key={s.id} tag={s.no}>
                        {s.name}
                      </Layer>
                    ))}
                    <Layer key="base" tag={text.tagBase} strong>
                      {text.base}
                    </Layer>
                  </AnimatePresence>
                </ul>
                <p className="mt-5 text-[0.95rem] text-ink-muted">
                  {text.sitesPrefix} {dict.siteCounts[sites]} · {cctv === "EXISTING" ? text.cctvExisting : text.cctvNew}
                </p>
                <a href={contactHref} className={buttonClass("primary", "xl", "mt-7 w-full")}>
                  {text.button} <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-4xl text-base leading-relaxed text-muted-foreground">{text.footnote}</p>
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
