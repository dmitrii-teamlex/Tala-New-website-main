import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/**
 * TalaCheckbox
 *
 * Round checkbox used in selection cards and forms.
 * Active state: dark filled circle with white check.
 * Inactive state: white circle with gray border.
 *
 * Usage:
 *   <TalaCheckbox checked={true} onChange={handleChange} />
 */

interface TalaCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

function TalaCheckbox({ checked = false, onChange, className }: TalaCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "size-6 rounded-full overflow-clip shrink-0 flex items-center justify-center transition-colors",
        checked
          ? "bg-tala-100 text-tala-0"
          : "bg-tala-0 border border-tala-20",
        className
      )}
    >
      {checked && <Check size={14} strokeWidth={3} />}
    </button>
  );
}

export { TalaCheckbox };
