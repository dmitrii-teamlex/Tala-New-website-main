import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import {
  TalaPageLayout,
  TalaButton,
  TalaFaqGroup,
} from "@/components/tala";

const CAL_LINK = "https://cal.com/dmitrii-digital/30min";

function BookCallModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-tala-100/60" onClick={onClose} />
      <div className="relative bg-tala-0 rounded-[24px] md:rounded-[32px] w-full max-w-[1100px] h-[90vh] md:h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-tala-10 hover:bg-tala-20 transition-colors flex items-center justify-center text-tala-100"
        >
          <X size={20} />
        </button>
        <iframe
          src={CAL_LINK}
          title="Book a call with Tala"
          className="flex-1 w-full border-0"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  );
}

const selfServiceFeatures = [
  "Full platform access for the whole team — unlimited seats",
  "Unlimited competitor monitoring",
  "Unlimited search queries across libraries",
  "AI analysis — up to 10 reports per month",
  "Content & creative generation (from $10 per generation)",
  "All engines included: Paid, Viral, Traffic",
];

const doneForYouFeatures = [
  "Everything in Self service",
  "Dedicated team — creators, SEO specialists, content managers",
  "Full cycle: research → strategy → production → launch → optimization",
  "Coverage across paid, social, and SEO channels",
  "Performance guarantee",
  "Regular reports and strategic sessions",
];

const comparisonRows: Array<{
  feature: string;
  self: string | boolean;
  dfy: string | boolean;
}> = [
  { feature: "Platform access for the team", self: "Unlimited", dfy: "Unlimited" },
  { feature: "Competitor monitoring", self: "Unlimited", dfy: "Unlimited" },
  { feature: "AI analysis reports", self: "Up to 10 / mo", dfy: "Unlimited" },
  { feature: "Content & creative generation", self: "From $10 / gen", dfy: "Done for you" },
  { feature: "Dedicated marketing team", self: false, dfy: true },
  { feature: "End-to-end campaign management", self: false, dfy: true },
  { feature: "Performance guarantee", self: false, dfy: true },
  { feature: "Strategic sessions", self: false, dfy: true },
];

const pricingFaqs = [
  {
    question: "What's the difference between the two plans?",
    answer:
      "Self service gives you full access to the Tala platform — your team uses our tools to research, generate, and run campaigns. Done for you means our team takes over end-to-end: research, strategy, content production, launch, and optimization. You pick the level of involvement that fits your team.",
  },
  {
    question: "Can I switch between plans later?",
    answer:
      "Yes. You can move from Self service to Done for you at any time, and vice versa. We'll prorate the difference and migrate your workspace and existing campaigns automatically.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "Self service is month-to-month with no commitment — cancel any time. Done for you is structured around 3-month engagements so the team has enough runway to drive measurable results.",
  },
  {
    question: "What does the Done for you performance guarantee cover?",
    answer:
      "We commit to clear performance KPIs at the start of every engagement (typically organic traffic, ROAS, or qualified leads). If we don't hit them within the agreed timeframe, we extend the engagement at no cost until we do.",
  },
  {
    question: "Do you offer custom plans for larger teams?",
    answer:
      "Yes. If you need higher report volumes, custom integrations, or a fully white-labeled engagement, get in touch and we'll put together a tailored plan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH, SEPA, and wire transfers. Annual plans are available with a discount on request.",
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  const [bookCallOpen, setBookCallOpen] = useState(false);

  return (
    <TalaPageLayout className="!bg-tala-10">
      {/* ═══ HERO ═══ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 text-center">
          <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-h3 text-tala-100 max-w-[900px] mx-auto">
            Simple pricing for growing teams
          </h1>
          <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-50 max-w-[700px] mx-auto mt-4 md:mt-5">
            Run Tala yourself with full platform access, or hand it over to our
            team and let us drive growth end-to-end.
          </p>
        </div>
      </section>

      {/* ═══ PRICING CARDS ═══ */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Self service */}
            <div className="bg-tala-0 border border-tala-20 rounded-[40px] p-8 lg:p-10 flex flex-col gap-8 mr-[-0.5px] mb-[-0.5px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p className="font-headline font-bold text-[32px] leading-[32px] md:text-h4 text-tala-100">
                    Self service
                  </p>
                  <p className="font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-50 min-h-[40px]">
                    You use the full Tala platform — your team runs research, generation,
                    and campaigns themselves.
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <p className="font-body text-[18px] leading-[20px] text-tala-50 pb-3">from</p>
                  <p className="font-headline font-bold text-[48px] leading-[48px] lg:text-[56px] lg:leading-[54px] text-tala-100">$250</p>
                  <p className="font-body text-[20px] leading-[24px] text-tala-50 pb-1">/month</p>
                </div>
              </div>
              <div className="flex-1 border-t border-tala-20 pt-6 flex flex-col gap-4">
                <p className="font-headline font-medium text-[18px] leading-[20px] text-tala-80">
                  What's included
                </p>
                <div className="flex flex-col gap-3">
                  {selfServiceFeatures.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-tala-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="font-body text-[16px] leading-[18px] text-tala-70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <TalaButton color="black" size="L" onClick={() => navigate("/get-started")} className="w-full">
                Get started
              </TalaButton>
            </div>

            {/* Marketing Done for you */}
            <div className="bg-tala-100 border border-tala-100 rounded-[40px] p-8 lg:p-10 flex flex-col gap-8 mr-[-0.5px] mb-[-0.5px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-headline font-bold text-[32px] leading-[32px] md:text-h4 text-tala-0">
                      Done for you
                    </p>
                    <span className="bg-tala-brand text-tala-0 font-body text-[14px] leading-[16px] tracking-[-0.5px] px-3 py-2 rounded-pill whitespace-nowrap">
                      Recommended
                    </span>
                  </div>
                  <p className="font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-40 min-h-[40px]">
                    Tala becomes your marketing team — we handle research, strategy, content,
                    launch, and optimization.
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <p className="font-body text-[18px] leading-[20px] text-tala-40 pb-3">from</p>
                  <p className="font-headline font-bold text-[48px] leading-[48px] lg:text-[56px] lg:leading-[54px] text-tala-0">$1,000</p>
                  <p className="font-body text-[20px] leading-[24px] text-tala-40 pb-1">/month</p>
                </div>
              </div>
              <div className="flex-1 border-t border-tala-80 pt-6 flex flex-col gap-4">
                <p className="font-headline font-medium text-[18px] leading-[20px] text-tala-20">
                  What's included
                </p>
                <div className="flex flex-col gap-3">
                  {doneForYouFeatures.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-tala-0 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#1F2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="font-body text-[16px] leading-[18px] text-tala-30">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <TalaButton color="white" size="L" onClick={() => navigate("/contact")} className="w-full">
                Talk to us
              </TalaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] text-tala-100 mb-8 lg:mb-10">
            Compare plans
          </h2>
          <div className="bg-tala-0 rounded-[32px] md:rounded-[40px] overflow-hidden border border-tala-20">
            {/* Header row */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] border-b border-tala-20">
              <div className="py-6 md:py-10 pl-6 md:pl-10 pr-4 md:pr-6 font-headline font-medium text-[16px] md:text-[18px] text-tala-60">
                Feature
              </div>
              <div className="py-6 md:py-10 px-4 md:px-6 font-headline font-medium text-[16px] md:text-[18px] text-tala-100 text-center">
                Self service
              </div>
              <div className="py-6 md:py-10 pl-4 md:pl-6 pr-6 md:pr-10 font-headline font-medium text-[16px] md:text-[18px] text-tala-100 text-center bg-tala-10">
                Done for you
              </div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr] ${
                  i < comparisonRows.length - 1 ? "border-b border-tala-10" : ""
                }`}
              >
                <div className="py-6 md:py-10 pl-6 md:pl-10 pr-4 md:pr-6 font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] text-tala-80">
                  {row.feature}
                </div>
                <div className="py-6 md:py-10 px-4 md:px-6 font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] text-tala-70 text-center flex items-center justify-center">
                  {typeof row.self === "boolean" ? (
                    row.self ? (
                      <div className="w-5 h-5 rounded-full bg-tala-100 flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-tala-10 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 1L7 7M7 1L1 7" stroke="#A9AAB6" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    )
                  ) : (
                    row.self
                  )}
                </div>
                <div className="py-6 md:py-10 pl-4 md:pl-6 pr-6 md:pr-10 font-body text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] text-tala-70 text-center flex items-center justify-center bg-tala-10/40">
                  {typeof row.dfy === "boolean" ? (
                    row.dfy ? (
                      <div className="w-5 h-5 rounded-full bg-tala-100 flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-tala-10 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 1L7 7M7 1L1 7" stroke="#A9AAB6" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    )
                  ) : (
                    row.dfy
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NOT SURE BLOCK ═══ */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="bg-tala-100 rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-[80px] flex flex-col items-center text-center gap-6 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-4 max-w-[800px]">
              <h3 className="font-headline font-bold text-[28px] leading-[30px] md:text-[40px] md:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-0">
                Not sure which plan is right for you?
              </h3>
              <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[26px] text-tala-40 max-w-[640px] mx-auto">
                Book a 30-minute call. We'll look at your goals and team setup, and tell
                you which plan fits — no pressure.
              </p>
            </div>
            <TalaButton color="white" size="L" onClick={() => setBookCallOpen(true)}>
              Book a call
            </TalaButton>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[36px] lg:text-[42px] lg:leading-[40px] text-tala-100 mb-8 lg:mb-10">
            Pricing FAQs
          </h2>
          <TalaFaqGroup items={pricingFaqs} />
        </div>
      </section>

      <BookCallModal open={bookCallOpen} onClose={() => setBookCallOpen(false)} />
    </TalaPageLayout>
  );
}
