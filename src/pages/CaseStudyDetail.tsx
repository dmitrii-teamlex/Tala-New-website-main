import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  TalaPageLayout,
  TalaCaseCover,
  TalaCaseSidebar,
  TalaTestimonialCard,
  TalaPersonBadge,
  TalaStepCard,
  TalaStatCard,
  TalaTag,
} from "@/components/tala";

/* ── Case study content ── */
const cs = {
  logo: "Alps2Alps",
  tags: ["AI", "E-commerce", "SEO", "SaaS", "Travel"],
  title: "Increased Organic Traffic for Alps2Alps by 45% with Teamlex",
  about: {
    title: "About the client",
    description:
      "Alps2Alps is a European-based transfer service providing airport and resort transfers across the Alps, including France, Switzerland, Italy, and Austria.",
    bullets: [
      "Operating in a highly competitive seasonal market",
      "Custom demand from thousands of routes to Alpine resorts",
      "Need to match all variations: just transfers, ski transfers, taxi, shuttle",
      "Visibility in quickly evolving search and AI channels",
    ],
    metadata: [
      { label: "Industry", value: "Transfer service" },
      { label: "Location", value: "Global" },
      { label: "Founded", value: "2012" },
      { label: "Employees", value: "50-100" },
    ],
  },
  testimonial: {
    quote:
      "Tala exceeded expectations by boosting our organic traffic 45% during our site redesign. Their proactive input exceeded what SEO teams usually do for our success. This partnership has been invaluable for our growth.",
    authorName: "Emilie Rutter",
    authorRole: "Co-founder and CEO / Alps2Alps",
    authorImage: "/images/olga-andrienko.png",
  },
  challenge: {
    intro:
      "Before working with Tala, Alps2Alps relied heavily on paid ads to generate acquisitions. In search terms, they were spending big on ads while missing out on free, high-converting organic traffic.",
    points: [
      "Organic visibility was limited",
      "The website covered only a fraction of potential keywords",
      'Key pages in important search terms (e.g., "Transfers to Zermatt", "Meribel") were underperforming',
    ],
  },
  solution: {
    description:
      "The approach of Programmatic SEO Agent that was used with a search-first execution model, building content that directly answers real traveler queries at scale.",
    capabilities: [
      {
        title: "Keyword research & clustering",
        description:
          "Thousands of mention related queries were grouped into clusters based on intent, location, and competitive difficulty.",
      },
      {
        title: "Page generation at scale",
        description:
          "The system created over 10,000 programmatic SEO-optimized landing pages, each for a specific alpine route or transfer query.",
      },
      {
        title: "Smart internal linking & metadata",
        description:
          "Pages were connected through an optimized internal linking and navigation with the sitemap strategy.",
      },
      {
        title: "AI search optimization",
        description:
          "Content was AI-tuned to rank in AI-powered search engines (Google AI overviews, ChatGPT, Perplexity, etc.).",
      },
    ],
  },
  howWeDidIt: [
    {
      num: 1,
      title: "Research & data collection",
      bullets: [
        "Analyzed the market and mapped competitor strategies.",
        'Collected thousands of transfer-related search queries (e.g., "Geneva \u2013 Courchevel transfer", "Innsbruck \u2013 S\u00f6lden taxi").',
        "Grouped them into clusters by destinations and service types (family trips, group transfers, VIP, etc.).",
      ],
      impact: "Clear visibility into high-demand topics and competitor gaps.",
    },
    {
      num: 2,
      title: "Clustering & opportunity mapping",
      bullets: [
        "Organized all queries into semantic groups based on routes and user intent.",
        "Prioritized clusters with the strongest conversion potential.",
        "Defined content templates tailored to each route and service type.",
      ],
      impact:
        "A roadmap for scalable SEO content, focused on real business value.",
    },
    {
      num: 3,
      title: "Launching the Programmatic SEO Agent",
      bullets: [
        "Automated creation of page templates (titles, content, internal linking).",
        "Generated 10,000+ unique landing pages, each optimized for a specific route or query.",
        "Implemented smart internal linking and metadata for faster indexing.",
      ],
      impact:
        "Thousands of long-tail queries covered in weeks, not years of manual work.",
    },
    {
      num: 4,
      title: "Optimizing for AI search",
      bullets: [
        "Structured content to rank in Google results and AI overviews (ChatGPT, Gemini).",
        "Enriched pages with structured data readable by search engines and AI systems.",
        "Future-proofed visibility as AI-driven search becomes mainstream.",
      ],
      impact:
        "Alps2Alps started appearing as a trusted answer in both search engines and AI platforms.",
    },
  ],
  timelineSteps: [
    "Research & data collection",
    "Clustering & opportunity mapping",
    "Content generation pipeline",
    "Scaling to a production level",
    "Launching the Programmatic SEO Agent",
    "Optimizing our AI models",
    "Background reporting, ensuring quality through automated checks",
  ],
  results: [
    {
      value: "10,000+",
      label: "Landing pages generated",
      description:
        "Thousands of SEO-optimized pages created, covering virtually all alpine transfer routes and service variations.",
    },
    {
      value: "2X",
      label: "Revenue growth",
      description:
        "Organic traffic doubled in just 6 months, driving a doubling of bookings and revenue.",
    },
    {
      value: "+100%",
      label: "Search visibility",
      description:
        "The entire expanded presence across Google led to 100% increase in organic visibility.",
    },
    {
      value: "+3,000",
      label: "New keywords",
      description:
        "Thousands of high-intent positions that were previously not ranking now appear on page 1.",
    },
  ],
};

export default function CaseStudyDetail() {
  return (
    <TalaPageLayout className="!bg-tala-10">
      {/* ═══ BACK BUTTON ═══ */}
      <section className="pt-8">
        <div className="max-w-[1360px] mx-auto px-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center group-hover:bg-tala-100 group-hover:text-tala-0 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-headline font-medium text-body-l text-tala-90">
              Back to cases
            </span>
          </Link>
        </div>
      </section>

      {/* ═══ CASE COVER ═══ */}
      <section className="pt-6 pb-20">
        <div className="max-w-[1360px] mx-auto px-10">
          <TalaCaseCover
            logo={
              <span className="font-headline font-bold text-[22px] text-tala-90">
                {cs.logo}
              </span>
            }
            tags={cs.tags}
            title={cs.title}
          />
        </div>
      </section>

      {/* ═══ SIDEBAR (430px) + CONTENT (flex-1) ═══ */}
      <section className="pb-20">
        <div className="max-w-[1360px] mx-auto px-10">
          <div className="flex gap-10 items-start">
            {/* ── LEFT SIDEBAR ── */}
            <div className="sticky top-[100px]">
              <TalaCaseSidebar
                title={cs.about.title}
                description={cs.about.description}
                bullets={cs.about.bullets}
                metadata={cs.about.metadata}
              />
            </div>

            {/* ── RIGHT CONTENT — 80px after testimonial, 64px between blocks ── */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Testimonial */}
              <TalaTestimonialCard
                variant="quote-block"
                quote={cs.testimonial.quote}
                authorName={cs.testimonial.authorName}
                authorRole={cs.testimonial.authorRole}
                authorImage={cs.testimonial.authorImage}
              />

              {/* The challenge — heading on gray, intro+points INSIDE white card */}
              <div className="mt-20 flex flex-col gap-6">
                <h2 className="font-headline font-bold text-h4 text-tala-100">
                  The challenge
                </h2>
                <div className="bg-tala-0 rounded-3xl p-8 lg:p-10 flex flex-col gap-8">
                  <p className="text-body-l text-tala-70 font-body">
                    {cs.challenge.intro}
                  </p>
                  <div className="flex flex-col gap-3">
                    {cs.challenge.points.map((point, i) => (
                      <div
                        key={i}
                        className="bg-tala-10 rounded-3xl px-8 py-6 flex gap-4 items-start"
                      >
                        <div className="w-8 h-8 rounded-full bg-tala-0 flex items-center justify-center shrink-0">
                          <span className="font-body text-[14px] text-tala-50">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-body-m text-tala-70 font-body pt-1">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* The solution — heading on gray, description+cards INSIDE white card */}
              <div className="mt-16 flex flex-col gap-6">
                <h2 className="font-headline font-bold text-h4 text-tala-100">
                  The solution —{" "}
                  <span className="text-tala-50">
                    Programmatic SEO Agent
                  </span>
                </h2>
                <div className="bg-tala-0 rounded-3xl p-8 lg:p-10 flex flex-col gap-8">
                  <p className="text-body-l text-tala-70 font-body">
                    {cs.solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {cs.solution.capabilities.map((cap) => (
                      <div
                        key={cap.title}
                        className="bg-tala-10 rounded-3xl p-8 flex flex-col gap-4"
                      >
                        <h4 className="font-headline font-bold text-body-l text-tala-100">
                          {cap.title}
                        </h4>
                        <p className="text-body-s text-tala-70 font-body">
                          {cap.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* How we did it — 64px gap */}
              <div className="mt-16 flex flex-col gap-4">
                <h2 className="font-headline font-bold text-h4 text-tala-100 mb-4">
                  How we did it
                </h2>

                {/* Timeline */}
                <div className="bg-tala-0 rounded-3xl p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-body text-body-xs text-tala-50">Time</span>
                    <div className="flex gap-6">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <div key={n} className="w-1.5 h-1.5 rounded-full bg-tala-90" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {cs.timelineSteps.map((step, i) => {
                      const widths = ["w-[30%]", "w-[35%]", "w-[25%]", "w-[20%]", "w-[40%]", "w-[30%]", "w-[50%]"];
                      const offsets = ["ml-0", "ml-[10%]", "ml-[20%]", "ml-[30%]", "ml-[35%]", "ml-[50%]", "ml-[45%]"];
                      const isDark = i === 4;
                      return (
                        <div key={i} className={`${isDark ? "bg-tala-100" : "bg-tala-10"} rounded-pill h-8 flex items-center px-4 ${widths[i]} ${offsets[i]}`}>
                          <span className={`font-body text-[12px] ${isDark ? "text-tala-0" : "text-tala-70"} truncate`}>{step}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step cards — 2x2 grid with proper gap */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {cs.howWeDidIt.map((step) => (
                    <TalaStepCard
                      key={step.num}
                      step={step.num}
                      title={step.title}
                      bullets={step.bullets}
                      impact={step.impact}
                    />
                  ))}
                </div>
              </div>

              {/* Results — 64px gap */}
              <div className="mt-16 flex flex-col gap-4">
                <h2 className="font-headline font-bold text-h4 text-tala-100 mb-4">
                  Results
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {cs.results.map((stat) => (
                    <TalaStatCard
                      key={stat.value}
                      stat={stat.value}
                      label={stat.label}
                      description={stat.description}
                    />
                  ))}
                </div>
              </div>

              {/* Case preview */}
              <div className="mt-16 bg-tala-100 rounded-3xl p-10 flex items-center justify-center min-h-[400px]">
                <p className="text-body-l text-tala-40 font-body">
                  Case study preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TalaPageLayout>
  );
}
