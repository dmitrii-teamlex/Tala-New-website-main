import { useNavigate, Link } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaFaqGroup,
  TalaBrandline,
  TalaCaseTestimonial,
  TalaNavbar,
  TalaLogo,
  navItems,
} from "@/components/tala";

const Lottie = lazy(() => import("lottie-react"));

function LottieHero({ src }: { src: string }) {
  const [data, setData] = useState<unknown>(null);
  useEffect(() => { fetch(src).then(r => r.json()).then(setData); }, [src]);
  if (!data) return null;
  return <Suspense fallback={null}><Lottie animationData={data} loop autoplay className="w-full h-full" /></Suspense>;
}

/* ── Steps data ── */
const steps = [
  {
    step: 1,
    title: "Ad library monitoring",
    description: "Tala scans competitor ad libraries across Meta, Google, TikTok, and LinkedIn to identify winning creative patterns and trends.",
  },
  {
    step: 2,
    title: "Ad performance scoring",
    description: "Each creative is scored on engagement potential, audience fit, and competitive advantage to surface the best opportunities.",
  },
  {
    step: 3,
    title: "Ad creation",
    description: "AI generates high-converting ad creatives — copy, visuals, and video scripts — tailored to each platform and audience segment.",
  },
  {
    step: 4,
    title: "Smart launching and optimization",
    description: "Campaigns are automatically structured, launched, and optimized across platforms with intelligent budget allocation.",
  },
];

/* ── FAQ items ── */
const faqItems = [
  { question: "What ad platforms does Tala support?", answer: "Tala supports all major advertising platforms including Meta (Facebook & Instagram), Google Ads (Search, Display, YouTube), TikTok Ads, and LinkedIn Ads. We continuously add new platform integrations based on customer demand." },
  { question: "How does Tala monitor competitor ads?", answer: "Tala connects to public ad transparency libraries across Meta, Google, TikTok, and LinkedIn. It continuously scans for new creatives from competitors you specify, analyzing their messaging, formats, and estimated performance to surface actionable insights." },
  { question: "Can Tala create video ad creatives?", answer: "Yes. Tala generates video scripts, storyboards, and short-form video creatives optimized for each platform's specifications. It can produce UGC-style scripts, motion graphics briefs, and platform-native video formats for TikTok, Reels, and YouTube Shorts." },
  { question: "How does Tala optimize ad spend?", answer: "Tala uses predictive performance models to allocate budget across campaigns, ad sets, and platforms. It continuously monitors ROAS, CPA, and other KPIs, shifting spend toward top performers and pausing underperforming creatives automatically." },
  { question: "What's the typical ROAS improvement?", answer: "Customers typically see a 2-3x improvement in ROAS within the first 90 days. This comes from a combination of better creative quality, faster iteration cycles, smarter budget allocation, and reduced creative fatigue through constant fresh variations." },
  { question: "Can I review ads before they go live?", answer: "Absolutely. Tala offers flexible approval workflows — you can set it to fully automatic launching, require manual approval for all creatives, or use a hybrid approach where variations of approved concepts launch automatically while net-new concepts await your review." },
  { question: "Does Tala handle A/B testing?", answer: "Yes. Tala automatically generates multiple creative variations and structures them as A/B tests within each platform. It monitors statistical significance in real time and automatically scales winners while retiring underperformers." },
  { question: "How does Tala maintain brand guidelines?", answer: "During onboarding, Tala ingests your brand guidelines, existing ad creatives, and visual identity. Every generated creative is checked against your brand model for tone, messaging, color palette, and typography consistency before it enters the approval queue." },
  { question: "What ad formats does Tala support?", answer: "Tala supports all major ad formats including single image, carousel, video, collection ads, story/reel placements, search ads, display banners, and responsive ads. Each creative is automatically resized and optimized for every placement within a platform." },
  { question: "How quickly can I launch my first campaign?", answer: "Most customers launch their first Tala-powered campaign within 48 hours of onboarding. Setup involves connecting your ad accounts, uploading brand assets, and defining your target audiences. Tala handles the rest — from creative generation to campaign structuring." },
];

export default function PaidGrowthEngine() {
  const navigate = useNavigate();

  return (
    <TalaPageLayout className="bg-tala-0" hideNavbar>
      {/* ═══ 1. HERO — Dark with navbar inside ═══ */}
      <section className="bg-tala-0 p-5 lg:p-10">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-tala-10 rounded-4xl overflow-hidden flex flex-col items-center text-center relative min-h-[400px] md:min-h-[520px] lg:min-h-[640px]">
            {/* Navbar inside hero */}
            <div className="relative z-20 w-full flex justify-center pt-5 px-5">
              <TalaNavbar logo={<Link to="/"><TalaLogo /></Link>} items={navItems} ctaLabel="Get started" onCtaClick={() => navigate("/get-started")} />
            </div>
            {/* Lottie full block */}
            <div className="absolute inset-0 z-0">
              <LottieHero src="/images/paid.json" />
            </div>
            {/* Content on top */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 lg:px-10 py-16 md:py-20 lg:py-28 gap-5 md:gap-6">
              <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-[72px] lg:leading-[68px] text-tala-100 max-w-[900px]">
                Turn winning ads into scalable performance
              </h1>
              <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-70 max-w-[700px]">
                Predict which ads will convert, create faster, and launch campaigns backed by real competitor data — not guesswork.
              </p>
              <TalaButton color="black" size="L" onClick={() => navigate("/get-started")}>
                Get started
              </TalaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST LOGOS — marquee brandline ═══ */}
      <TalaBrandline />

      {/* ═══ 2.5. TESTIMONIAL — Lada Klishchenko / Respontika ═══ */}
      <TalaCaseTestimonial
        name="Lada Klishchenko"
        role="CEO / Respontika"
        image="/images/case-lada.jpg"
        logo="/images/logo-respontika.svg"
        caseHref="/case-studies"
        quote={[
          { text: '"With Tala, we went from 3 days per creative batch to 50+ variants in a single morning. Competitor analysis is built in, hypothesis testing is automatic — our team didn\'t grow, but output did."' },
        ]}
        stats={[
          { value: "3X", label: "increase in creative output" },
          { value: "+25%", label: "improvement in CTR" },
        ]}
      />

      {/* ═══ 3. INTRO LINE — Dark card with text + ad cards video ═══ */}
      <section className="bg-tala-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-[#22242D] rounded-4xl overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 md:p-10 lg:p-10 flex flex-col justify-between min-h-[240px] lg:h-[318px]">
              <p className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] text-tala-50">
                Intro line
              </p>
              <p className="font-body text-[20px] leading-[26px] md:text-[28px] md:leading-[30px] lg:text-[32px] lg:leading-[34px] tracking-[-0.32px] text-tala-10 mt-6 lg:mt-0">
                An AI system that doesn't just watch ads, it turns them into profitable campaigns.
              </p>
            </div>
            <div className="w-full lg:flex-1 shrink-0 flex items-center justify-center lg:h-[318px]">
              <video
                src="/images/ad-cards.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. CENTERED TAGLINE ═══ */}
      <section className="bg-tala-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-medium text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] lg:text-[28px] lg:leading-[26px] text-tala-50 text-center max-w-[800px] mx-auto">
            An AI system that doesn't just watch trends, it turns them into assets
          </h2>
        </div>
      </section>

      {/* ═══ 5. PROCESS STEPS — 4 steps, row layout ═══ */}
      <section className="bg-tala-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col gap-5 lg:gap-10">
            {steps.map((step) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-0 items-stretch">
                {/* Text panel */}
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-between w-full md:w-[320px] lg:w-[440px] shrink-0 min-h-[280px] md:min-h-[320px] lg:h-[440px]">
                  <div className="flex items-start justify-between">
                    <TalaTag color="black" size="XS">Step {String(step.step).padStart(2, "0")}</TalaTag>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] lg:text-[42px] lg:leading-[40px] text-tala-100">
                      {step.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[24px] text-tala-70">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Image panel */}
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl flex-1 min-h-[200px] md:min-h-[280px] lg:h-[440px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(104,81,255,0.06),transparent_60%)]" />
                  <span className="absolute bottom-4 right-8 font-headline font-bold text-[120px] lg:text-[200px] leading-none text-tala-100/[0.04] select-none pointer-events-none">
                    {step.step}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FAQ ═══ */}
      <section className="bg-tala-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[56px] lg:leading-[54px] text-tala-100 mb-8 lg:mb-10">
            FAQs
          </h2>
          <TalaFaqGroup items={faqItems} />
        </div>
      </section>
    </TalaPageLayout>
  );
}
