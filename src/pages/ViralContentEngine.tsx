import { useNavigate, Link } from "react-router-dom";
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaFaqGroup,
} from "@/components/tala";

/* ── Steps ── */
const steps = [
  { step: 1, title: "Trend-watching", description: "You see what's trending across your industry so you can plan content that hits at the right moment." },
  { step: 2, title: "Viral index scoring", description: "You find out which topics or formats are worth posting before spending time on them." },
  { step: 3, title: "Content creation", description: "You get ready-to-post videos, images, or carousels with viral potential from your agent." },
  { step: 4, title: "Smart publishing", description: "You post when your audience is most active so more people actually see your content." },
];

/* ── FAQs — matched to Figma ── */
const faqItems = [
  { question: "What is the Viral Content Agent?", answer: "The Viral Media Agent is an AI system that automates trend monitoring, competitor analysis, and viral content creation. It tracks what's gaining traction across platforms (TikTok, YouTube Shorts, Instagram, Telegram), adapts winning formats to your brand, and generates posts, carousels, or videos ready to publish." },
  { question: "How does the Trend-Watching feature work?", answer: "The Trend-Watching module scans hundreds of competitor accounts and public data sources daily. It identifies trending topics, formats, and hooks — then recommends or automatically generates similar high-performing assets tailored to your niche and tone." },
  { question: "Which platforms are supported?", answer: "TikTok, Instagram, LinkedIn, YouTube Shorts, and Telegram (channels & groups)." },
  { question: "How accurate are the AI insights?", answer: "The system combines real-time data (views, engagement velocity, virality coefficients) with semantic analysis to score each trend's growth potential. Each idea receives a \"Viral Index\" — a proprietary score used to prioritize what's most likely to perform next." },
  { question: "What tools power the Viral Content Engine?", answer: "The Engine combines trend analysis (Perplexity, Gemini, ChatGPT-5), creation tools (VEO 3, Sora, Runway ML), and automation platforms (N8N, Meta APIs) — all integrated into a single workflow." },
  { question: "Can the agent create content automatically?", answer: "Yes. The Viral Media Agent can repurpose existing assets (blogs, webinars, videos) into short-form posts, generate visuals, captions, or scripts aligned with your brand voice, and schedule or auto-publish at the optimal engagement time. This reduces production time by up to 80-90% while maintaining consistent output." },
  { question: "How is this different from traditional social media tools?", answer: "Traditional tools show you what's performing — we act on it. The Viral Media Agent detects trends early, generates branded content, and distributes it automatically, combining AI's scale with your strategic control." },
  { question: "What results can I expect?", answer: "Most brands see 2-3x faster content output, 60-80% lower production costs, consistent visibility growth across social and search, and lower CAC via organic reach instead of paid ads." },
  { question: "Does it support multilingual or regional campaigns?", answer: "Yes. The system supports English, Arabic, and Russian markets. Local trend detection ensures your content fits both global and regional audiences." },
  { question: "Who is it for?", answer: "Best suited for brands with active or growing social channels, marketing teams seeking consistent engagement, and founders who want to stay ahead of market trends without manual research." },
];

export default function ViralContentEngine() {
  const navigate = useNavigate();

  return (
    <TalaPageLayout>
      {/* ═══ 1. HERO — bg-tala-10 rounded container, 640px height ═══ */}
      <section className="bg-tala-0 px-5 lg:px-10 pt-0">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-tala-10 rounded-3xl lg:rounded-4xl flex flex-col items-center pt-5 px-5 min-h-[400px] md:min-h-[520px] lg:min-h-[640px]">
            {/* Navbar is handled by TalaPageLayout, hero content below */}
            <div className="flex-1 flex flex-col items-center justify-center px-5 md:px-10 lg:px-[120px] py-5">
              <div className="flex flex-col items-center gap-8 lg:gap-10 text-center">
                <div className="flex flex-col gap-4 items-center text-center">
                  <h1 className="font-headline font-bold text-[36px] leading-[36px] md:text-[56px] md:leading-[54px] lg:text-[80px] lg:leading-[76px] text-tala-100">
                    Turn trends into traffic, engagement, and growth
                  </h1>
                  <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-70 max-w-[600px]">
                    Predict what will perform, create fast, and publish at the peak of attention.
                  </p>
                </div>
                <TalaButton color="black" size="L" onClick={() => navigate("/get-started")}>
                  Get started
                </TalaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. BRAND LOGOS — horizontal scroll with logo images ═══ */}
      <section className="bg-tala-0 py-8 md:py-10 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-nowrap overflow-x-auto scrollbar-hide">
            {["NBIZ", "NEFISH", "Rylana", "Maestro", "Live TrueCure", "PRAXINIERT", "Gaze"].map((name) => (
              <span key={name} className="font-headline font-bold text-[16px] md:text-[20px] lg:text-[22px] text-tala-80 opacity-40 shrink-0 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. SOCIAL PROOF — Figma layout: person card + quote card + stat cards ═══ */}
      <section className="bg-tala-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[400px]">
            {/* Left: Person card + Testimonial quote card */}
            <div className="flex flex-col md:flex-row gap-0 items-stretch">
              {/* Person card */}
              <div className="bg-tala-0 border border-tala-20 rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col items-center justify-between shrink-0 w-full md:w-[240px] lg:w-[318px] min-h-[280px] lg:min-h-[400px]">
                <div className="w-full aspect-square rounded-3xl bg-tala-10 overflow-hidden border border-tala-20">
                  <img src="/images/olga-andrienko.png" alt="Simon Semochkin" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 items-center text-center mt-4">
                  <p className="font-headline font-medium text-[20px] lg:text-h5 text-tala-100">Simon Semochkin</p>
                  <p className="font-body text-[14px] text-tala-60">Head of Marketing / Maestra</p>
                </div>
              </div>

              {/* Testimonial quote card */}
              <div className="bg-tala-0 border border-tala-20 rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-between w-full md:w-[420px] lg:w-[590px] min-h-[280px] lg:min-h-[400px]">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Logo placeholder */}
                    <img src="/images/maestra-logo.svg" alt="Maestra" className="h-8 opacity-80" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  </div>
                  <Link to="/case-studies" className="inline-flex">
                    <TalaButton color="black" size="S">Read case</TalaButton>
                  </Link>
                </div>
                <p className="font-body text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[28px] text-tala-60">
                  <span>"Tala</span>
                  <span>{` helped us spot where our time was wasted. Instead of hiring more people, we set up automated workflows. `}</span>
                  <span className="text-tala-100">This cut about 30% of routine tasks</span>
                  <span>{` and made our marketing and sales team work several times faster. Now we focus on growth and scaling in the US market — not on operations."`}</span>
                </p>
              </div>
            </div>

            {/* Right: Stat cards stacked */}
            <div className="flex flex-row lg:flex-col gap-0 flex-1">
              <div className="flex-1 bg-tala-0 border border-tala-20 rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-end min-h-[180px] lg:min-h-[200px]">
                <div className="flex flex-col gap-1">
                  <p className="font-headline font-bold text-[32px] leading-[32px] md:text-[42px] md:leading-[40px] lg:text-[60px] lg:leading-[54px] text-tala-100">2-3X</p>
                  <p className="font-body text-[16px] lg:text-[24px] lg:leading-[28px] text-tala-70">faster content production</p>
                </div>
              </div>
              <div className="flex-1 bg-tala-0 border border-tala-20 rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-end min-h-[180px] lg:min-h-[200px]">
                <div className="flex flex-col gap-1">
                  <p className="font-headline font-bold text-[32px] leading-[32px] md:text-[42px] md:leading-[40px] lg:text-[60px] lg:leading-[54px] text-tala-100">80-90%</p>
                  <p className="font-body text-[16px] lg:text-[24px] lg:leading-[28px] text-tala-70">time saved on creative research and editing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. PROBLEM — Dark card with text left + image area right ═══ */}
      <section className="bg-tala-0 py-10 md:py-14 lg:py-[60px]">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-3xl lg:rounded-4xl overflow-hidden flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 md:p-10 lg:p-10 flex flex-col justify-between min-h-[240px] lg:min-h-[318px]">
              <p className="font-headline font-bold text-h4 text-tala-50 mb-auto">
                The problem
              </p>
              <p className="font-body text-[20px] leading-[26px] md:text-[26px] md:leading-[30px] lg:text-[32px] lg:leading-[34px] lg:tracking-[-0.32px] text-tala-10 mt-6 lg:mt-0">
                Most brands react too late. They join trends after they peak, when the audience has already moved on and visibility is gone.
              </p>
            </div>
            {/* Image placeholder area — Figma: 318x318 square */}
            <div className="hidden md:block w-[240px] lg:w-[318px] shrink-0" />
          </div>
        </div>
      </section>

      {/* ═══ 5. STEPS — centered heading + step rows (440x440 text + flex-1 image) ═══ */}
      <section className="bg-tala-0 py-10 md:py-14 lg:py-[60px]">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-medium text-[18px] leading-[22px] md:text-[22px] md:leading-[24px] lg:text-h5 text-tala-50 text-center mb-8 lg:mb-10">
            An AI system that doesn't just watch trends, it turns them into results.
          </h2>

          <div className="flex flex-col gap-5 lg:gap-10">
            {steps.map((step) => (
              <div key={step.step} className="flex flex-col md:flex-row gap-0 items-stretch">
                {/* Text panel — Figma: bg-tala-10 rounded-[60px] p-[40px] 440x440 */}
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col justify-between w-full md:w-[320px] lg:w-[440px] shrink-0 min-h-[280px] md:min-h-[320px] lg:h-[440px]">
                  <div className="flex items-start justify-between">
                    <TalaTag color="black" size="XS">Step {step.step}</TalaTag>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-headline font-bold text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] lg:text-h4 text-tala-100">
                      {step.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[24px] text-tala-70">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Image panel — Figma: bg-tala-10 rounded-[60px] flex-1 h-[440px] */}
                <div className="bg-tala-10 rounded-3xl md:rounded-4xl flex-1 min-h-[200px] md:min-h-[280px] lg:h-[440px]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FAQ — Figma: H2 (60px) title, py-80 ═══ */}
      <section className="bg-tala-0 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-[32px] leading-[32px] md:text-[42px] md:leading-[40px] lg:text-[60px] lg:leading-[54px] text-tala-100 mb-8 lg:mb-10">
            FAQs
          </h2>
          <TalaFaqGroup items={faqItems} />
        </div>
      </section>
    </TalaPageLayout>
  );
}
