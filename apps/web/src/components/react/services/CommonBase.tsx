import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { videos } from "../../../data/content";
import { translate } from "../../../i18n";
import { cn } from "../../../lib/cn";
import { SectionHeading, VideoShot } from "../Section";

/** 공통 기반(현장 3D 통합관리): 탭 세 개로 기능을 나눠 보여 준다 */
export default function CommonBase({ lang }: { lang: string }) {
  const text = translate(lang).services.base;
  const [tab, setTab] = useState(0);
  const p = text.pillars[tab];
  if (!p) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} description={text.description} />

        <div role="tablist" aria-label={text.tabsLabel} className="mt-14 flex gap-2 border-b border-border">
          {text.pillars.map((x, i) => (
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
                <motion.span layoutId="base-tab" className="absolute inset-x-0 -bottom-px h-0.75 bg-primary" />
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
            label={text.videoLabel}
            className="aspect-video object-contain"
          />
        </div>
      </div>
    </section>
  );
}
