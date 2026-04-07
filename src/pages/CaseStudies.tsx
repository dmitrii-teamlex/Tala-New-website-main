import { Link } from "react-router-dom";
import { TalaPageLayout, TalaButton, TalaCaseCard } from "@/components/tala";

/* ── Case study data ── */
const caseStudies = [
  {
    name: "Alps2Alps",
    slug: "alps2alps",
    tags: ["SEO", "E-commerce", "AI"],
    statLabel: "reached",
    statValue: "500K\u20132.5M",
    statUnit: "people organically",
    description:
      "Discover how Teamlex built two fully automated content ecosystems for Social Discovery Group, reaching 2.5M+ viewers with zero manual effort.",
  },
  {
    name: "Maestra",
    slug: "maestra",
    tags: ["SaaS", "AI", "Automation"],
    statLabel: "cut",
    statValue: "30%",
    statUnit: "of routine tasks",
    description:
      "How Maestra set up automated workflows that made their marketing and sales team work several times faster \u2014 without hiring.",
  },
  {
    name: "Qase",
    slug: "qase",
    tags: ["SaaS", "SEO", "Content"],
    statLabel: "grew",
    statValue: "85K+",
    statUnit: "monthly organic visitors",
    description:
      "How Qase achieved 85K+ monthly organic visitors by deploying an AI-powered content strategy across their blog and resource hub.",
  },
  {
    name: "Lev Haolam",
    slug: "lev-haolam",
    tags: ["E-commerce", "ROI", "Paid"],
    statLabel: "generated",
    statValue: "$220K+",
    statUnit: "additional revenue",
    description:
      "How Lev Haolam generated $220K+ in additional revenue through AI-driven ad creatives and audience targeting.",
  },
  {
    name: "DEIZ",
    slug: "deiz",
    tags: ["FinTech", "SEO", "AI"],
    statLabel: "achieved",
    statValue: "+312%",
    statUnit: "organic traffic growth",
    description:
      "How DEIZ achieved 312% organic traffic growth in 6 months by combining AI content agents with programmatic SEO.",
  },
  {
    name: "flylane",
    slug: "flylane",
    tags: ["Apps", "Content", "AI"],
    statLabel: "reached",
    statValue: "~75%",
    statUnit: "viral video rate",
    description:
      "How flylane's AI-generated content consistently hits viral status across TikTok and Instagram Reels.",
  },
  {
    name: "Axevil",
    slug: "axevil",
    tags: ["Telecom", "Paid", "ROI"],
    statLabel: "improved",
    statValue: "+180%",
    statUnit: "engagement growth",
    description:
      "How Axevil Capital tripled engagement across paid channels using AI-optimized creatives and smart A/B testing.",
  },
  {
    name: "nmbr",
    slug: "nmbr",
    tags: ["SaaS", "SEO", "Analytics"],
    statLabel: "ranked",
    statValue: "30K+",
    statUnit: "keywords achieved",
    description:
      "How nmbr scaled from 200 to 30K+ keyword rankings using Tala's traffic growth engine and automated content workflows.",
  },
];

export default function CaseStudies() {
  return (
    <TalaPageLayout className="!bg-tala-10">
      {/* ═══ HERO ═══ */}
      <section className="py-20">
        <div className="max-w-[1360px] mx-auto px-10 text-center">
          <h1 className="font-headline font-bold text-h3 text-tala-100">
            Trusted by founders
            <br />
            from fast growing startups
          </h1>
        </div>
      </section>

      {/* ═══ CARDS GRID — 2-col, gap-1 (4px) ═══ */}
      <section className="pb-20">
        <div className="max-w-[1360px] mx-auto px-10">
          <div className="flex flex-col gap-10">
            {/* Grid rows */}
            <div className="flex flex-col gap-1">
              {[0, 2, 4, 6].map((startIdx) => (
                <div key={startIdx} className="flex gap-1">
                  {caseStudies.slice(startIdx, startIdx + 2).map((cs) => (
                    <Link
                      key={cs.slug}
                      to={`/case-studies/${cs.slug}`}
                      className="flex-1 min-w-0"
                    >
                      <TalaCaseCard
                        logo={
                          <span className="font-headline font-bold text-[22px] text-tala-90">
                            {cs.name}
                          </span>
                        }
                        tags={cs.tags}
                        statLabel={cs.statLabel}
                        statValue={cs.statValue}
                        statUnit={cs.statUnit}
                        description={cs.description}
                      />
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Load more button */}
            <div className="flex justify-center">
              <TalaButton color="stroke-black" size="L">
                Load more
              </TalaButton>
            </div>
          </div>
        </div>
      </section>
    </TalaPageLayout>
  );
}
