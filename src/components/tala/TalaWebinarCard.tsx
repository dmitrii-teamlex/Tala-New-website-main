import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * TalaWebinarCard — Event card with cover, date/time, title, speakers and CTA.
 * Two variants: "upcoming" (filled black tags + black CTA) and "past" (outline tags
 * + outline CTA, dimmed cover).
 */

export interface WebinarSpeaker {
  name: string;
  role: string;
  photo?: string;
}

interface TalaWebinarCardProps {
  variant?: "upcoming" | "past";
  date: string;
  time: string;
  title: string;
  description: string;
  speakers: WebinarSpeaker[];
  cover?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  hideCta?: boolean;
  className?: string;
}

function TalaWebinarCard({
  variant = "upcoming",
  date,
  time,
  title,
  description,
  speakers,
  cover,
  ctaLabel,
  ctaHref,
  onCtaClick,
  hideCta,
  className,
}: TalaWebinarCardProps) {
  const isPast = variant === "past";
  const defaultCta = isPast ? "View recap" : "Register now";

  const tagClass = isPast
    ? "bg-tala-0 border-[0.5px] border-tala-20 text-tala-50"
    : "bg-tala-100 text-tala-10";

  const ctaButtonClass = isPast
    ? "border border-tala-90 text-tala-90"
    : "bg-tala-100 text-tala-0";

  const titleColorClass = isPast ? "text-tala-80" : "text-tala-100";
  const coverOpacityClass = isPast ? "opacity-50" : "";

  const Cta: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    ctaHref ? (
      <a href={ctaHref} className="contents">
        {children}
      </a>
    ) : (
      <button type="button" onClick={onCtaClick} className="contents">
        {children}
      </button>
    );

  return (
    <div
      className={cn(
        "bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-8 lg:p-10",
        "flex flex-col lg:flex-row gap-6 lg:gap-10",
        "lg:h-[360px]",
        className
      )}
    >
      {/* Cover */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-2xl bg-tala-20",
          "w-full h-[180px] lg:w-[202px] lg:h-full",
          coverOpacityClass
        )}
      >
        {cover}
      </div>

      {/* Text container */}
      <div className="flex flex-1 flex-col gap-4 lg:gap-0 lg:justify-between min-w-0">
        {/* Date and Time */}
        <div className="flex gap-0.5 items-start">
          <span
            className={cn(
              "px-3 py-2 rounded-pill text-[14px] leading-[16px] tracking-[-0.5px] font-body whitespace-nowrap",
              tagClass
            )}
          >
            {date}
          </span>
          <span
            className={cn(
              "px-3 py-2 rounded-pill text-[14px] leading-[16px] tracking-[-0.5px] font-body whitespace-nowrap",
              tagClass
            )}
          >
            {time}
          </span>
        </div>

        {/* Title and description */}
        <div className="flex flex-col gap-2 lg:pr-20">
          <h3
            className={cn(
              "font-headline font-bold text-[24px] leading-[26px] md:text-[32px] md:leading-[32px] lg:text-[42px] lg:leading-[40px]",
              titleColorClass
            )}
          >
            {title}
          </h3>
          <p className="font-body text-[14px] leading-[16px] md:text-[16px] md:leading-[18px] text-tala-70 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Speakers and CTA */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-5">
          <div className="flex flex-wrap gap-1 items-center">
            {speakers.map((s) => (
              <div
                key={s.name}
                className="border border-tala-20 rounded-pill h-[56px] flex items-center gap-2 pl-3 pr-4"
              >
                <div className="size-9 rounded-full overflow-hidden bg-tala-10 shrink-0 flex items-center justify-center">
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt={s.name}
                      className="size-full object-cover"
                    />
                  ) : (
                    <span className="font-body text-[14px] text-tala-50">
                      {s.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col font-body whitespace-nowrap">
                  <span className="text-[16px] md:text-[18px] leading-[20px] tracking-[-0.18px] text-tala-100">
                    {s.name}
                  </span>
                  <span className="text-[12px] md:text-[14px] leading-[16px] tracking-[-0.5px] text-tala-50">
                    {s.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {!hideCta && (
            <Cta>
              <span
                className={cn(
                  "h-[56px] rounded-pill px-8 inline-flex items-center justify-center gap-2 font-body text-[18px] leading-[20px] tracking-[-0.18px] whitespace-nowrap shrink-0 cursor-pointer",
                  ctaButtonClass
                )}
              >
                {ctaLabel ?? defaultCta}
                <ArrowRight size={20} />
              </span>
            </Cta>
          )}
        </div>
      </div>
    </div>
  );
}

export { TalaWebinarCard };
