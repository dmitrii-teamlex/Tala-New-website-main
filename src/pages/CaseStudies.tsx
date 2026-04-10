import { TalaPageLayout, TalaCaseStudyCard } from "@/components/tala";

/* ── Case study data ── */
interface CaseStudyItem {
  name: string;
  slug: string;
  logo: string;
  logoFlip?: boolean;
  logoHeight?: number;
  logoMono?: boolean;
  tags: string[];
  statLabel: string;
  statValue: string;
  statSuffix: string;
  description: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    name: "Alps2Alps",
    slug: "alps2alps",
    logo: "/images/brand-alps.svg",
    tags: ["AI", "Transportation", "Programmatic SEO"],
    statLabel: "grew by",
    statValue: "2x",
    statSuffix: "organic traffic",
    description: "Teamlex built a programmatic SEO engine that turned route demand into a scalable acquisition channel for an alpine transfer service.",
  },
  {
    name: "Lev HaOlam",
    slug: "lev-haolam",
    logo: "/images/brand-levhaolam.svg",
    tags: ["SEO", "E-commerce", "Content"],
    statLabel: "grew by",
    statValue: "+85%",
    statSuffix: "organic clicks",
    description: "Recipe-led content and programmatic product pages rebuilt Lev HaOlam's organic channel from the ground up.",
  },
  {
    name: "Respontika",
    slug: "respontika",
    logo: "/images/logo-respontika.svg",
    tags: ["AI", "Digital Products", "Creative"],
    statLabel: "scaled by",
    statValue: "3×",
    statSuffix: "creative output",
    description: "Data-driven competitor analysis and batch creative generation tripled Respontika's ad output while improving CTR and CPA.",
  },
  {
    name: "Ask Ayurveda",
    slug: "ask-ayurveda",
    logo: "/images/brand-ayurveda.svg",
    logoFlip: true,
    tags: ["SEO", "Wellness", "Programmatic SEO"],
    statLabel: "reached",
    statValue: "20K+",
    statSuffix: "monthly organic visits",
    description: "A medical-safe SEO AI agent built Ask Ayurveda's organic traffic from zero to 20K+ monthly visits in the first few months.",
  },
  {
    name: "Flylane",
    slug: "flylane",
    logo: "/images/brand-flylane.svg",
    tags: ["SEO", "Education", "AI"],
    statLabel: "scaled to",
    statValue: "408K+",
    statSuffix: "monthly organic visitors",
    description: "AI-powered programmatic SEO turned Flylane's global education platform into a 400K+ monthly organic traffic machine.",
  },
  {
    name: "Elirox",
    slug: "elirox",
    logo: "/images/brand-elirox.svg",
    tags: ["AI", "Fintech", "Programmatic SEO"],
    statLabel: "launched",
    statValue: "300+",
    statSuffix: "SEO pages from scratch",
    description: "A programmatic SEO agent launched 300+ pages across Elirox's algorithmic trading ecosystem — from zero to consistent organic leads.",
  },
  {
    name: "Semrush",
    slug: "semrush",
    logo: "/images/brand-semrush.svg",
    tags: ["AI", "SaaS", "Video Content"],
    statLabel: "reached",
    statValue: "~75%",
    statSuffix: "viral video rate",
    description: "A self-optimizing AI agent replaced Semrush's fragmented video workflow with a single continuous loop — most videos now go viral.",
  },
  {
    name: "Bina School",
    slug: "bina-school",
    logo: "/images/brand-bina.svg",
    logoHeight: 32,
    tags: ["AI", "Education", "Content"],
    statLabel: "improved by",
    statValue: "+30%",
    statSuffix: "content win rate",
    description: "Data-driven idea selection and competitor analysis helped Bina School turn short-form content from guessing into a predictable system.",
  },
  {
    name: "Axevil Capital",
    slug: "axevil-capital",
    logo: "/images/brand-axevil.svg",
    logoHeight: 24,
    tags: ["SEO", "Fintech", "Programmatic SEO"],
    statLabel: "grew by",
    statValue: "+320%",
    statSuffix: "organic traffic",
    description: "Programmatic SEO built for Axevil Capital's private market investment platform — 400+ pages, top-10 rankings, +320% organic traffic.",
  },
  {
    name: "GaiaNet AI",
    slug: "gaianet-ai",
    logo: "/images/brand-gaianet.svg",
    tags: ["AI", "Crypto", "Social Content"],
    statLabel: "grew by",
    statValue: "+350%",
    statSuffix: "community growth",
    description: "A self-scaling social content engine drove GaiaNet AI's community growth by 350% across X, Discord, Telegram, and LinkedIn.",
  },
  {
    name: "Engagelabs",
    slug: "engagelabs",
    logo: "/images/brand-engagelabs.png",
    logoMono: true,
    tags: ["AI", "SaaS", "Content"],
    statLabel: "improved by",
    statValue: "+35%",
    statSuffix: "content win rate",
    description: "A faster, script-driven content pipeline boosted Engagelabs' short-form video performance while cutting production time by 60%.",
  },
  {
    name: "Inxy",
    slug: "inxy",
    logo: "/images/brand-inxy.svg",
    tags: ["SEO", "SaaS", "Automation"],
    statLabel: "grew by",
    statValue: "+60%",
    statSuffix: "organic clicks",
    description: "A fully automated SEO AI agent handled internal linking, content updates, and page creation — cutting manual SEO work by 80%.",
  },
  {
    name: "Wow How Studio",
    slug: "wow-how-studio",
    logo: "/images/brand-wowwoh.svg",
    tags: ["AI", "Video Production", "Content"],
    statLabel: "grew by",
    statValue: "+220%",
    statSuffix: "organic reach",
    description: "A self-improving content engine turned Wow How Studio's organic reach from inconsistent to predictable across every platform.",
  },
  {
    name: "nmbr.homes",
    slug: "nmbr-homes",
    logo: "/images/brand-nmbr.svg",
    tags: ["SEO", "PropTech", "Programmatic SEO"],
    statLabel: "grew by",
    statValue: "+210%",
    statSuffix: "organic traffic",
    description: "A programmatic SEO engine built for multi-market real estate — 500+ pages launched across 12 new markets, +210% organic traffic.",
  },
  {
    name: "Harey Zahav",
    slug: "harey-zahav",
    logo: "/images/brand-hareyzahav.svg",
    tags: ["SEO", "Real Estate", "Programmatic SEO"],
    statLabel: "grew by",
    statValue: "+145%",
    statSuffix: "organic traffic",
    description: "~150 SEO-optimized pages and semantic clustering built Harey Zahav's organic channel in one of Israel's most competitive markets.",
  },
];

export default function CaseStudies() {
  return (
    <TalaPageLayout className="!bg-tala-10">
      {/* ═══ HERO ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 text-center">
          <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-h3 text-tala-100">
            Trusted by founders
            <br />
            from fast growing startups
          </h1>
        </div>
      </section>

      {/* ═══ CARDS GRID — 2-col, gap-1 (4px) ═══ */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {caseStudies.map((cs) => (
              <TalaCaseStudyCard
                key={cs.slug}
                logo={cs.logo}
                logoAlt={cs.name}
                logoFlip={cs.logoFlip}
                logoHeight={cs.logoHeight}
                logoMono={cs.logoMono}
                tags={cs.tags}
                statLabel={cs.statLabel}
                statValue={cs.statValue}
                statSuffix={cs.statSuffix}
                description={cs.description}
                href={`/case-studies/${cs.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </TalaPageLayout>
  );
}
