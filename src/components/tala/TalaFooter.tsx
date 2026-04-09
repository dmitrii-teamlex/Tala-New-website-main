import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * TalaFooter
 *
 * Full-width dark footer with 3-column nav links, branding, legal copy,
 * and a white CTA card on the right.
 *
 * Background: tala-100 (near-black)
 * Rounding: rounded-4xl (60px)
 * Padding: 40px
 *
 * Sections:
 * - linkColumns: 3 columns of labeled link groups
 * - branding: logo + legal text at bottom-left
 * - ctaCard: white card with tag, heading, description, and button
 *
 * Usage:
 *   <TalaFooter
 *     logo={<TalaLogo variant="light" />}
 *     linkColumns={[
 *       { title: "Connect", links: [{ label: "About", href: "/" }] },
 *       { title: "Interaction", links: [{ label: "Blog", href: "/" }] },
 *       { title: "Products", links: [{ label: "Traffic engine", href: "/" }] },
 *     ]}
 *     legalText="(c) 2026 Teamlex. All rights reserved."
 *   />
 */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface TalaFooterProps {
  logo: React.ReactNode;
  linkColumns: FooterColumn[];
  legalText?: string;
  ctaTag?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  ctaButtonLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

function TalaFooter({
  logo,
  linkColumns,
  legalText = "\u00a9 2026 Teamlex. All rights reserved.",
  ctaTag = "Free",
  ctaHeading = "Let\u2019s build your growth engine",
  ctaDescription = "Tell us your goal \u2014 we\u2019ll set up your workspace and show you exactly how to grow.",
  ctaButtonLabel = "Get started",
  onCtaClick,
  className,
}: TalaFooterProps) {
  return (
    <footer
      className={cn(
        "bg-tala-100 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start p-8 md:p-8 lg:p-10 rounded-[40px] lg:rounded-4xl w-full max-w-[1360px] mx-auto",
        className
      )}
    >
      {/* Left: nav + branding */}
      <div className="flex-1 flex flex-col gap-16 lg:gap-[120px] w-full">
        {/* Nav columns */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Column titles */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-1">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex-1">
                <h3 className="font-headline font-medium text-[20px] leading-[22px] lg:text-h5 text-tala-40 mb-4 md:mb-0">
                  {col.title}
                </h3>
                {/* Mobile: links under each title */}
                <div className="flex flex-col gap-3 mt-3 md:hidden">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-[16px] leading-[20px] text-tala-10 font-body hover:text-tala-0 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: Column links */}
          <div className="hidden md:flex gap-1">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex-1 flex flex-col gap-5">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-body-m text-tala-10 font-body hover:text-tala-0 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Branding + legal */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-1">
          <div className="shrink-0">{logo}</div>
          <p className="flex-1 text-body-xs text-tala-40 font-body">
            {legalText}
          </p>
        </div>
      </div>

      {/* Right: CTA card */}
      <div className="bg-tala-0 flex flex-col justify-between items-start overflow-clip p-6 md:p-8 lg:p-10 rounded-3xl w-full lg:w-[417px] lg:self-stretch gap-8">
        <div className="flex flex-col gap-5">
          <span className="inline-flex bg-tala-100 text-tala-10 text-body-xs font-body px-3 py-2 rounded-pill w-fit">
            {ctaTag}
          </span>
          <div className="flex flex-col gap-2">
            <h4 className="font-headline font-medium text-[22px] leading-[24px] lg:text-h5 text-tala-100">
              {ctaHeading}
            </h4>
            <p className="text-[16px] leading-[20px] lg:text-body-m tracking-[-0.18px] text-tala-50 font-body">
              {ctaDescription}
            </p>
          </div>
        </div>
        <button
          onClick={onCtaClick}
          className="bg-tala-100 text-tala-0 h-14 rounded-pill w-full flex items-center justify-between px-8 pr-5 text-body-m tracking-[-0.18px] font-body hover:bg-tala-90 transition-colors cursor-pointer"
        >
          {ctaButtonLabel}
          <ArrowRight size={24} />
        </button>
      </div>
    </footer>
  );
}

export { TalaFooter };
