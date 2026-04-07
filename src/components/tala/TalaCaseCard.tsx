import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { TalaTag } from "./TalaTag";

/**
 * TalaCaseCard
 *
 * Case study preview card with client logo, tags, key stat, and description.
 * Shows arrow button on hover.
 *
 * Used on: homepage, case studies listing page.
 *
 * Anatomy:
 * - White bg, rounded-3xl (40px), p-10
 * - Client logo (top)
 * - Tag row (wrapping)
 * - Stat block: label + big number + unit
 * - Description paragraph
 * - Vertical divider between stat and description (desktop)
 *
 * Variants:
 * - Desktop: side-by-side stat + description with divider
 * - Mobile: stacked vertically
 *
 * Usage:
 *   <TalaCaseCard
 *     logo={<AlpsLogo />}
 *     tags={["AI", "SEO", "E-commerce"]}
 *     statLabel="reached"
 *     statValue="500K–2.5M"
 *     statUnit="people organically"
 *     description="Discover how Teamlex built..."
 *   />
 */

interface TalaCaseCardProps {
  logo: React.ReactNode;
  tags: string[];
  statLabel?: string;
  statValue: string;
  statUnit?: string;
  description: string;
  href?: string;
  className?: string;
}

function TalaCaseCard({
  logo,
  tags,
  statLabel,
  statValue,
  statUnit,
  description,
  href,
  className,
}: TalaCaseCardProps) {
  return (
    <div
      className={cn(
        "group bg-tala-0 flex flex-col items-start gap-10 p-10 rounded-3xl w-full",
        className
      )}
    >
      {/* Header: logo + hover arrow */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-start justify-between w-full">
          <div className="h-[42px] flex items-center">{logo}</div>
          {href && (
            <a
              href={href}
              className="border border-tala-100 rounded-pill size-[42px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight size={20} />
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-0.5">
          {tags.map((tag) => (
            <TalaTag key={tag}>{tag}</TalaTag>
          ))}
        </div>
      </div>

      {/* Stats + description */}
      <div className="flex items-end gap-5 w-full">
        {/* Stat block */}
        <div className="shrink-0">
          {statLabel && (
            <p className="text-body-m tracking-[-0.18px] text-tala-50 font-body">
              {statLabel}
            </p>
          )}
          <p className="font-headline font-bold text-h4 text-tala-90 group-hover:text-tala-brand transition-colors">
            {statValue}
          </p>
          {statUnit && (
            <p className="text-body-m tracking-[-0.18px] text-tala-50 font-body">
              {statUnit}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="w-px self-stretch bg-tala-20" />

        {/* Description */}
        <p className="flex-1 text-body-xs text-tala-50 font-body group-hover:text-tala-70 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

export { TalaCaseCard };
