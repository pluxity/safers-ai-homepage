import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { SafersLogo } from '../components/SafersLogo.tsx'

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-5 py-10">
      <div className="w-full max-w-100">
        <div className="mb-7 flex items-center justify-center gap-3">
          <SafersLogo className="h-6.5" />
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
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

          <button
            type="submit"
            className="mt-6 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            로그인
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
