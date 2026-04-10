import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * TalaCaseStudyCard — Case study card with logo, tags, stat, description (Figma 68:6721)
 * White card, rounded-40, p-40
 * Logo top, tags row, stat container + description with vertical separator
 */

interface TalaCaseStudyCardProps {
  logo: string;
  logoAlt: string;
  logoFlip?: boolean;
  logoHeight?: number;
  logoMono?: boolean;
  tags: string[];
  statLabel?: string;
  statValue: string;
  statSuffix?: string;
  description: string;
  href?: string;
  className?: string;
}

export function TalaCaseStudyCard({
  logo,
  logoAlt,
  logoFlip,
  logoHeight = 32,
  logoMono,
  tags,
  statLabel = "reached",
  statValue,
  statSuffix,
  description,
  href,
  className,
}: TalaCaseStudyCardProps) {
  const inner = (
    <div className={`group bg-tala-0 border border-tala-10 rounded-[32px] md:rounded-[40px] p-6 md:p-10 flex flex-col gap-6 md:gap-10 h-full relative transition-colors ${className || ""}`}>
      {/* Hover arrow button */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ChevronRight size={20} className="text-tala-90" />
      </div>
      {/* Header: logo + tags */}
      <div className="flex flex-col gap-3 md:gap-4 pr-[60px]">
        <div className="h-8 flex items-center">
          <img
            src={logo}
            alt={logoAlt}
            style={{ height: `${logoHeight}px` }}
            className={`w-auto max-w-full ${logoFlip ? "-scale-y-100" : ""} ${logoMono ? "brightness-0 opacity-80" : ""}`}
          />
        </div>
        <div className="flex flex-wrap gap-0.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-tala-0 border-[0.5px] border-tala-10 rounded-pill px-3 py-2 font-body text-[12px] leading-[14px] md:text-[14px] md:leading-[16px] tracking-[-0.5px] text-tala-50 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Stats + description */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-5 mt-auto">
        <div className="flex flex-col gap-1 md:gap-2 shrink-0">
          <p className="font-body text-[16px] leading-[18px] md:text-[18px] md:leading-[20px] tracking-[-0.18px] text-tala-50">{statLabel}</p>
          <p className="font-headline font-bold text-[32px] leading-[32px] lg:text-[42px] lg:leading-[40px] text-tala-90 whitespace-nowrap transition-colors group-hover:text-tala-brand">
            {statValue}
          </p>
          {statSuffix && (
            <p className="font-body text-[16px] leading-[18px] md:text-[18px] md:leading-[20px] tracking-[-0.18px] text-tala-50">{statSuffix}</p>
          )}
        </div>
        <div className="hidden md:block self-stretch w-px bg-tala-10" />
        <div className="md:hidden h-px w-full bg-tala-10" />
        <p className="flex-1 font-body text-[13px] leading-[15px] md:text-[14px] md:leading-[16px] tracking-[-0.5px] text-tala-50">{description}</p>
      </div>
    </div>
  );
  return href ? <Link to={href} className="block h-full">{inner}</Link> : inner;
}
