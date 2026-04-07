import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/**
 * TalaStepCard
 *
 * Numbered process step card used in "How we did it" case study sections.
 *
 * Anatomy:
 * - White bg, rounded-3xl (40px), p-10
 * - Step number in a tala-10 circle (48px), Nohemi Medium h6
 * - Step title: Helvetica body-xl (24px)
 * - Bullet list with checkmark icons
 * - "Impact" badge at bottom with description
 *
 * Usage:
 *   <TalaStepCard
 *     step={1}
 *     title="Research & data collection"
 *     bullets={["Analyzed the market...", "Collected thousands of queries..."]}
 *     impact="Clear visibility into high-demand topics."
 *   />
 */

interface TalaStepCardProps {
  step: number;
  title: string;
  bullets: string[];
  impact?: string;
  className?: string;
}

function TalaStepCard({ step, title, bullets, impact, className }: TalaStepCardProps) {
  return (
    <div
      className={cn(
        "bg-tala-0 flex flex-col gap-10 items-start p-10 rounded-3xl",
        className
      )}
    >
      {/* Step header */}
      <div className="flex items-center gap-3 w-full">
        <div className="bg-tala-10 size-12 rounded-full flex items-center justify-center shrink-0">
          <span className="font-headline font-medium text-h6 text-tala-90">
            {step}
          </span>
        </div>
        <p className="flex-1 font-body text-body-xl text-tala-100">{title}</p>
      </div>

      {/* Bullet list */}
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-2.5 w-full">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <div className="size-6 rounded-full flex items-center justify-center shrink-0 pt-0.5">
                <Check size={16} className="text-tala-70" strokeWidth={2.5} />
              </div>
              <p className="flex-1 text-body-s text-tala-70 font-body">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Impact badge */}
        {impact && (
          <div className="bg-tala-10 rounded-2xl p-5 flex flex-col gap-5 w-full">
            <span className="bg-tala-100 text-tala-0 text-body-xs font-body px-2 py-1 rounded-full w-fit">
              Impact
            </span>
            <p className="text-body-l text-tala-100 font-body">{impact}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export { TalaStepCard };
