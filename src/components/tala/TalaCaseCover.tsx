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
        "bg-tala-0 flex flex-col gap-10 md:gap-12 lg:gap-16 items-start p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-3xl w-full",
        className
      )}
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-6 w-full">
        <div className="h-8 flex items-center">{logo}</div>
        <div className="flex flex-wrap gap-0.5">
          {tags.map((tag) => (
            <TalaTag key={tag}>{tag}</TalaTag>
          ))}
        </div>
      </div>

      {/* Title */}
      <h1 className="font-headline font-bold text-[28px] leading-[30px] md:text-[40px] md:leading-[40px] lg:text-h3 text-tala-100">
        {title}
      </h1>
    </div>
  );
}

export { TalaCaseCover };
