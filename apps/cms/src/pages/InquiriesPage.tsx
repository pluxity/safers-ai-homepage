import { useEffect, useState } from 'react'
import { InquiryDetailDialog } from '../components/InquiryDetailDialog.tsx'
import { Pagination } from '../components/Pagination.tsx'
import { authFetch } from '../lib/auth.ts'
import { formatDate, serviceLabels } from '../lib/inquiryLabels.ts'
import type { Inquiry, InquiryList } from '../types/inquiry.ts'

export function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selected, setSelected] = useState<Inquiry | null>(null)

  const goToPage = (next: number) => {
    if (loading) return
    setPage(next)
    setLoading(true)
    setError(false)
  }

  useEffect(() => {
    authFetch(`/api/inquiries?page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data: InquiryList) => {
        setInquiries(data.items)
        setTotalPages(data.totalPages)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [page])

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold tracking-tight">도입 문의</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        홈페이지에서 접수된 도입 문의 목록입니다. 행을 누르면 상세 내용을 볼 수 있습니다.
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border bg-card shadow-sm">
        {error ? (
          <p className="p-10 text-center text-sm text-destructive">목록을 불러오지 못했습니다.</p>
        ) : inquiries.length === 0 ? (
          <p className="p-10 text-center text-sm text-muted-foreground">
            {loading ? '불러오는 중…' : '접수된 문의가 없습니다.'}
          </p>
        ) : (
          <div className="overflow-x-auto" aria-busy={loading}>
            <table
              className={`w-full text-sm transition-opacity ${loading ? 'opacity-50 delay-200' : ''}`}
            >
              <thead className="border-b bg-muted text-left text-xs font-semibold whitespace-nowrap text-secondary-foreground">
                <tr>
                  <th className="w-16 px-5 py-3">ID</th>
                  <th className="px-5 py-3">접수일</th>
                  <th className="px-5 py-3">회사명</th>
                  <th className="px-5 py-3">담당자</th>
                  <th className="px-5 py-3">관심 서비스</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {inquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    onClick={() => setSelected(inquiry)}
                    className="cursor-pointer transition-colors hover:bg-primary-soft/50"
                  >
                    <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">
                      #{inquiry.id}
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-muted-foreground">
                      {formatDate(inquiry.created_at)}
                    </td>
                    <td className="px-5 py-3.5 font-semibold">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          setSelected(inquiry)
                        }}
                        className="cursor-pointer text-left hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:outline-none"
                      >
                        {inquiry.company}
                      </button>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">{inquiry.name}</td>
                    <td className="max-w-72 truncate px-5 py-3.5 text-muted-foreground">
                      {inquiry.services.map((service) => serviceLabels[service]).join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onChange={goToPage} />
      )}

      <InquiryDetailDialog inquiry={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
