import { cn } from "@/lib/utils";
import { TalaCheckbox } from "./TalaCheckbox";

/**
 * TalaSelectionCard
 *
 * Card with checkbox for multi-select use cases (e.g. onboarding goal selection).
 *
 * Variants:
 * - size "s": tall card with checkbox top-left, title + subtitle stacked below
 * - size "xs": compact row with checkbox left, title right
 *
 * States: default (border-tala-20), hover (border-tala-30), active (bg-tala-10, filled checkbox)
 *
 * Usage:
 *   <TalaSelectionCard
 *     title="Grow social media on autopilot"
 *     subtitle="Automate content and scale reach"
 *     selected={true}
 *     onSelect={() => toggle()}
 *   />
 */

interface TalaSelectionCardProps {
  title: string;
  subtitle?: string;
  selected?: boolean;
  onSelect?: () => void;
  size?: "s" | "xs";
  className?: string;
}

function TalaSelectionCard({
  title,
  subtitle,
  selected = false,
  onSelect,
  size = "s",
  className,
}: TalaSelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "border rounded-2xl p-6 text-left transition-all",
        selected
          ? "bg-tala-10 border-tala-10"
          : "border-tala-20 hover:border-tala-30",
        size === "s" ? "flex flex-col gap-10 w-full h-[216px]" : "flex items-center gap-4 w-full",
        className
      )}
    >
      <TalaCheckbox checked={selected} />
      <div className={cn("flex flex-col", size === "s" ? "gap-2" : "justify-center flex-1")}>
        <p
          className={cn(
            "font-body",
            selected ? "text-tala-100" : "text-tala-90",
            size === "s" ? "text-body-xl leading-[28px]" : "text-body-l"
          )}
        >
          {title}
        </p>
        {subtitle && size === "s" && (
          <p
            className={cn(
              "text-body-m tracking-[-0.18px] font-body",
              selected ? "text-tala-60" : "text-tala-50"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}

export { TalaSelectionCard };
