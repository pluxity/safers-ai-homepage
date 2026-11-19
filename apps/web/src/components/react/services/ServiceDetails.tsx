import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { getServices, type Service } from "../../../data/content";
import { translate } from "../../../i18n";
import { cn } from "../../../lib/cn";
import { Reveal, SectionHeading, Shot, VideoShot } from "../Section";

/** 선택형 서비스 5개: 왼쪽 목차가 따라오면서 지금 보고 있는 서비스를 표시한다 */
export default function ServiceDetails({ lang }: { lang: string }) {
  const text = translate(lang).services.details;
  const services = getServices(lang);
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} description={text.description} />
        <div className="mt-20 grid gap-16 lg:grid-cols-[15rem_1fr]">
          <aside className="hidden lg:block">
            <ul className="sticky top-32 space-y-1 border-l border-border">
              {services.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "-ml-px block border-l-[0.1875rem] py-2.5 pl-5 text-base transition-colors",
                      active === i
                        ? "border-primary font-semibold text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="mr-2 font-mono text-sm">{s.no}</span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <div className="space-y-32">
            {services.map((s, i) => (
              <ServiceArticle key={s.id} service={s} index={i} onActive={setActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceArticle({
  service: s,
  index,
  onActive,
}: {
  service: Service;
  index: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-35% 0px -55% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <article ref={ref} id={s.id} className="scroll-mt-28">
      <Reveal>
        <p className="font-mono text-lg font-medium text-primary">{s.no}</p>
        <h2 className="mt-2 text-4xl font-bold display-tight sm:text-5xl">{s.name}</h2>
        <p className="mt-4 text-xl font-medium sm:text-2xl">{s.tagline}</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{s.summary}</p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        {s.video ? (
          <VideoShot src={s.video} poster={s.videoPoster} label={s.imageAlt} className="aspect-video object-contain" />
        ) : (
          <Shot src={s.image} alt={s.imageAlt} className="aspect-16/10 object-cover object-top" />
        )}
      </Reveal>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {s.points.map((p, j) => (
          <Reveal key={p.title} delay={0.05 * j} className="border-t-2 border-foreground pt-5">
            <p className="text-lg font-bold">{p.title}</p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
