import { Building2, Mail, Phone, ShieldCheck, User, X, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, type ReactNode } from 'react'
import {
  cctvEnvLabels,
  formatDate,
  serviceLabels,
  siteCountLabels,
} from '../lib/inquiryLabels.ts'
import type { Inquiry } from '../types/inquiry.ts'

export function InquiryDetailDialog({
  inquiry,
  onClose,
}: {
  inquiry: Inquiry | null
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (inquiry && !dialog.open) dialog.showModal()
    if (!inquiry && dialog.open) dialog.close()
  }, [inquiry])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
      className="m-auto w-full max-w-xl overflow-hidden rounded-2xl bg-card p-0 text-foreground shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      {inquiry && (
        <div className="flex max-h-[85svh] flex-col">
          <header className="flex items-start gap-4 border-b px-6 py-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
              <Building2 className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-lg font-bold tracking-tight">{inquiry.company}</h2>
              <p className="mt-0.5 text-sm text-muted-foreground">
                <span className="font-mono text-xs">#{inquiry.id}</span>
                <span className="mx-1.5">·</span>
                {formatDate(inquiry.created_at)} 접수
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="닫기"
              className="-mt-1 -mr-2 grid size-9 shrink-0 cursor-pointer place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </header>

          <div className="space-y-7 overflow-y-auto px-6 py-6">
            <Section title="담당자">
              <ul className="space-y-2.5 rounded-xl border p-4">
                <ContactItem icon={User}>{inquiry.name}</ContactItem>
                <ContactItem icon={Mail}>
                  <a href={`mailto:${inquiry.email}`} className="text-primary hover:underline">
                    {inquiry.email}
                  </a>
                </ContactItem>
                <ContactItem icon={Phone}>
                  <a href={`tel:${inquiry.phone}`} className="hover:underline">
                    {inquiry.phone}
                  </a>
                </ContactItem>
              </ul>
            </Section>

            <Section title="관심 서비스">
              <ul className="flex flex-wrap gap-1.5">
                {inquiry.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary"
                  >
                    {serviceLabels[service]}
                  </li>
                ))}
              </ul>
            </Section>

            <div className="grid grid-cols-2 gap-3">
              <Stat label="현장 수">{siteCountLabels[inquiry.site_count]}</Stat>
              <Stat label="CCTV 환경">{cctvEnvLabels[inquiry.cctv_env]}</Stat>
            </div>

            <Section title="메시지">
              {inquiry.message ? (
                <p className="rounded-xl bg-muted px-4 py-3.5 text-sm leading-relaxed whitespace-pre-wrap">
                  {inquiry.message}
                </p>
              ) : (
                <p className="rounded-xl border border-dashed px-4 py-3.5 text-sm text-muted-foreground">
                  남긴 메시지가 없습니다.
                </p>
              )}
            </Section>

            {inquiry.memo && (
              <Section title="관리자 메모">
                <p className="rounded-xl bg-accent px-4 py-3.5 text-sm leading-relaxed whitespace-pre-wrap text-accent-foreground">
                  {inquiry.memo}
                </p>
              </Section>
            )}
          </div>

          <footer className="flex items-center gap-2 border-t bg-muted/50 px-6 py-3.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
            개인정보 수집·이용 동의 {formatDate(inquiry.privacy_agreed_at)}
          </footer>
        </div>
      )}
    </dialog>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2.5 text-xs font-semibold text-muted-foreground">{title}</h3>
      {children}
    </section>
  )
}

function ContactItem({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <Icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <span className="min-w-0 wrap-break-word">{children}</span>
    </li>
  )
}

function Stat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border px-4 py-3">
      <p className="text-xs font-semibold text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold">{children}</p>
    </div>
  )
}
