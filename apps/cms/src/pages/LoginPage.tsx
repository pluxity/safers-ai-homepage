import { useState, type SubmitEvent } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router'
import { SafersLogo } from '../components/SafersLogo.tsx'
import { getToken, setToken } from '../lib/auth.ts'

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    const password = new FormData(event.currentTarget).get('password')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setError(
          res.status === 401 ? '비밀번호가 올바르지 않습니다.' : '로그인 중 문제가 발생했습니다.',
        )
        return
      }

      const { token } = await res.json()
      setToken(token)
      navigate('/inquiries', { replace: true })
    } catch {
      setError('서버에 연결할 수 없습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  // 이미 로그인했으면 로그인 화면 대신 목록으로
  if (getToken()) return <Navigate to="/inquiries" replace />

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-5 py-10">
      <div className="w-full max-w-100">
        <div className="mb-7 flex items-center justify-center gap-3">
          <SafersLogo className="h-6.5" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <h1 className="text-center text-xl font-extrabold tracking-tight">로그인</h1>
          <p className="mt-1.5 text-center text-sm text-muted-foreground">
            홈페이지 관리자 페이지에 접속합니다.
          </p>

          <label htmlFor="password" className="mt-6 block text-sm font-semibold">
            비밀번호
          </label>
          <div className="relative mt-2">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호"
              autoComplete="current-password"
              required
              autoFocus
              className="h-11 w-full rounded-md border border-input bg-transparent pr-11 pl-3 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((show) => !show)}
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
              className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <Eye className="size-3.5" aria-hidden="true" />
              ) : (
                <EyeOff className="size-3.5" aria-hidden="true" />
              )}
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? '로그인 중…' : '로그인'}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          비밀번호 문의는 담당자에게 연락해 주세요.
        </p>
        <p className="mt-6 text-center text-xs tracking-wide text-muted-foreground">
          © PLUXITY · SAFERS
        </p>
      </div>
    </div>
  )
}
