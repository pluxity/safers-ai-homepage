import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'

type PageItem = number | 'gap'

function range(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, index) => from + index)
}

function getPageItems(page: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) return range(1, totalPages)
  if (page <= 4) return [...range(1, 5), 'gap', totalPages]
  if (page >= totalPages - 3) return [1, 'gap', ...range(totalPages - 4, totalPages)]
  return [1, 'gap', page - 1, page, page + 1, 'gap', totalPages]
}

const arrowClass =
  'grid size-9 cursor-pointer place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-muted-foreground'

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number
  totalPages: number
  onChange: (page: number) => void
}) {
  return (
    <nav aria-label="페이지 이동" className="mt-5 flex items-center justify-center gap-1">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="이전 페이지"
        className={arrowClass}
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </button>

      {getPageItems(page, totalPages).map((item, index) =>
        item === 'gap' ? (
          <span
            key={`gap-${index}`}
            className="grid size-9 place-items-center text-muted-foreground"
          >
            <Ellipsis className="size-4" aria-hidden="true" />
          </span>
        ) : item === page ? (
          <span
            key={item}
            aria-current="page"
            className="grid h-9 min-w-9 place-items-center rounded-lg bg-primary px-2 text-sm font-semibold text-primary-foreground shadow-sm"
          >
            {item}
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-label={`${item} 페이지`}
            className="grid h-9 min-w-9 cursor-pointer place-items-center rounded-lg px-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="다음 페이지"
        className={arrowClass}
      >
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </nav>
  )
}
