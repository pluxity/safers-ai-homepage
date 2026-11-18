const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold",
  inverse: "bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90",
  "outline-ink":
    "border border-ink-border bg-ink-foreground/5 text-ink-foreground backdrop-blur hover:bg-ink-foreground/10",
};

const sizes = {
  sm: "h-10 px-4 text-[0.95rem]",
  lg: "h-12 px-7 text-base",
  xl: "h-14 px-8 text-base",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "sm",
  extra = "",
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}
