// 다국어(i18n) 도우미
// - 주소는 Astro i18n(astro.config.mjs의 i18n 설정)이 담당한다:
//     지금 언어 → Astro.currentLocale, 언어별 주소 → getRelativeLocaleUrl (astro:i18n)
// - 번역 문구는 여기서 담당한다: translate(Astro.currentLocale)
import { ko, type Dict } from "./ko";
import { en } from "./en";

/** 지원 언어와 헤더에 보여 줄 이름. astro.config.mjs의 i18n.locales와 같아야 한다 */
export const languages = { ko: "KR", en: "EN" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "ko";

const dicts: Record<Lang, Dict> = { ko, en };

/** 언어에 맞는 문구 묶음. 모르는 언어나 undefined면 기본 언어(한국어) 문구를 돌려준다 */
export function translate(lang: string | undefined): Dict {
  return dicts[lang as Lang] ?? dicts[defaultLang];
}

/** 주소에서 언어 부분을 떼어 낸 기본 경로: "/en/services/" → "/services" (언어 전환 링크용) */
export function basePath(pathname: string) {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const [, first, ...rest] = trimmed.split("/");
  if (first && first in languages && first !== defaultLang) {
    return rest.length ? `/${rest.join("/")}` : "/";
  }
  return trimmed || "/";
}
