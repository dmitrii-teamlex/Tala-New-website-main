import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * TalaNavbar — Figma-exact mega menu
 * Figma: w-1320, pl-40 pr-16 py-16, rounded-99, shadow-M
 * Logo: h-32 w-109
 * Nav items: px-16 py-8 rounded-60, text 18px tracking -0.18
 * CTA: h-56 px-32 rounded-pill, bg-tala-100
 */

interface NavItem {
  label: string;
  hasDropdown?: boolean;
  href?: string;
  onClick?: () => void;
}

interface TalaNavbarProps {
  logo: React.ReactNode;
  items: NavItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

function TalaNavbar({ logo, items, ctaLabel = "Get started", onCtaClick, className }: TalaNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (item: NavItem) => {
    if (item.onClick) item.onClick();
    else if (item.href) navigate(item.href);
  };

  const handleMobileNav = (item: NavItem) => {
    handleNav(item);
    setIsMenuOpen(false);
  };

  const handleCta = () => {
    onCtaClick?.();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          // Figma: bg-white, pl-40 pr-16 py-16, rounded-99, shadow, w-1320 max
          "bg-tala-0 flex items-center justify-between",
          "pl-6 pr-3 py-3 lg:pl-10 lg:pr-4 lg:py-4",
          "rounded-[99px] w-full max-w-[1320px]",
          "shadow-[0px_8px_60px_0px_rgba(218,218,218,0.2),0px_6px_32px_0px_rgba(24,39,75,0.03)]",
          className
        )}
      >
        {/* Logo — Figma: h-32 w-109 */}
        <div className="shrink-0 h-8">{logo}</div>

        {/* Desktop nav — centered between logo and CTA */}
        <div className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className="flex items-center gap-1 px-4 py-2 rounded-[60px] font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-90 hover:bg-tala-10 transition-colors whitespace-nowrap"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={20} className="text-tala-50" />}
            </button>
          ))}
        </div>

        {/* Desktop CTA — Figma: h-56 px-32 rounded-pill bg-tala-100 */}
        <button
          onClick={handleCta}
          className="hidden lg:flex items-center justify-center h-[56px] px-8 rounded-pill bg-tala-100 font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-0 whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          {ctaLabel}
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-tala-90"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-tala-0 z-[60] flex flex-col p-6 lg:hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="shrink-0 h-8">{logo}</div>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full text-tala-90"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col flex-1">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMobileNav(item)}
                className="flex items-center justify-between py-5 font-headline font-medium text-[28px] leading-[26px] text-tala-90 border-b border-tala-20"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={20} className="text-tala-50" />}
              </button>
            ))}
          </div>
          <button
            onClick={handleCta}
            className="w-full h-[56px] rounded-pill bg-tala-100 font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-0 mt-6"
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </>
  );
}

export { TalaNavbar, type NavItem };
