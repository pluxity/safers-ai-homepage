/** 조건부 클래스 합치기: false, undefined, "" 는 빼고 공백으로 이어 붙인다 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
