import { cn } from "@/lib/utils";
import { TalaTag } from "./TalaTag";

/**
 * TalaArticleCard
 *
 * Blog article preview card. Three sizes: small, big, hero.
 *
 * Variants:
 * - "small": vertical card (440px) — image top, tags + title bottom
 * - "big": horizontal card (904px) — metadata left, image right
 * - "hero": full-width article header (1360px) — metadata left, image right
 *
 * States: default, hover (bg shifts to tala-10)
 *
 * Anatomy:
 * - Border: 1px tala-20, rounded-3xl (40px)
 * - Image: cover image, rounded-3xl
 * - Tags: wrapped row of TalaTags
 * - Title: Helvetica Regular 28px, tracking-[-0.56px]
 * - Subtitle (big/hero): body-m in tala-50
 *
 * Usage:
 *   <TalaArticleCard
 *     type="small"
 *     image="/blog/article1.jpg"
 *     tags={["AI", "SEO", "Strategy"]}
 *     title="Mapping the modern customer journey"
 *   />
 */

interface TalaArticleCardProps {
  type?: "small" | "big" | "hero";
  image?: string;
  tags?: string[];
  title: string;
  subtitle?: string;
  href?: string;
  className?: string;
}

function TalaArticleCard({
  type = "small",
  image,
  tags = [],
  title,
  subtitle,
  href,
  className,
}: TalaArticleCardProps) {
  const Wrapper = href ? "a" : "div";

  if (type === "small") {
    return (
      <Wrapper
        {...(href ? { href } : {})}
        className={cn(
          "group bg-tala-0 border border-tala-20 flex flex-col items-start overflow-clip rounded-3xl w-[440px] hover:bg-tala-10 transition-colors",
          className
        )}
      >
        {image && (
          <div className="h-[280px] w-full rounded-3xl overflow-clip">
            <img src={image} alt="" className="size-full object-cover" />
          </div>
        )}
        <div className="flex flex-col gap-3 p-10 w-full">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <TalaTag key={tag}>{tag}</TalaTag>
            ))}
          </div>
          <p className="font-body text-[28px] leading-[28px] tracking-[-0.56px] text-[#303030]">
            {title}
          </p>
        </div>
      </Wrapper>
    );
  }

  if (type === "big") {
    return (
      <Wrapper
        {...(href ? { href } : {})}
        className={cn(
          "group bg-tala-0 border border-tala-20 flex items-end h-[432px] overflow-clip rounded-3xl hover:bg-tala-10 transition-colors",
          className
        )}
      >
        <div className="flex flex-col flex-1 h-full justify-between p-10">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <TalaTag key={tag}>{tag}</TalaTag>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body text-[28px] leading-[28px] tracking-[-0.84px] text-tala-90">
              {title}
            </p>
            {subtitle && (
              <p className="text-body-m tracking-[-0.18px] text-tala-50 font-body">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {image && (
          <div className="flex-1 h-full rounded-3xl overflow-clip">
            <img src={image} alt="" className="size-full object-cover" />
          </div>
        )}
      </Wrapper>
    );
  }

  // hero
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        "bg-tala-0 flex items-end h-[622px] rounded-lg overflow-clip w-full",
        className
      )}
    >
      <div className="flex flex-1 flex-col h-full justify-between p-5">
        <div className="flex flex-col gap-16">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <TalaTag key={tag} color="light-grey" size="S">
                {tag}
              </TalaTag>
            ))}
          </div>
          <h1 className="font-headline font-semibold text-[60px] leading-[56px] tracking-[-1px] text-tala-100">
            {title}
          </h1>
          {subtitle && (
            <p className="text-body-l text-tala-80 font-body">{subtitle}</p>
          )}
        </div>
      </div>
      {image && (
        <div className="flex-1 h-full rounded-lg overflow-clip">
          <img src={image} alt="" className="size-full object-cover" />
        </div>
      )}
    </Wrapper>
  );
}

export { TalaArticleCard };
