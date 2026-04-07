import { Link } from "react-router-dom";
import { TalaPageLayout, TalaFaqGroup, TalaTag } from "@/components/tala";

const services = [
  {
    title: "Viral content engine",
    description:
      "Mass production and distribution of short-form content across TikTok, YouTube or Meta powered by real-time trend insights.",
    href: "/viral-content-engine",
  },
  {
    title: "Paid growth engine",
    description:
      "Building intelligent assistants and automations that integrate with your tools and teams.",
    href: "/paid-growth-engine",
  },
  {
    title: "Traffic growth engine",
    description:
      "Automated creation of data-driven web content including articles, reviews and comparisons aligned with the latest search and audience trends.",
    href: "/traffic-growth-engine",
  },
];

const faqItems = [
  {
    question: "What does Tala actually do?",
    answer:
      "Tala builds custom AI agents and automation systems that help businesses grow faster. We combine AI workflows with expert strategy to scale marketing, SEO, and operations — without increasing headcount.",
  },
  {
    question: "How is Tala different from traditional agencies?",
    answer:
      "Traditional agencies sell hours. Tala delivers outcomes. Our AI agents handle 80-90% of execution — research, content generation, SEO, outreach — while human experts refine and oversee strategy. This means faster delivery, consistent quality, and measurable ROI.",
  },
  {
    question: "Is this a software or a service?",
    answer:
      "We're a hybrid model — part product, part service. You get ready-to-use AI systems (agents, automation, dashboards) plus strategic support from our team to make them work in your real environment. Think of us as your AI growth partner, not another tool.",
  },
  {
    question: "What types of businesses does Tala work with?",
    answer:
      "We work with growth-stage startups, SaaS platforms, and fintechs that want to scale through automation and AI.",
  },
  {
    question: "How do AI agents differ from workflow automation?",
    answer:
      "Workflow automation connects tools and automates fixed processes. AI agents think, adapt, and act on context. They make decisions autonomously, like spotting SEO opportunities, generating compliant content, or analyzing competitors in real time.",
  },
  {
    question:
      "Can Tala support compliance-heavy industries (like finance or accounting)?",
    answer:
      "Yes. For regulated sectors, we build compliance-aware AI agents with human review layers.",
  },
  {
    question: "Do your AI agents work in multiple languages?",
    answer:
      "Yes. Our systems support multilingual AI, including Arabic, English, and European languages. For Arabic markets, we include a brief human validation phase to maintain accuracy and tone.",
  },
  {
    question: "What is the AI LDRS Education Program?",
    answer:
      "The AI LDRS Education Program is our hands-on learning track for executives, marketers, and operators who want to master AI-driven growth. Participants learn how to build and manage AI agents tailored to their business goals, redesign workflows for automation and efficiency, and measure and scale results with real-world frameworks.",
  },
];

export default function About() {
  return (
    <TalaPageLayout>
      {/* ═══ HERO — Image left, white text card right ═══ */}
      <section className="py-10">
        <div className="max-w-[1360px] mx-auto px-10">
          <div className="flex gap-0 items-stretch">
            {/* Image placeholder */}
            <div className="w-[440px] shrink-0">
              <div className="bg-tala-20 rounded-[40px] w-full h-full min-h-[500px]" />
            </div>
            {/* Text card */}
            <div className="flex-1 bg-tala-0 rounded-[40px] p-10 flex flex-col gap-10 -ml-px">
              {/* Title */}
              <div className="flex gap-10 items-start">
                <div className="flex-1">
                  <h1 className="font-headline font-bold text-[60px] leading-[54px] text-tala-100">
                    We build AI systems that produce winning ad creatives{" "}
                    <span className="text-tala-60">
                      — at scale, on demand
                    </span>
                  </h1>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-tala-20" />

              {/* About us */}
              <div className="flex gap-16 items-start text-tala-60">
                <p className="font-headline font-medium text-h6 w-[140px] shrink-0">
                  About us
                </p>
                <div className="flex-1 font-body text-body-l">
                  <p className="mb-6">
                    Tala was built around a simple observation: creative
                    production is the biggest bottleneck in modern advertising.
                  </p>
                  <p className="mb-6">
                    Teams waste hours briefing designers, iterating on copy, and
                    manually adapting assets across formats and platforms. We
                    went through the same pain building campaigns for our own
                    clients — and instead of accepting it, we automated it.
                  </p>
                  <p>
                    Today, Tala gives marketing teams and agencies a system that
                    generates, tests, and scales ad creatives without the manual
                    grind.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-tala-20" />

              {/* What we do */}
              <div className="flex gap-16 items-start text-tala-60">
                <p className="font-headline font-medium text-h6 shrink-0">
                  What we do
                </p>
                <div className="flex-1 font-body text-body-l">
                  <p className="mb-6">
                    We help performance marketers, creative teams, and agencies
                    produce more — faster, cheaper, and without sacrificing
                    quality.
                  </p>
                  <p>
                    Tala connects your brand, offer, and audience data into an AI
                    pipeline that outputs ready-to-launch creatives across
                    formats and channels. No prompting guesswork. No
                    bottlenecks. Just a production system that runs while your
                    team focuses on strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE CARDS — 3 cards, gap-1 (4px tight grid) ═══ */}
      <section className="py-10">
        <div className="max-w-[1360px] mx-auto px-10">
          <div className="flex gap-1">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="flex-1 bg-tala-0 rounded-[40px] p-10 flex flex-col justify-between h-[337px] overflow-hidden group hover:bg-tala-10 transition-colors"
              >
                <h3 className="font-headline font-bold text-h4 text-tala-90">
                  {service.title}
                </h3>
                <p className="font-body text-body-xl text-tala-60">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VISION BANNER — Dark rounded card with tag ═══ */}
      <section className="py-10">
        <div className="max-w-[1360px] mx-auto px-10">
          <div className="bg-tala-100 rounded-4xl pt-10 pb-[60px] px-[120px] flex flex-col items-center gap-5">
            <TalaTag color="light-grey" size="S">
              Our Vision
            </TalaTag>
            <p className="font-headline font-bold text-h4 text-center max-w-[1080px]">
              <span className="text-tala-40">
                To become the leading force behind the next generation of{" "}
              </span>
              <span className="text-tala-10">AI-driven growth systems</span>
              <span className="text-tala-40"> — </span>
              <span className="text-tala-40">
                where businesses scale not by adding more people, but by adding
                more intelligence.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-tala-0 py-20 px-10">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="font-headline font-bold text-[60px] leading-[54px] text-tala-100 mb-10">
            FAQs
          </h2>
          <TalaFaqGroup items={faqItems} />
        </div>
      </section>
    </TalaPageLayout>
  );
}
