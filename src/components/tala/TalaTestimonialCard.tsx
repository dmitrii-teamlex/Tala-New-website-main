import { cn } from "@/lib/utils";

/**
 * TalaTestimonialCard
 *
 * Customer quote card with person avatar, name, role, company logo, and testimonial text.
 *
 * Two variants:
 * 1. "quote-block" — standalone testimonial used in case study pages (68:6827)
 *    Quote icon, large text, author info at bottom.
 * 2. "carousel-card" — side-by-side card used in homepage carousel (51:4322)
 *    Person photo + name on left, logo + quote on right.
 *
 * Anatomy (quote-block):
 * - White bg, rounded-3xl (40px), p-10, gap-60
 * - Quote icon (decorative " symbol)
 * - Testimonial text: body-xl (24px) in tala-80
 * - Author row: avatar (64px) + name (Nohemi Medium h5) + role (body-m)
 *
 * Anatomy (carousel-card):
 * - Two halves: person card (dark or light) + testimonial card
 * - Person card: avatar (238px), name, role centered
 * - Testimonial: logo at top, CTA button, quote with bold highlights
 *
 * Usage:
 *   <TalaTestimonialCard
 *     variant="quote-block"
 *     quote="Teamlex exceeded expectations..."
 *     authorName="Raitis Bullits"
 *     authorRole="Co-founder and CEO / Alps2Alps"
 *     authorImage="/avatars/raitis.jpg"
 *   />
 */

interface TalaTestimonialCardProps {
  variant?: "quote-block" | "carousel-card";
  quote: React.ReactNode;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  logo?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  dark?: boolean;
  className?: string;
}

function TalaTestimonialCard({
  variant = "quote-block",
  quote,
  authorName,
  authorRole,
  authorImage,
  logo,
  ctaLabel = "Read case",
  ctaHref,
  dark = false,
  className,
}: TalaTestimonialCardProps) {
  if (variant === "carousel-card") {
    return (
      <div className={cn("flex h-[400px] items-center", className)}>
        {/* Person card */}
        <div
          className={cn(
            "flex flex-col items-center justify-between h-full p-10 rounded-4xl shrink-0 w-[238px]",
            dark ? "bg-tala-100" : "bg-tala-0 border border-tala-20"
          )}
        >
          {authorImage && (
            <img
              src={authorImage}
              alt={authorName}
              className="size-[238px] rounded-3xl border border-tala-20 object-cover w-full aspect-square"
            />
          )}
          <div className="flex flex-col gap-1 items-center text-center">
            <p
              className={cn(
                "font-headline font-medium text-h5",
                dark ? "text-tala-0" : "text-tala-100"
              )}
            >
              {authorName}
            </p>
            <p
              className={cn(
                "text-body-xs font-body",
                dark ? "text-tala-30" : "text-tala-60"
              )}
            >
              {authorRole}
            </p>
          </div>
        </div>

        {/* Testimonial card */}
        <div
          className={cn(
            "flex flex-1 flex-col justify-between h-full overflow-clip p-10 rounded-4xl",
            dark ? "bg-tala-100" : "bg-tala-0 border border-tala-20"
          )}
        >
          <div className="flex items-start justify-between">
            {logo && <div className="h-7">{logo}</div>}
            {ctaHref && (
              <a
                href={ctaHref}
                className={cn(
                  "h-[42px] px-5 py-3 rounded-pill text-body-s font-body flex items-center",
                  dark
                    ? "bg-tala-0 text-tala-100"
                    : "bg-tala-100 text-tala-0"
                )}
              >
                {ctaLabel}
              </a>
            )}
          </div>
          <p
            className={cn(
              "text-body-xl font-body",
              dark ? "text-tala-30" : "text-tala-60"
            )}
          >
            {quote}
          </p>
        </div>
      </div>
    );
  }

  // quote-block variant
  return (
    <div
      className={cn(
        "bg-tala-0 flex flex-col gap-10 md:gap-[60px] items-start p-6 md:p-8 lg:p-10 rounded-[32px] md:rounded-3xl",
        className
      )}
    >
      {/* Quote icon */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
        <svg width="24" height="20" viewBox="0 0 28 24" fill="none" className="text-tala-80 md:w-7 md:h-6">
          <path
            d="M0 24V14.4C0 11.7333 0.466667 9.33333 1.4 7.2C2.33333 5.06667 3.66667 3.26667 5.4 1.8C7.13333 0.333333 9.13333 -0.533333 11.4 -0.8L12 1.2C10.2667 1.73333 8.8 2.66667 7.6 4C6.4 5.33333 5.73333 6.93333 5.6 8.8H12V24H0ZM16 24V14.4C16 11.7333 16.4667 9.33333 17.4 7.2C18.3333 5.06667 19.6667 3.26667 21.4 1.8C23.1333 0.333333 25.1333 -0.533333 27.4 -0.8L28 1.2C26.2667 1.73333 24.8 2.66667 23.6 4C22.4 5.33333 21.7333 6.93333 21.6 8.8H28V24H16Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-[18px] leading-[22px] md:text-body-xl text-tala-80 font-body">{quote}</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        {authorImage && (
          <img
            src={authorImage}
            alt={authorName}
            className="size-12 md:size-16 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col gap-1">
          <p className="font-headline font-medium text-[20px] leading-[22px] md:text-h5 text-tala-90">
            {authorName}
          </p>
          <p className="text-body-s md:text-body-m tracking-[-0.18px] text-tala-60 font-body">
            {authorRole}
          </p>
        </div>
      </div>
    </div>
  );
}

export { TalaTestimonialCard };
