import { cn } from "@/lib/utils";

/**
 * TalaProcessStep
 *
 * Square card for "how it works" process flows. Shows step number badge,
 * optional social media icons, heading, and description.
 *
 * Background: tala-10 (light gray)
 * Desktop: 440x440px square, rounded-4xl (60px)
 * Mobile: compact version, rounded-3xl (40px)
 *
 * Anatomy:
 * - Step tag (black pill badge, e.g. "Step 1")
 * - Optional icon row (social media platform icons)
 * - Heading: Nohemi Bold h4 (42px)
 * - Description: Helvetica body-l (20px) in tala-70
 *
 * Usage:
 *   <TalaProcessStep
 *     step={1}
 *     heading="Heading"
 *     description="Description"
 *     icons={[<LinkedinIcon />, <TwitterIcon />]}
 *   />
 */

interface TalaProcessStepProps {
  step: number;
  heading: string;
  description: string;
  icons?: React.ReactNode;
  className?: string;
}

function TalaProcessStep({
  step,
  heading,
  description,
  icons,
  className,
}: TalaProcessStepProps) {
  return (
    <div
      className={cn(
        "bg-tala-10 flex flex-col justify-between p-10 rounded-4xl size-[440px]",
        className
      )}
    >
      {/* Top row: step badge + icons */}
      <div className="flex items-start justify-between w-full">
        <span className="bg-tala-100 text-tala-10 text-body-xs font-body px-4 py-2 rounded-pill">
          Step {step}
        </span>
        {icons && <div className="flex gap-1">{icons}</div>}
      </div>

      {/* Bottom: heading + description */}
      <div className="flex flex-col gap-2">
        <h3 className="font-headline font-bold text-h4 text-tala-100">
          {heading}
        </h3>
        <p className="text-body-l text-tala-70 font-body">{description}</p>
      </div>
    </div>
  );
}

export { TalaProcessStep };
