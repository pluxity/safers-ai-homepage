import { Inbox, LogOut } from 'lucide-react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router'
import logo from '../assets/logo.svg'
import { clearToken, getToken } from '../lib/auth.ts'

const MENUS = [{ to: '/inquiries', label: '도입 문의', icon: Inbox }]

export function AdminLayout() {
  const navigate = useNavigate()

  if (!getToken()) return <Navigate to="/login" replace />

  const logout = () => {
    clearToken()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex min-h-svh">
      <aside className="sticky top-0 flex h-svh w-60 shrink-0 flex-col bg-ink text-ink-foreground">
        <div className="flex h-16 items-center gap-2.5 border-b border-ink-border px-5">
          <img src={logo} alt="SAFERS" className="h-5.5 w-auto" />
          <span className="rounded-sm px-1.5 py-0.5 text-xs font-medium text-ink-muted">
            관리자 페이지
          </span>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {MENUS.map((menu) => (
            <NavLink
              key={menu.to}
              to={menu.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-ink-raised text-ink-foreground'
                    : 'text-ink-muted hover:bg-ink-raised/60 hover:text-ink-foreground'
                }`
              }
            >
              <menu.icon className="size-4 shrink-0" aria-hidden="true" />
              {menu.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-ink-border p-3">
          <button
            type="button"
            onClick={logout}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-ink-raised/60 hover:text-ink-foreground"
          >
            <LogOut className="size-4 shrink-0" aria-hidden="true" />
            로그아웃
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  )
}
