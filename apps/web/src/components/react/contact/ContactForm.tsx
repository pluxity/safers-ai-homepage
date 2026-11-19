import { Send, Sparkles } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { contact, getServices, serviceInquiryValue, type ServiceId } from "../../../data/content";
import { translate } from "../../../i18n";
import { buttonClass } from "../../ui/button";
import { cn } from "../../../lib/cn";

// 선택지의 value는 API(DB enum) 값이다. 화면 글자(label)는 언어마다 다르다.
type Topic = { label: string; value: string; serviceId?: ServiceId };

const baseTopic = "PLATFORM";
const siteValues = ["ONE", "TWO_TO_FIVE", "SIX_OR_MORE", "UNDECIDED"] as const;
const cctvValues = ["EXISTING", "NEW", "UNDECIDED"] as const;

type Status = { type: "success" | "error"; message: string } | null;

/** 도입 문의 폼: 입력값을 POST /api/inquiries 로 보낸다 */
export default function ContactForm({ lang }: { lang: string }) {
  const dict = translate(lang);
  const text = dict.contact.form;

  const topics: Topic[] = [
    { label: text.platform, value: baseTopic },
    ...getServices(lang).map((s) => ({ label: s.short, value: serviceInquiryValue[s.id], serviceId: s.id })),
    { label: text.partnership, value: "PARTNERSHIP" },
  ];

  const [topic, setTopic] = useState<string[]>([baseTopic]);
  const [sites, setSites] = useState<string>("ONE");
  const [cctv, setCctv] = useState<string>("UNDECIDED");
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [fromConfigurator, setFromConfigurator] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  // 서비스 페이지에서 고른 값을 폼에 채운다
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const ids = q.get("services")?.split(",").filter(Boolean) ?? [];
    const site = siteValues.find((v) => v === q.get("sites"));
    const cam = cctvValues.find((v) => v === q.get("cctv"));
    if (!ids.length && !site && !cam) return;

    const picked = ids.filter((id): id is ServiceId => id in serviceInquiryValue).map((id) => serviceInquiryValue[id]);

    setFromConfigurator(true);
    setTopic([baseTopic, ...picked]);
    if (site) setSites(site);
    if (cam) setCctv(cam);
  }, []);

  const toggle = (value: string) =>
    setTopic((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!agree) {
      setStatus({ type: "error", message: text.errAgree });
      return;
    }
    if (topic.length === 0) {
      setStatus({ type: "error", message: text.errTopic });
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") ?? "").trim();

    setSending(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: lang.toUpperCase(),
          services: topic,
          site_count: sites,
          cctv_env: cctv,
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: message || null,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus({ type: "success", message: text.success });
      form.reset();
      setAgree(false);
      setTopic([baseTopic]);
      setSites("ONE");
      setCctv("UNDECIDED");
      setFromConfigurator(false);
      window.history.replaceState(null, "", window.location.pathname);
    } catch {
      setStatus({ type: "error", message: `${text.failure} ${contact.email}` });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-10">
      {fromConfigurator && (
        <p className="mb-10 flex items-center gap-3 rounded-lg bg-primary-soft px-5 py-4 text-base text-accent-foreground">
          <Sparkles className="size-5 shrink-0 text-primary" />
          {text.fromConfigurator}
        </p>
      )}

      <fieldset>
        <legend className="text-lg font-bold">{text.topicsLegend}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((x) => (
            <Pill key={x.value} selected={topic.includes(x.value)} onClick={() => toggle(x.value)}>
              {x.label}
            </Pill>
          ))}
        </div>
      </fieldset>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <fieldset>
          <legend className="text-lg font-bold">{text.sitesLegend}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {siteValues.map((v) => (
              <Pill key={v} selected={sites === v} onClick={() => setSites(v)}>
                {dict.siteCounts[v]}
              </Pill>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-bold">{text.cctvLegend}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {cctvValues.map((v) => (
              <Pill key={v} selected={cctv === v} onClick={() => setCctv(v)}>
                {text.cctv[v]}
              </Pill>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field id="name" label={text.name} required maxLength={50} />
        <Field id="company" label={text.company} required maxLength={100} />
        <Field id="email" label={text.email} type="email" required maxLength={254} />
        <Field id="phone" label={text.phone} type="tel" required maxLength={30} />
      </div>
      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="block text-base font-semibold">
          {text.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={text.messagePlaceholder}
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      <div className="mt-8 flex items-start gap-3">
        <input
          id="agree"
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1.5 size-4 shrink-0 cursor-pointer accent-primary"
        />
        <label htmlFor="agree" className="cursor-pointer text-base leading-relaxed text-muted-foreground">
          {text.agree}
        </label>
      </div>

      {status && (
        <p
          role="status"
          className={cn(
            "mt-8 rounded-lg px-5 py-4 text-base",
            status.type === "success" ? "bg-primary-soft text-accent-foreground" : "bg-destructive/10 text-destructive",
          )}
        >
          {status.message}
        </p>
      )}

      <button type="submit" disabled={sending} className={buttonClass("primary", "xl", "mt-10 w-full sm:w-auto")}>
        {sending ? text.sending : text.submit} <Send />
      </button>
    </form>
  );
}

function Pill({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-5 py-2.5 text-base transition-colors",
        selected
          ? "border-primary bg-primary font-semibold text-primary-foreground"
          : "border-input hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  maxLength,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-base font-semibold">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={maxLength}
        className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      />
    </div>
  );
}
