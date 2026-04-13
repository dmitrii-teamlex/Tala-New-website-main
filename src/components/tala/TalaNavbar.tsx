import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

/**
 * TalaNavbar — Figma mega menu with Connect & Products dropdowns
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

const connectMenu = [
  { label: "About", icon: "/images/menu-icon-about.svg", href: "/about" },
  { label: "Cases", icon: "/images/menu-icon-cases.svg", href: "/case-studies" },
  { label: "Contact us", icon: "/images/menu-icon-contact.svg", href: "/contact" },
];

const productsMenu = [
  { label: "Viral content engine", icon: "/images/menu-icon-viral.svg", href: "/viral-content-engine" },
  { label: "Paid growth engine", icon: "/images/menu-icon-paid.svg", href: "/paid-growth-engine" },
  { label: "Traffic growth engine", icon: "/images/menu-icon-traffic.svg", href: "/traffic-growth-engine" },
];

function TalaNavbar({ logo, items, ctaLabel = "Get started", onCtaClick, className }: TalaNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (item: NavItem) => {
    if (item.label === "Connect" || item.label === "Products") {
      setOpenDropdown(openDropdown === item.label ? null : item.label);
      return;
    }
    setOpenDropdown(null);
    if (item.onClick) item.onClick();
    else if (item.href) navigate(item.href);
  };

  const handleMobileNav = (item: NavItem) => {
    if (item.hasDropdown) {
      setMobileExpanded(mobileExpanded === item.label ? null : item.label);
      return;
    }
    if (item.onClick) item.onClick();
    else if (item.href) navigate(item.href);
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const handleMobileSubNav = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const handleCta = () => {
    setOpenDropdown(null);
    onCtaClick?.();
    setIsMenuOpen(false);
  };

  const dropdownItems = openDropdown === "Connect" ? connectMenu : openDropdown === "Products" ? productsMenu : null;

  return (
    <>
      <div ref={dropdownRef} className="relative w-full max-w-[1320px]" onMouseLeave={() => setOpenDropdown(null)}>
        <nav
          className={cn(
            "bg-tala-0 flex items-center justify-between",
            "pl-6 pr-3 py-3 lg:pl-10 lg:pr-4 lg:py-4",
            "rounded-[99px] w-full",
            "shadow-[0px_8px_60px_0px_rgba(218,218,218,0.2),0px_6px_32px_0px_rgba(24,39,75,0.03)]",
            className
          )}
        >
          {/* Logo */}
          <div className="shrink-0 h-8">{logo}</div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-[60px] font-body text-[18px] leading-[20px] tracking-[-0.18px] whitespace-nowrap transition-colors cursor-pointer",
                  openDropdown === item.label
                    ? "bg-tala-10 text-tala-100"
                    : "text-tala-90 hover:bg-tala-10"
                )}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    size={20}
                    className={cn(
                      "transition-transform duration-200",
                      openDropdown === item.label ? "rotate-180" : ""
                    )}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={handleCta}
            className="hidden lg:flex items-center justify-center h-[56px] px-8 rounded-pill bg-tala-100 font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-0 whitespace-nowrap hover:bg-tala-90 transition-colors cursor-pointer"
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

        {/* Desktop dropdown */}
        {dropdownItems && (
          <div
            className="hidden lg:block absolute top-[88px] z-50 animate-[text-fly-up_0.25s_cubic-bezier(0.22,1,0.36,1)]"
            style={{ left: openDropdown === "Connect" ? "33%" : "42%" }}
          >
            <div className="bg-tala-0 rounded-3xl p-5 flex flex-col gap-5 text-left">
              {dropdownItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpenDropdown(null)}
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-tala-10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-[60px] bg-tala-80 flex items-center justify-center shrink-0">
                    <img src={item.icon} alt="" className="w-4 h-4" />
                  </div>
                  <span className="font-headline font-medium text-[24px] leading-[26px] text-tala-80 w-[170px] text-left">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-tala-0 z-[60] flex flex-col p-5 lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between mb-6 shrink-0">
            <div className="shrink-0 h-8">{logo}</div>
            <button
              className="flex items-center justify-center w-11 h-11 rounded-full border border-tala-20 text-tala-90"
              onClick={() => { setIsMenuOpen(false); setMobileExpanded(null); }}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col flex-1">
            {items.map((item) => {
              const isExpanded = mobileExpanded === item.label;
              const subItems = item.label === "Connect" ? connectMenu : item.label === "Products" ? productsMenu : null;
              return (
                <div key={item.label} className="border-b border-tala-20">
                  <button
                    onClick={() => handleMobileNav(item)}
                    className="w-full flex items-center justify-between py-5 font-headline font-medium text-[26px] leading-[26px] text-tala-90"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={22}
                        className={cn("text-tala-50 transition-transform duration-200", isExpanded ? "rotate-180" : "")}
                      />
                    )}
                  </button>
                  {isExpanded && subItems && (
                    <div className="flex flex-col gap-2 pb-5">
                      {subItems.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleMobileSubNav(sub.href)}
                          className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-tala-10"
                        >
                          <div className="w-8 h-8 rounded-full bg-tala-80 flex items-center justify-center shrink-0">
                            <img src={sub.icon} alt="" className="w-4 h-4" />
                          </div>
                          <span className="font-body text-[18px] leading-[20px] text-tala-80">
                            {sub.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            onClick={handleCta}
            className="w-full h-[56px] rounded-pill bg-tala-100 font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-0 mt-6 shrink-0"
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </>
  );
}

export { TalaNavbar, type NavItem };
