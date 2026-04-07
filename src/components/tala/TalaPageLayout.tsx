import { TalaNavbar, TalaFooter, type NavItem } from "@/components/tala";
import { useNavigate, useLocation } from "react-router-dom";

const TalaLogo = () => (
  <img src="/images/tala-logo.svg" alt="Tala" className="h-8 w-[109px]" />
);

const TalaLogoWhite = () => (
  <img src="/images/tala-logo.svg" alt="Tala" className="h-8 w-[109px] brightness-0 invert" />
);

const navItems: NavItem[] = [
  { label: "Product", hasDropdown: true, href: "/viral-content-engine" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Webinars", href: "/webinars" },
  { label: "Contact", href: "/contact" },
];

const footerColumns = [
  {
    title: "Connect",
    links: [
      { label: "About", href: "/about" },
      { label: "Success stories", href: "/case-studies" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Interaction",
    links: [
      { label: "Webinars", href: "/webinars" },
      { label: "Resources", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Viral content engine", href: "/viral-content-engine" },
      { label: "Paid growth engine", href: "/paid-growth-engine" },
      { label: "Traffic growth engine", href: "/traffic-growth-engine" },
    ],
  },
];

interface TalaPageLayoutProps {
  children: React.ReactNode;
  className?: string;
  /** Hide the built-in navbar so the page can embed its own (e.g. homepage hero) */
  hideNavbar?: boolean;
}

export function TalaPageLayout({ children, className = "", hideNavbar = false }: TalaPageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen bg-tala-0 ${className}`}>
      {/* Navbar — transparent wrapper so hero bg shows through */}
      {!hideNavbar && (
        <div className="sticky top-0 z-50 flex justify-center px-5 pt-5 pb-2 backdrop-blur-md bg-inherit">
          <TalaNavbar
            logo={<TalaLogo />}
            items={navItems}
            ctaLabel="Get started"
            onCtaClick={() => navigate("/get-started")}
          />
        </div>
      )}

      {/* Page content */}
      {children}

      {/* Footer */}
      <div className="px-5 pb-5 pt-10">
        <TalaFooter
          logo={<TalaLogoWhite />}
          linkColumns={footerColumns}
          legalText={`© ${new Date().getFullYear()} Tala. All rights reserved.`}
          ctaTag="Free"
          ctaHeading="Let's build your growth engine"
          ctaDescription="Tell us your goal — we'll set up your workspace and show you exactly how to grow."
          ctaButtonLabel="Get started"
          onCtaClick={() => navigate("/get-started")}
        />
      </div>
    </div>
  );
}

export { TalaLogo, TalaLogoWhite, navItems };
