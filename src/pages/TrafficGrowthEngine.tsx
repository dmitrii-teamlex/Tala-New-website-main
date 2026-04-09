import { useNavigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaFaqGroup,
  TalaNavbar,
  TalaLogo,
  TalaBrandline,
  TalaCaseTestimonial,
  navItems,
} from "@/components/tala";

/* ── Brand logos ── */

/* ── Steps data (matching Figma 45:4036) ── */
const steps = [
  {
    step: 1,
    title: "Audit and strategize",
    description:
      "We analyze your site, content, and search demand to uncover growth gaps and create a clear, data-driven roadmap.",
    image: "/images/step1_traffic.png",
  },
  {
    step: 2,
    title: "Turn data into direction",
    description:
      "Our AI identifies untapped search demand, clustering high-intent topics and keywords that match your ideal customers' needs, across Google and AI search.",
    image: "/images/step2_traffic.png",
  },
  {
    step: 3,
    title: "Create and optimize at scale",
    description:
      "We launch programmatic SEO systems that generate thousands of optimized pages — built around real user intent and structured for ranking.",
    image: "/images/step3_traffic.png",
  },
  {
    step: 4,
    title: "Expand reach across every channel",
    description:
      "We monitor trends and rankings, adapting content for Google and AI search systems like Gemini, Perplexity, and ChatGPT.",
    image: "/images/step4_traffic.png",
  },
];

/* ── FAQ items (Figma 34:11102) ── */
const faqItems = [
  { question: "Do we need existing SEO traffic to start?", answer: "No. The system can build organic visibility from zero or scale existing performance." },
  { question: "How automated is the process?", answer: "Most research, content generation, and publishing are automated. Your team stays focused on strategy." },
  { question: "We already work with an SEO agency. Can this still help?", answer: "Yes. The system complements agency work by automating execution and scaling faster." },
  { question: "How fast can we expect results?", answer: "Most clients see measurable growth in 3–6 months as automated pages start ranking." },
];

/* ── Case cards for "Companies that scaled SEO into growth" ── */
const caseCards = [
  {
    stat: "+245%",
    label: "lead conversion rate",
    description: "AI-generated, localized page templates boosted relevance and intent, raising conversions by 245% and cutting acquisition costs by 40%.",
    logo: "/images/brand-alps.svg",
    logoName: "Alps2Alps",
    href: "/case-studies",
  },
  {
    stat: "+170%",
    label: "organic-driven revenue",
    description: "Programmatic SEO turned static blog content into a scalable acquisition channel, growing organic revenue by 170% in five months.",
    logo: "/images/brand-flylane.svg",
    logoName: "Flylane",
    href: "/case-studies",
  },
  {
    stat: "+30K",
    label: "organic visits",
    description: "Generated 30,000 organic visits in just four months by launching AI-driven content clusters focused on high-intent wellness topics.",
    logo: "/images/brand-ayurveda.svg",
    logoName: "Ask Ayurveda",
    logoFlip: true,
    href: "/case-studies",
  },
];

export default function TrafficGrowthEngine() {
  const navigate = useNavigate();

  return (
    <TalaPageLayout className="bg-tala-0" hideNavbar>
      {/* ═══ 1. HERO — Navbar inside dark block, video flush to edge ═══ */}
      <section className="bg-tala-0 p-5 lg:p-10">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-[#22242D] rounded-4xl overflow-hidden flex flex-col items-center relative">
            {/* Navbar inside dark block — on top of video */}
            <div className="w-full flex justify-center pt-5 px-5 relative z-20">
              <TalaNavbar logo={<Link to="/"><TalaLogo /></Link>} items={navItems} ctaLabel="Get started" onCtaClick={() => navigate("/get-started")} />
            </div>
            {/* Hero content */}
            <div className="w-full flex flex-col lg:flex-row items-stretch">
              {/* Left: text block */}
              <div className="relative z-10 flex flex-col gap-10 p-8 lg:p-10 lg:pl-10 justify-center w-full lg:w-[53%] py-10 lg:py-16">
                <div className="flex flex-col gap-4">
                  <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-[80px] lg:leading-[76px] text-tala-0">
                    Sustainable organic growth that compounds over time
                  </h1>
                  <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-20 max-w-[520px]">
                    With Tala, your visibility doesn't depend on ad budgets or manual output. Our Organic Growth Engine creates a lasting foundation for traffic, leads, and brand authority,  powered by automation and intelligent SEO.
                  </p>
                </div>
                <div>
                  <TalaButton color="white" size="L" onClick={() => navigate("/get-started")}>
                    Get started
                  </TalaButton>
                </div>
              </div>
              {/* Right: video — no crop, can overlap text area slightly */}
              <div className="w-full lg:w-[55%] lg:absolute lg:right-0 lg:bottom-0 flex items-end">
                <video
                  src="/images/traffic-grow-hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST LOGOS — marquee brandline ═══ */}
      <TalaBrandline />

      {/* ═══ 3. TESTIMONIAL — Person photo + quote left, stat cards right ═══ */}
      <TalaCaseTestimonial
        name="Raitis Bullits"
        role="Co-founder and CEO / Alps2Alps"
        image="/images/case-raitis.jpg"
        logo="/images/case-logo-alps.svg"
        caseHref="/case-studies"
        quote={[
          { text: '"Tala completely transformed how we think about SEO. Instead of writing endless content, ' },
          { text: "we now have a self-scaling system that attracts customers 24/7", highlight: true },
          { text: '. Within a few months, we started seeing results we couldn\'t achieve with any agency."' },
        ]}
        stats={[
          { value: "+45%", label: "organic traffic growth" },
          { value: "2X", label: "revenue growth" },
        ]}
      />

      {/* ═══ 4. THE CHALLENGE — Dark card with video ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-4xl overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 md:p-10 lg:p-10 flex flex-col justify-between min-h-[260px] lg:h-[318px]">
              <p className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] text-tala-50">
                The challenge
              </p>
              <p className="font-body text-[20px] leading-[26px] md:text-[28px] md:leading-[30px] lg:text-[32px] lg:leading-[34px] tracking-[-0.32px] text-tala-10 mt-6 lg:mt-0">
                Paid campaigns vanish when budgets end. Visibility shouldn't. We build AI-driven growth systems that keep attracting customers long after the ads stop.
              </p>
            </div>
            {/* Right: formula video */}
            <div className="w-full lg:w-[318px] h-[200px] lg:h-[318px] shrink-0 overflow-hidden">
              <video
                src="/images/formula.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. PROCESS STEPS — Subheading + 4 step cards ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] text-tala-60 text-center mb-8 lg:mb-16 max-w-[700px] mx-auto">
            We drive visibility across all search layers
          </h2>

          <div className="flex flex-col gap-5 lg:gap-10">
            {steps.map((step) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-1 items-stretch">
                {/* Text panel */}
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-between w-full md:w-[320px] lg:w-[440px] shrink-0 min-h-[280px] md:min-h-[320px] lg:h-[440px]">
                  <div className="flex items-start justify-between">
                    <TalaTag color="black" size="XS">Step {String(step.step).padStart(2, "0")}</TalaTag>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] lg:text-h4 text-tala-100">
                      {step.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] lg:text-body-l text-tala-70">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Visual panel */}
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl flex-1 min-h-[200px] md:min-h-[280px] lg:h-[440px] overflow-hidden flex items-center justify-center p-6 lg:p-10">
                  <img src={step.image} alt={step.title} className="w-full h-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. DESIGNED FOR MODERN SEARCH — Two dark cards on tala-10 bg ═══ */}
      <section className="bg-tala-10 py-12 md:py-16 lg:py-16">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch">
            {/* Left: image card */}
            <div className="flex-1 bg-tala-100 rounded-4xl overflow-hidden flex flex-col items-center justify-center p-10 gap-8">
              <p className="font-headline font-medium text-[28px] leading-[26px] text-tala-50 text-center">AI recommendation map</p>
              <img src="/images/modern-search.png" alt="AI recommendation map" className="w-full h-auto object-contain" />
            </div>
            {/* Right: text card */}
            <div className="flex-1 bg-tala-100 rounded-4xl p-10 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]">
              <h2 className="font-headline font-bold text-[32px] leading-[32px] md:text-[42px] md:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-0">
                Designed for modern search
              </h2>
              <p className="font-body text-[20px] leading-[24px] lg:text-[24px] lg:leading-[28px] mt-8 lg:mt-0">
                <span className="text-tala-10">Organic search today — it's about being recommended by AI systems. </span>
                <span className="text-tala-50">Our structured data ensure your brand shows up not only in traditional search results but also in </span>
                <span className="text-tala-10">AI overviews</span>
                <span className="text-tala-50">, </span>
                <span className="text-tala-10">chatbots</span>
                <span className="text-tala-50">, and </span>
                <span className="text-tala-10">knowledge panels</span>
                <span className="text-tala-50">.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. COMPANIES THAT SCALED — 3 case cards with hover ═══ */}
      <section className="bg-tala-10 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] text-tala-100 mb-8 lg:mb-10">
            Companies that scaled SEO into growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {caseCards.map((card) => (
              <Link key={card.stat} to={card.href} className="group bg-tala-0 border border-tala-10 rounded-[40px] p-10 flex flex-col justify-between min-h-[300px] lg:h-[360px] mr-[-0.5px] mb-[-0.5px] cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="h-8 flex items-center">
                    <img src={card.logo} alt={card.logoName} className={`h-8 ${card.logoFlip ? "-scale-y-100" : ""}`} />
                  </div>
                  <div className="w-[42px] h-[42px] rounded-pill border border-tala-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ChevronRight size={20} />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-1">
                    <p className="font-headline font-bold text-[36px] leading-[36px] lg:text-[56px] lg:leading-[54px] text-tala-100">{card.stat}</p>
                    <p className="font-body text-[20px] leading-[24px] lg:text-[24px] lg:leading-[28px] text-tala-70">{card.label}</p>
                  </div>
                  <div className="max-h-0 group-hover:max-h-[120px] overflow-hidden transition-all duration-300">
                    <div className="border-t border-tala-20 mt-4 pt-4">
                      <p className="font-body text-[16px] leading-[18px] text-tala-70">{card.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. FAQ ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-h3 text-tala-100 mb-8 lg:mb-10">
            FAQs
          </h2>
          <TalaFaqGroup items={faqItems} defaultOpen />
        </div>
      </section>
    </TalaPageLayout>
  );
}
