import { Send, Sparkles } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { contact, services } from "../../../data/content";
import { buttonClass } from "../../ui/button";
import { cn } from "../../../lib/cn";

// 화면에 보이는 선택지 → API(DB enum) 값
const topics = [
  { label: "통합 플랫폼", value: "PLATFORM" },
  ...services.map((s) => ({
    label: s.short,
    value: {
      "ai-safety": "AI_SAFETY_BLACKBOX",
      "ai-chat": "AI_CONVERSATIONAL",
      "ai-health": "AI_HEALTH",
      "live-cctv": "CCTV_MONITORING",
      equipment: "HEAVY_EQUIPMENT",
    }[s.id] as string,
    serviceId: s.id,
  })),
  { label: "제휴 / 마케팅", value: "PARTNERSHIP" },
];
const baseTopic = "PLATFORM";

const siteCounts = [
  { label: "1곳", value: "ONE" },
  { label: "2–5곳", value: "TWO_TO_FIVE" },
  { label: "6곳 이상", value: "SIX_OR_MORE" },
  { label: "미정", value: "UNDECIDED" },
];

const cctvChoices = [
  { id: "existing", label: "기존 CCTV 활용", value: "EXISTING" },
  { id: "new", label: "새로 구축", value: "NEW" },
  { id: "unknown", label: "미정", value: "UNDECIDED" },
];

type Status = { type: "success" | "error"; message: string } | null;

/** 도입 문의 폼: 입력값을 POST /api/inquiries 로 보낸다 */
export default function ContactForm() {
  const [topic, setTopic] = useState<string[]>([baseTopic]);
  const [sites, setSites] = useState("ONE");
  const [cctv, setCctv] = useState("UNDECIDED");
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [fromConfigurator, setFromConfigurator] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  // 서비스 페이지 구성기에서 넘어온 값(?services=...&sites=...&cctv=...)을 폼에 채운다
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const ids = q.get("services")?.split(",").filter(Boolean) ?? [];
    const site = siteCounts.find((s) => s.label === q.get("sites"));
    const cam = cctvChoices.find((c) => c.id === q.get("cctv"));
    if (!ids.length && !site && !cam) return;

    setFromConfigurator(true);
    setTopic([baseTopic, ...topics.filter((t) => t.serviceId && ids.includes(t.serviceId)).map((t) => t.value)]);
    if (site) setSites(site.value);
    if (cam) setCctv(cam.value);
  }, []);

  const toggle = (value: string) =>
    setTopic((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!agree) {
      setStatus({ type: "error", message: "개인정보 처리방침에 동의해 주세요." });
      return;
    }
    if (topic.length === 0) {
      setStatus({ type: "error", message: "관심 서비스를 하나 이상 골라 주세요." });
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

      setStatus({ type: "success", message: "문의가 접수되었습니다. 확인 후 신속히 연락드리겠습니다." });
      form.reset();
      setAgree(false);
      setTopic([baseTopic]);
      setSites("ONE");
      setCctv("UNDECIDED");
      setFromConfigurator(false);
    } catch {
      setStatus({ type: "error", message: `전송에 실패했습니다. ${contact.email}로 직접 문의해 주세요.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-10">
      {fromConfigurator && (
        <p className="mb-10 flex items-center gap-3 rounded-lg bg-primary-soft px-5 py-4 text-base text-accent-foreground">
          <Sparkles className="size-5 shrink-0 text-primary" />
          서비스 페이지에서 만든 구성이 아래에 반영되었습니다.
        </p>
      )}

      <fieldset>
        <legend className="text-lg font-bold">관심 서비스 (복수 선택)</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((t) => (
            <Pill key={t.value} selected={topic.includes(t.value)} onClick={() => toggle(t.value)}>
              {t.label}
            </Pill>
          ))}
        </div>
      </fieldset>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <fieldset>
          <legend className="text-lg font-bold">운영 현장 수</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {siteCounts.map((c) => (
              <Pill key={c.value} selected={sites === c.value} onClick={() => setSites(c.value)}>
                {c.label}
              </Pill>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-lg font-bold">CCTV 환경</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {cctvChoices.map((c) => (
              <Pill key={c.value} selected={cctv === c.value} onClick={() => setCctv(c.value)}>
                {c.label}
              </Pill>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field id="name" label="이름" required maxLength={50} />
        <Field id="company" label="회사명" required maxLength={100} />
        <Field id="email" label="이메일" type="email" required maxLength={254} />
        <Field id="phone" label="연락처" type="tel" required maxLength={30} />
      </div>
      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="block text-base font-semibold">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="현장 위치, 도입 희망 시기 등을 적어주시면 더 정확한 제안이 가능합니다."
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
          개인정보 처리방침에 동의합니다. (필수)
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
        {sending ? "보내는 중…" : "문의 보내기"} <Send />
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
