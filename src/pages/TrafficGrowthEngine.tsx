import { useNavigate, Link } from "react-router-dom";
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaFaqGroup,
  TalaStatCard,
} from "@/components/tala";

/* ── Brand logos (matching Figma: NBIZ, NEFISH, Rylana, Maestro, Live TrueCure, PRAXINIERT, Gaze) ── */
const brandLogos = ["NBIZ", "NEFISH", "Rylana", "Maestro", "Live TrueCure", "PRAXINIERT", "Gaze"];

/* ── Steps data (matching Figma) ── */
const steps = [
  {
    step: 1,
    title: "Audit and strategize",
    description:
      "Tala audits your current SEO footprint, analyzes competitors, and builds a prioritized roadmap based on quick wins and long-term growth opportunities.",
  },
  {
    step: 2,
    title: "Turn data into direction",
    description:
      "AI surfaces keyword gaps, content opportunities, and technical issues — then translates them into a clear execution plan your team can act on.",
  },
  {
    step: 3,
    title: "Create and optimize at scale",
    description:
      "Tala generates SEO-optimized content at volume — blog posts, landing pages, and pillar articles — all aligned to your brand voice and search intent.",
  },
  {
    step: 4,
    title: "Expand reach across every channel",
    description:
      "Content is repurposed and distributed across search, social, and AI-powered answer engines to maximize visibility everywhere your audience looks.",
  },
];

/* ── FAQ items ── */
const faqItems = [
  { question: "How does Tala identify keyword opportunities?", answer: "Tala uses advanced AI models to analyze search volume, competition, intent signals, and your existing domain authority to surface keyword opportunities where you can realistically rank. It prioritizes keywords with strong commercial intent and traffic potential relative to difficulty." },
  { question: "What types of content does Tala create for SEO?", answer: "Tala produces long-form blog posts, pillar pages, supporting cluster articles, landing pages, FAQ sections, and meta descriptions. Each piece is structured for search engines with proper heading hierarchy, internal links, and schema markup recommendations." },
  { question: "How does Tala ensure content quality?", answer: "Every piece of content goes through multiple AI quality checks including readability scoring, factual consistency verification, brand voice alignment, and SEO optimization scoring. Content is benchmarked against top-ranking pages for your target keywords to ensure competitive quality." },
  { question: "Can Tala work with my existing content strategy?", answer: "Yes. During onboarding, Tala audits your existing content library to identify gaps, refresh opportunities, and cannibalization issues. It then builds a strategy that complements what you already have, filling gaps and strengthening existing topic clusters." },
  { question: "How long until I see results?", answer: "Most customers see measurable ranking improvements within 6-8 weeks as new content gets indexed and begins accumulating authority. Significant traffic growth typically materializes within 3-4 months. Tala accelerates results by targeting quick-win keywords alongside longer-term opportunities." },
  { question: "Does Tala handle technical SEO?", answer: "Tala focuses on content-driven SEO but provides technical SEO recommendations including site structure improvements, internal linking strategies, page speed insights, and crawlability suggestions. For deep technical audits, it integrates with tools like Semrush and Ahrefs." },
  { question: "What languages does Tala support?", answer: "Tala currently supports content creation in English, Spanish, French, German, Portuguese, Italian, Dutch, and Japanese. Each language model is trained on native-quality content to ensure natural fluency, not just translation. Additional languages are added regularly." },
  { question: "How does Tala handle content clusters?", answer: "Tala automatically maps keyword groups into hub-and-spoke content clusters. It creates pillar pages for broad topics and supporting articles for specific subtopics, then generates an internal linking architecture that signals topical authority to search engines." },
  { question: "Can I edit the content Tala creates?", answer: "Absolutely. All content is fully editable before and after publishing. Tala provides a built-in editor with real-time SEO scoring so you can refine content while maintaining optimization. You can also set approval workflows to review all content before it goes live." },
  { question: "What makes Tala different from other SEO tools?", answer: "Unlike traditional SEO tools that only analyze and recommend, Tala executes end-to-end — from keyword research through content creation and performance tracking. It combines the analytical depth of tools like Ahrefs with AI content creation, eliminating the gap between strategy and execution." },
];

/* ── Stat cards for "Companies that scaled SEO into growth" ── */
const statCards = [
  {
    stat: "+245%",
    label: "organic traffic growth",
    description: "AI-powered content clusters drove sustained organic growth over 6 months, tripling qualified traffic from search.",
    logo: <img src="/images/logos/nbiz.svg" alt="NBIZ" className="h-6" />,
  },
  {
    stat: "+170%",
    label: "search visibility increase",
    description: "Technical SEO improvements combined with optimized content boosted domain authority and keyword rankings across all target terms.",
    logo: <img src="/images/logos/rylana.svg" alt="Rylana" className="h-6" />,
  },
  {
    stat: "+30K",
    label: "monthly organic visitors",
    description: "From near-zero organic presence to 30,000+ monthly visitors through a systematic content and link-building strategy.",
    logo: <img src="/images/logos/maestro.svg" alt="Maestro" className="h-6" />,
  },
];

export default function TrafficGrowthEngine() {
  const navigate = useNavigate();

  return (
    <TalaPageLayout>
      {/* ═══ 1. HERO — Dark bg, text left + image right ═══ */}
      <section className="py-5">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-4xl p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: text content */}
            <div className="flex flex-col gap-5 md:gap-6 flex-1">
              <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-h2 text-tala-0 max-w-[600px]">
                Sustainable organic growth that compounds over time
              </h1>
              <p className="font-body text-body-l text-tala-40 max-w-[480px]">
                Tala builds your organic presence across search, content, and AI answer engines — so traffic keeps growing without increasing spend.
              </p>
              <div>
                <TalaButton color="white" size="L" onClick={() => navigate("/get-started")}>
                  Let's talk
                </TalaButton>
              </div>
            </div>
            {/* Right: image placeholder */}
            <div className="w-full lg:w-[480px] h-[280px] md:h-[340px] lg:h-[400px] bg-tala-90 rounded-3xl shrink-0" />
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST LOGOS — horizontal bar ═══ */}
      <section className="py-6 md:py-10 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-12 flex-wrap">
            {brandLogos.map((name) => (
              <span key={name} className="font-headline font-bold text-[16px] md:text-[20px] lg:text-[22px] text-tala-80 opacity-40 shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. TESTIMONIAL — Person photo + quote left, stat cards right ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-2">
            {/* Left: testimonial with person photo */}
            <div className="flex-1 bg-tala-0 border border-tala-20 rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[360px]">
              <div className="flex items-start justify-between mb-6">
                <Link to="/case-studies" className="font-body text-body-xs text-tala-50 hover:text-tala-100 transition-colors">
                  Read case &rarr;
                </Link>
              </div>
              <div className="flex flex-col gap-6 lg:gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-tala-10 overflow-hidden shrink-0">
                    <img src="/images/emilie-rutter.png" alt="Emilie Rutter" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-headline font-medium text-[16px] lg:text-[18px] text-tala-100">Emilie Rutter</p>
                    <p className="font-body text-body-xs text-tala-50">VP of Marketing / GrowthCo</p>
                  </div>
                </div>
                <p className="font-body text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] lg:text-body-xl text-tala-80">
                  "Tala transformed our organic strategy. We went from scattered content efforts to a structured growth engine that delivers compounding results every month."
                </p>
              </div>
            </div>
            {/* Right: stat cards stacked */}
            <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-[340px] shrink-0">
              <div className="flex-1 lg:flex-none bg-tala-0 border border-tala-20 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[160px] lg:min-h-[200px]">
                <p className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-h4 text-tala-100">+45%</p>
                <p className="font-body text-body-s text-tala-50 mt-2">organic traffic growth</p>
              </div>
              <div className="flex-1 lg:flex-none bg-tala-0 border border-tala-20 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[160px] lg:min-h-[200px]">
                <p className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-h4 text-tala-100">2X</p>
                <p className="font-body text-body-s text-tala-50 mt-2">search visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. THE CHALLENGE — Dark card ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-3xl lg:rounded-4xl p-8 md:p-10 lg:p-16">
            <p className="font-body text-body-s text-tala-40 mb-4 lg:mb-6">The challenge</p>
            <p className="font-headline font-bold text-[24px] leading-[26px] md:text-[32px] md:leading-[32px] lg:text-h4 text-tala-0 max-w-[800px]">
              Most teams struggle to build sustainable organic traffic. SEO requires consistent effort across content, technical optimization, and distribution — but resources are limited and results take time to materialize.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. PROCESS STEPS — Subheading + 4 step cards ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-h4 text-tala-60 text-center mb-8 lg:mb-16 max-w-[700px] mx-auto">
            We fix visibility across all search layers
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
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl flex-1 min-h-[200px] md:min-h-[280px] lg:h-[440px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(104,81,255,0.06),transparent_60%)]" />
                  <span className="absolute bottom-4 right-8 font-headline font-bold text-[120px] lg:text-[200px] leading-none text-tala-100/[0.04] select-none pointer-events-none">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FULL-WIDTH DARK BANNER — "Designed for modern search" ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-3xl lg:rounded-4xl p-8 md:p-10 lg:p-16 flex flex-col gap-4 lg:gap-6">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-h3 text-tala-0 max-w-[700px]">
              Designed for modern search
            </h2>
            <p className="font-body text-body-l text-tala-40 max-w-[640px]">
              Traditional SEO only covers Google. Tala optimizes for AI-first search engines like ChatGPT, Perplexity, and Google AI Overviews — so your brand shows up wherever people are looking for answers.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. COMPANIES THAT SCALED — 3 stat cards ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-h4 text-tala-60 mb-8 lg:mb-10">
            Companies that scaled SEO into growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {statCards.map((card) => (
              <TalaStatCard
                key={card.stat}
                stat={card.stat}
                label={card.label}
                description={card.description}
                logo={card.logo}
              />
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
          <TalaFaqGroup items={faqItems} />
        </div>
      </section>
    </TalaPageLayout>
  );
}
