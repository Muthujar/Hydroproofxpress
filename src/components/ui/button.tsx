import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button touch-manipulation inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-[15px] font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/55 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/25 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.125rem]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_0_0_rgba(6,39,71,0.55)] hover:brightness-[1.06] [a]:hover:brightness-[1.06]",
        outline:
          "border-2 border-primary/55 bg-background text-primary shadow-[0_3px_0_0_rgba(15,40,71,0.12)] hover:bg-muted/85 hover:border-primary/65 aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30 dark:hover:bg-input/45",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_3px_0_0_rgba(15,40,71,0.1)] hover:bg-secondary/85 aria-expanded:bg-secondary",
        ghost:
          "shadow-none hover:bg-muted hover:text-foreground aria-expanded:bg-muted dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/12 text-destructive shadow-none hover:bg-destructive/20 focus-visible:border-destructive/40 dark:bg-destructive/22 dark:hover:bg-destructive/35",
        link: "h-auto px-0 text-primary shadow-none underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-5 text-[15px] has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-7 gap-1 rounded-[10px] px-3 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 rounded-[11px] px-4 text-[0.9375rem] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 min-h-12 gap-2 rounded-xl px-7 text-[1rem] has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 [&_svg:not([class*='size-'])]:size-[1.2rem]",
        icon: "size-10 rounded-xl shadow-[0_2px_0_0_rgba(15,40,71,0.12)]",
        "icon-xs":
          "size-7 rounded-lg shadow-none [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-lg shadow-[0_2px_0_0_rgba(15,40,71,0.08)]",
        "icon-lg": "size-12 rounded-xl shadow-[0_3px_0_0_rgba(15,40,71,0.12)] [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
