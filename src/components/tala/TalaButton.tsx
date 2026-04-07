import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

/**
 * TalaButton
 *
 * Primary action component across the Tala product.
 *
 * Variants from Figma:
 * - color: black (default), white, stroke-black, stroke-white
 * - size: L (56px), M (50px), S (42px)
 * - type: text, text+icon, icon
 * - state: default, hover (handled via CSS)
 *
 * Usage:
 *   <TalaButton>Get started</TalaButton>
 *   <TalaButton color="white" size="M" icon="arrow">Learn more</TalaButton>
 *   <TalaButton color="stroke-black" size="S" iconOnly><ArrowRight /></TalaButton>
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body whitespace-nowrap transition-colors cursor-pointer rounded-pill overflow-clip",
  {
    variants: {
      color: {
        black:
          "bg-tala-100 text-tala-0 hover:bg-tala-90",
        white:
          "bg-tala-0 text-tala-100 hover:bg-tala-10",
        "stroke-black":
          "border border-tala-90 text-tala-90 hover:border-tala-100 hover:text-tala-100",
        "stroke-white":
          "border border-tala-0 text-tala-0 hover:border-tala-10 hover:text-tala-10",
      },
      size: {
        L: "h-14 text-[18px] leading-[20px] tracking-[-0.18px]",
        M: "h-[50px] text-[16px] leading-[18px]",
        S: "h-[42px] text-[16px] leading-[18px]",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // text (with or without icon) padding
      { size: "L", iconOnly: false, className: "gap-2 px-8 py-4" },
      { size: "M", iconOnly: false, className: "gap-2 px-6 py-4" },
      { size: "S", iconOnly: false, className: "gap-1 px-5 py-3" },
      // icon-only padding (square)
      { size: "L", iconOnly: true, className: "w-14 p-4" },
      { size: "M", iconOnly: true, className: "w-[50px] p-4" },
      { size: "S", iconOnly: true, className: "w-[42px] p-3" },
    ],
    defaultVariants: {
      color: "black",
      size: "L",
      iconOnly: false,
    },
  }
);

type IconVariant = "arrow" | "arrow-up-right" | "chevron" | "none";

interface TalaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "color"> {
  icon?: IconVariant;
  iconOnly?: boolean;
  color?: "black" | "white" | "stroke-black" | "stroke-white";
}

const iconMap = {
  arrow: ArrowRight,
  "arrow-up-right": ArrowUpRight,
  chevron: ChevronRight,
  none: null,
};

const TalaButton = forwardRef<HTMLButtonElement, TalaButtonProps>(
  (
    {
      className,
      color,
      size,
      icon = "none",
      iconOnly = false,
      children,
      ...props
    },
    ref
  ) => {
    const IconComponent = iconMap[icon];
    const iconSize = size === "S" ? 20 : 24;
    const withIcon = icon !== "none" && !iconOnly;
    // Figma: text+icon buttons have asymmetric padding (less on icon side)
    const iconPadding = withIcon
      ? size === "S" ? "!pl-5 !pr-3" : size === "M" ? "!pl-6 !pr-4" : "!pl-8 !pr-5"
      : "";

    return (
      <button
        className={cn(buttonVariants({ color, size, iconOnly, className }), iconPadding)}
        ref={ref}
        {...props}
      >
        {!iconOnly && children}
        {IconComponent && <IconComponent size={iconSize} />}
        {iconOnly && !IconComponent && children}
      </button>
    );
  }
);

TalaButton.displayName = "TalaButton";
export { TalaButton, buttonVariants };
