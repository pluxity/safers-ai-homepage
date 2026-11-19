const TOKEN_KEY = 'safers-admin-token'

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  sessionStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY)
}

/**
 * 관리자 API 요청. 토큰을 Authorization 헤더에 넣어 보낸다.
 * 401(토큰 없음, 만료)이 오면 토큰을 지우고 로그인 화면으로 보낸다.
 */
export async function authFetch(url: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers)
  const token = getToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const res = await fetch(url, { ...init, headers })

  if (res.status === 401) {
    clearToken()
    window.location.replace(`${import.meta.env.BASE_URL}login`)
  }

  return res
}
