import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef, useState, type InputHTMLAttributes } from "react";

/**
 * TalaInput
 *
 * Floating-label input field with states: default, focused, filled, error.
 * Used across all forms in the Tala product.
 *
 * Anatomy:
 * - Rounded container (20px radius) with border
 * - Floating label that shrinks on focus/fill
 * - Optional trailing icon (chevron for selects)
 * - Optional error help text below
 *
 * Props:
 * - label: floating label text
 * - required: shows * after label
 * - error: error message (activates red border + help text)
 * - showIcon: trailing chevron icon
 *
 * Usage:
 *   <TalaInput label="Name" required />
 *   <TalaInput label="Email" error="Invalid email address" />
 */

interface TalaInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  required?: boolean;
  error?: string;
  showIcon?: boolean;
}

const TalaInput = forwardRef<HTMLInputElement, TalaInputProps>(
  ({ className, label, required, error, showIcon = false, value, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value !== undefined && value !== "";
    const isFloating = focused || hasValue;

    const borderColor = error
      ? "border-tala-red"
      : focused
        ? "border-tala-50"
        : "border-tala-20";

    return (
      <div className={cn("flex flex-col gap-1 w-full", className)}>
        <div
          className={cn(
            "relative flex items-center bg-tala-0 border rounded-2xl px-5 h-[70px] transition-colors",
            borderColor
          )}
        >
          <div className="flex flex-col flex-1 justify-center gap-1">
            <span
              className={cn(
                "text-tala-50 font-body transition-all pointer-events-none",
                isFloating ? "text-body-xs" : "text-body-s"
              )}
            >
              {label}
              {required && <span className="text-tala-60 ml-0.5">*</span>}
            </span>
            {isFloating && (
              <input
                ref={ref}
                className="bg-transparent text-body-s text-tala-100 font-body outline-none w-full"
                value={value}
                onFocus={(e) => {
                  setFocused(true);
                  onFocus?.(e);
                }}
                onBlur={(e) => {
                  setFocused(false);
                  onBlur?.(e);
                }}
                {...props}
              />
            )}
            {!isFloating && (
              <input
                ref={ref}
                className="absolute inset-0 opacity-0 cursor-text"
                onFocus={(e) => {
                  setFocused(true);
                  onFocus?.(e);
                }}
                onBlur={(e) => {
                  setFocused(false);
                  onBlur?.(e);
                }}
                value={value}
                {...props}
              />
            )}
          </div>
          {showIcon && (
            <ChevronDown className="text-tala-50 shrink-0" size={24} />
          )}
        </div>
        {error && (
          <p className="text-tala-red text-body-xs px-1 pb-2">{error}</p>
        )}
      </div>
    );
  }
);

TalaInput.displayName = "TalaInput";
export { TalaInput };
