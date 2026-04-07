import { cn } from "@/lib/utils";
import { TalaTag } from "./TalaTag";

/**
 * TalaCaseCover
 *
 * Full-width case study title cover. Used at the top of case study detail pages.
 *
 * Anatomy:
 * - White bg, rounded-3xl (40px), p-10
 * - Top row: client logo (left) + tag row (right, flex-wrap)
 * - Large headline: Nohemi Bold h3 (56px)
 *
 * Usage:
 *   <TalaCaseCover
 *     logo={<AlpsLogo />}
 *     tags={["AI", "E-commerce", "SEO"]}
 *     title="Increased Organic Traffic for Alps2Alps by 45%"
 *   />
 */

interface TalaCaseCoverProps {
  logo: React.ReactNode;
  tags: string[];
  title: string;
  className?: string;
}

function TalaCaseCover({ logo, tags, title, className }: TalaCaseCoverProps) {
  return (
    <div
      className={cn(
        "bg-tala-0 flex flex-col gap-16 items-start p-10 rounded-3xl w-full",
        className
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between w-full">
        <div className="h-8 flex items-center">{logo}</div>
        <div className="flex flex-wrap gap-0.5">
          {tags.map((tag) => (
            <TalaTag key={tag}>{tag}</TalaTag>
          ))}
        </div>
      </div>

      {/* Title */}
      <h1 className="font-headline font-bold text-h3 text-tala-100">
        {title}
      </h1>
    </div>
  );
}

export { TalaCaseCover };
