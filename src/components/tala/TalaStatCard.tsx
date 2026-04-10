import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/**
 * TalaStatCard
 *
 * Square card showing a big stat number with description.
 * Used across homepage, case studies, and results sections.
 *
 * Variants:
 * - "with-logo": shows client logo above stat (44:4054 - ResultCard)
 * - "stat-only": big number + label only (103:8896 - stat card variant)
 * - "stat-detail": number + label + description paragraph (87:9384)
 *
 * On hover: shows an arrow-right circle button in top-right corner.
 *
 * Anatomy:
 * - White bg, rounded-3xl (40px), p-10
 * - Stat: Nohemi Bold h3 (56px) or h4 (42px) in tala-100
 * - Label: Helvetica body-xl (24px) in tala-70
 * - Description (optional): body-s (16px) in tala-70
 *
 * Usage:
 *   <TalaStatCard stat="~75%" label="Viral video rate" />
 *   <TalaStatCard stat="+245%" label="lead conversion rate"
 *     description="AI-generated templates boosted conversions..." logo={<Logo />} />
 */

interface TalaStatCardProps {
  stat: string;
  label: string;
  description?: string;
  logo?: React.ReactNode;
  href?: string;
  className?: string;
}

function TalaStatCard({
  stat,
  label,
  description,
  logo,
  href,
  className,
}: TalaStatCardProps) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={cn(
        "group bg-tala-0 flex flex-col items-start justify-between overflow-clip p-10 rounded-3xl",
        description ? "gap-10" : "min-h-[337px]",
        className
      )}
    >
      {/* Top row: logo + hover arrow */}
      {logo && (
        <div className="flex items-start justify-between w-full">
          <div className="h-8 flex items-center">{logo}</div>
          {href && (
            <div className="border border-tala-100 rounded-pill size-[42px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={20} />
            </div>
          )}
        </div>
      )}

      {!logo && (
        <div className="flex items-start justify-between w-full gap-2">
          <p className="font-headline font-bold text-h4 text-tala-100">
            {stat}
          </p>
          {href && (
            <div className="border border-tala-100 rounded-pill size-[42px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <ArrowRight size={20} />
            </div>
          )}
        </div>
      )}

      {/* Bottom: stat + label */}
      <div className="flex flex-col gap-1 w-full">
        {logo && (
          <p className="font-headline font-bold text-h3 text-tala-100">
            {stat}
          </p>
        )}
        <p className="text-body-xl text-tala-70 font-body">{label}</p>
      </div>

      {/* Optional description */}
      {description && (
        <p className="text-body-s text-tala-70 font-body">{description}</p>
      )}
    </Wrapper>
  );
}

export { TalaStatCard };
