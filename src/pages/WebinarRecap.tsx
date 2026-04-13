import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  TalaPageLayout,
  TalaWebinarCard,
  type WebinarSpeaker,
} from "@/components/tala";

/* ═══════════════════════════════════════
   RECAP DATA
   ═══════════════════════════════════════ */

interface RecapSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface Recap {
  slug: string;
  date: string;
  time: string;
  title: string;
  description: string;
  speakers: WebinarSpeaker[];
  cover: string;
  intro: string;
  sections: RecapSection[];
  finalThoughts: string;
  writtenBy: string;
  publishedOn: string;
}

const dmitrii: WebinarSpeaker = {
  name: "Dmitrii Niarez",
  role: "Founder, Teamlex AI",
  photo: "/images/speaker-dmitrii.png",
};

const olga: WebinarSpeaker = {
  name: "Olga Andrienko",
  role: "ex-VP of Marketing, SEMrush",
  photo: "/images/author-olga.jpg",
};

const denis: WebinarSpeaker = {
  name: "Denis Smetnev",
  role: "Founder, Uforce (ex-Skyeng)",
  photo: "/images/speaker-denis.png",
};

export const recaps: Record<string, Recap> = {
  "ai-stack-for-engineering": {
    slug: "ai-stack-for-engineering",
    date: "24/09/2025",
    time: "6 PM CET",
    title: "AI Stack for Engineering: From Token to Business Benefits",
    description:
      "Learn how to optimize prompting, select the right agents, and integrate AI into your dev pipelines.",
    speakers: [dmitrii],
    cover: "/images/webinar-cover-1.svg",
    intro:
      "AI is reshaping how engineering teams build, ship, and maintain software. But between the hype and reality lies a very practical question — how do you turn a bundle of models, tokens, and prompts into something that pays back in real business outcomes? In this recap, Dmitrii Niarez walks through the AI stack his team uses across the full engineering pipeline, from selecting the right model to wiring agents into production workflows.",
    sections: [
      {
        id: "picking-the-right-model",
        heading: "Picking the right model for the job",
        paragraphs: [
          "Not every task needs a frontier model. The team splits workloads across three tiers: cheap and fast models for classification and routing, mid-range models for general reasoning and code, and premium models for deep refactors and architectural thinking. The cost difference is often 20–50x, and for most tasks users can't tell the difference.",
          "The practical rule: benchmark your own prompts on three models before committing. Real-world accuracy rarely lines up with published scores, and the only benchmark that matters is yours.",
        ],
      },
      {
        id: "prompting-as-engineering",
        heading: "Prompting as an engineering discipline",
        paragraphs: [
          "Prompts aren't throwaway strings — they are interfaces to probabilistic systems. The team treats prompts the way they treat SQL queries: versioned, tested, and reviewed. Every prompt change goes through an eval suite with a fixed test set, so regressions are caught before they hit production.",
        ],
        bullets: [
          "Keep a prompt library with owners and changelogs",
          "Run a golden-set eval on every prompt change",
          "Strip irrelevant context aggressively — shorter prompts are usually better",
        ],
      },
      {
        id: "agents-that-earn-their-seat",
        heading: "Agents that actually earn their seat",
        paragraphs: [
          "An \"agent\" should do something a human engineer would otherwise do — not replace a function call. The team breaks agents into narrow roles: one that reads a ticket and drafts a plan, one that writes the code, one that reviews it. Each one runs in a sandbox with scoped tools and strict output contracts.",
          "The biggest unlock isn't intelligence — it's observability. Every tool call, every model response, every retry is logged. When an agent misbehaves, the fix is usually obvious in the trace.",
        ],
      },
      {
        id: "integrating-into-dev-pipelines",
        heading: "Integrating AI into dev pipelines",
        paragraphs: [
          "The real value shows up when AI is woven into the pipeline that engineers already use. Pull request review, test generation, doc updates, and incident triage all benefit from AI when it runs in the same systems humans do. The team wires agents into CI, into the code host, and into the on-call rotation rather than building a separate \"AI dashboard\" nobody visits.",
        ],
      },
      {
        id: "measuring-business-impact",
        heading: "Measuring business impact (not just tokens)",
        paragraphs: [
          "Token costs are easy to measure. Business impact isn't. The team tracks three outcome metrics: cycle time from ticket to merged PR, review coverage (how many PRs get a substantive AI review), and escaped defects (bugs caught after merge). Those numbers are what leadership cares about, and they're what decides whether a given agent stays in the stack.",
        ],
      },
    ],
    finalThoughts:
      "AI in engineering is not about replacing developers — it's about removing the boring, repetitive friction between intent and shipped code. The teams that win aren't the ones with the biggest models; they're the ones with the sharpest feedback loops between prompts, agents, and business metrics. Start small, measure obsessively, and let the wins pull the rest of the stack forward.",
    writtenBy: "Dmitrii Niarez",
    publishedOn: "24 September 2025",
  },

  "ai-in-business-marketing-leaders": {
    slug: "ai-in-business-marketing-leaders",
    date: "17/06/2025",
    time: "6 PM CET",
    title: "AI in business: how marketing leaders turn automation into real impact",
    description:
      "Discover how companies are turning AI from a buzzword into a practical growth engine.",
    speakers: [dmitrii, olga],
    cover: "/images/webinar-cover-2.svg",
    intro:
      "Every marketing team is being told to \"use AI\". Few have a real answer to what that means in practice. In this session, Olga Andrienko (ex-VP of Marketing at SEMrush) joined Dmitrii Niarez to unpack what actually works — from the strategy conversations in the boardroom to the playbooks marketing ops teams are running every day. This recap distills the most useful parts.",
    sections: [
      {
        id: "from-tool-to-teammate",
        heading: "From tool to teammate: reframing AI in marketing",
        paragraphs: [
          "The teams getting real value don't treat AI as a tool to save a few minutes — they treat it as a teammate that owns outcomes. That framing changes how you onboard it, measure it, and improve it. Instead of \"AI writes a blog post\", the question becomes \"AI owns the first draft, the SEO brief, the distribution assets, and the reporting loop — and a human owns quality\".",
        ],
      },
      {
        id: "where-ai-actually-wins",
        heading: "Where AI actually wins in a marketing org",
        paragraphs: [
          "Olga shared the pattern she has seen across dozens of marketing teams: AI compounds where there's repetitive, high-volume, structured work. The three biggest wins:",
        ],
        bullets: [
          "Content operations — briefs, outlines, first drafts, localization, and repurposing",
          "Performance marketing — creative variants, audience hypotheses, and budget reallocation",
          "Customer insight — parsing reviews, calls, and surveys into clear positioning signals",
        ],
      },
      {
        id: "the-playbook-for-teams",
        heading: "The playbook for teams just getting started",
        paragraphs: [
          "The biggest mistake is going wide and shallow — rolling out a dozen pilots that never graduate. The more effective pattern: pick one workflow, wire AI into it end-to-end, instrument it, and let the results speak for themselves. Once one team sees the compound effect, the rest of the org copies the pattern without being forced.",
          "Olga's rule of thumb: a pilot is worth running if it produces a measurable business metric within 30 days. If it doesn't, kill it and try another angle.",
        ],
      },
      {
        id: "the-human-layer",
        heading: "The human layer: what still needs a person",
        paragraphs: [
          "Taste, narrative, and judgment calls on risk — those are the three places humans are still irreplaceable. Every automation should assume a human in the loop at exactly those moments, and should be ruthless about removing humans from everywhere else. The output is a leaner, sharper team that shows up for the parts of the job that actually require a person.",
        ],
      },
      {
        id: "impact-on-careers",
        heading: "Impact on marketing careers",
        paragraphs: [
          "Contrary to the fear narrative, marketers who lean into AI are becoming more valuable, not less. The ones who win are the ones who become the architects of their team's AI workflows — building prompts, wiring tools, and owning the outcomes. The \"prompt-fluent marketer\" is already a role in many companies, even if it isn't always on the org chart.",
        ],
      },
    ],
    finalThoughts:
      "AI is not replacing marketing leaders — it's amplifying the ones who treat it seriously. The shift is from managing headcount to designing systems. The teams that make that mental move early are pulling ahead in output, speed, and the quality of their decisions. The ones that don't are already falling behind on the metrics that matter most.",
    writtenBy: "Olga Andrienko",
    publishedOn: "17 June 2025",
  },

  "automation-to-advantage": {
    slug: "automation-to-advantage",
    date: "30/04/2025",
    time: "6 PM CET",
    title: "From automation to advantage: how AI reshapes marketing growth",
    description:
      "Discover how forward-thinking companies are re-engineering marketing workflows with AI systems that scale creativity, reach, and insight.",
    speakers: [dmitrii, denis],
    cover: "/images/webinar-cover-3.svg",
    intro:
      "Marketing automation used to mean a drip campaign and a scoring rule. Today it can mean autonomous systems that research, write, launch, measure, and iterate. Dmitrii Niarez and Denis Smetnev (founder of Uforce, ex-Skyeng) spent this session breaking down how they're using AI not to shave a few hours off the workflow, but to fundamentally reshape how growth happens.",
    sections: [
      {
        id: "the-shift-is-not-speed",
        heading: "The shift is not speed — it's compounding",
        paragraphs: [
          "The common pitch for AI is \"do the same thing faster\". Denis argues that's the least interesting outcome. The real shift is compounding: every campaign teaches the system, every creative informs the next, every insight raises the floor for the whole team. Teams that set up compounding workflows are growing exponentially while teams that just automate linear tasks are stuck.",
        ],
      },
      {
        id: "research-that-runs-itself",
        heading: "Research that runs itself",
        paragraphs: [
          "One of the biggest wins at Uforce: AI agents that run competitor analysis, market scanning, and customer feedback parsing in the background, continuously. The team wakes up to a fresh brief every morning on what changed in their market — without anyone having to ask.",
        ],
        bullets: [
          "Track every competitor ad, landing page, and positioning change automatically",
          "Parse customer calls and support tickets into positioning signals weekly",
          "Surface what's working in adjacent markets and why",
        ],
      },
      {
        id: "creative-at-the-speed-of-data",
        heading: "Creative at the speed of data",
        paragraphs: [
          "The traditional pipeline — brief, concept, design, review, launch — takes weeks. AI-native pipelines compress it to hours. Denis's team ships creative variants in the same shift where they spot the trend, test them the same day, and scale the winners before the trend is over. That speed is the actual advantage, not the cost savings.",
        ],
      },
      {
        id: "insight-loops",
        heading: "Closing the insight loop",
        paragraphs: [
          "Most teams collect data. Few close the loop back into action. Denis runs a weekly ritual where AI-produced insight briefs get routed directly to the owner of the relevant workflow, with a decision deadline attached. That single habit is what turns data into advantage — it removes the gap between \"we know\" and \"we changed\".",
        ],
      },
      {
        id: "the-team-shape",
        heading: "The new team shape",
        paragraphs: [
          "The growth teams Denis sees winning are smaller, more senior, and more technical than a traditional marketing org. Fewer executors, more systems designers. The role of the leader shifts from managing headcount to curating a library of agents and workflows that quietly do the work of what used to be a dozen people.",
        ],
      },
    ],
    finalThoughts:
      "AI isn't a competitive advantage because it saves time — it's a competitive advantage because it compounds. Every week, the teams who have invested in compounding workflows pull further ahead of the ones who didn't. The window to catch up is narrowing fast. The question is no longer whether to adopt AI in growth — it's whether you'll adopt it as a productivity tool or as the core of how your team operates.",
    writtenBy: "Denis Smetnev",
    publishedOn: "30 April 2025",
  },
};

/* ═══════════════════════════════════════
   ACTIVE SECTION TRACKING
   ═══════════════════════════════════════ */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* ═══════════════════════════════════════
   SOCIAL SHARE ICONS
   ═══════════════════════════════════════ */
function ShareIcons() {
  return (
    <div className="flex items-center gap-3">
      {[
        { label: "LinkedIn", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" },
        { label: "Instagram", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.12 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.14.56 2.9a5.86 5.86 0 0 0 1.38 2.13 5.86 5.86 0 0 0 2.13 1.38c.76.3 1.63.5 2.9.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.56a6.1 6.1 0 0 0 3.51-3.5c.3-.77.5-1.64.56-2.9.06-1.29.07-1.7.07-4.96s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.77-.3-1.64-.5-2.9-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" },
        { label: "Facebook", path: "M24 12a12 12 0 1 0-13.88 11.86v-8.39H7.08V12h3.04V9.35c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.96H15.83c-1.5 0-1.96.92-1.96 1.87V12h3.33l-.53 3.47h-2.8v8.39A12 12 0 0 0 24 12z" },
        { label: "X", path: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.57-6.63 7.57H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.25H4.3L17.6 20.65z" },
      ].map((icon) => (
        <button
          key={icon.label}
          aria-label={`Share on ${icon.label}`}
          className="w-9 h-9 rounded-full bg-tala-10 hover:bg-tala-20 transition-colors flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-tala-90">
            <path d={icon.path} />
          </svg>
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   RECAP PAGE
   ═══════════════════════════════════════ */
export default function WebinarRecap() {
  const { slug } = useParams<{ slug: string }>();
  const recap = slug ? recaps[slug] : undefined;
  const sectionIds = useMemo(() => {
    const base = recap?.sections.map((s) => s.id) ?? [];
    return [...base, "final-thoughts"];
  }, [recap]);
  const active = useActiveSection(sectionIds);

  if (!recap) {
    return <Navigate to="/webinars" replace />;
  }

  const handleTocClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <TalaPageLayout className="!bg-tala-10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 pb-12 md:pb-16 lg:pb-20">
        {/* ═══ BACK BUTTON ═══ */}
        <section className="pt-6 md:pt-8">
          <Link to="/webinars" className="inline-flex items-center gap-3 group">
            <div className="w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center group-hover:bg-tala-100 group-hover:text-tala-0 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-headline font-medium text-body-m md:text-body-l text-tala-90">
              Back to webinars
            </span>
          </Link>
        </section>

        {/* ═══ HEADER CARD ═══ */}
        <section className="pt-5 md:pt-6">
          <TalaWebinarCard
            variant="past"
            date={recap.date}
            time={recap.time}
            title={recap.title}
            description={recap.description}
            speakers={recap.speakers}
            cover={<img src={recap.cover} alt="" className="absolute inset-0 size-full object-cover" />}
            hideCta
          />
        </section>

        {/* ═══ CONTENT + TOC ═══ */}
        <section className="pt-12 md:pt-16 lg:pt-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Sidebar TOC */}
            <aside className="w-full lg:w-[280px] lg:shrink-0 lg:sticky lg:top-[100px]">
              <div className="bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-8 lg:p-10 flex flex-col gap-6 md:gap-8">
                <h3 className="font-headline font-medium text-[20px] leading-[22px] md:text-h6 text-tala-80">
                  Table of contents
                </h3>
                <nav className="flex flex-col gap-3">
                  {recap.sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => handleTocClick(s.id, e)}
                      className={`block pl-4 border-l-2 font-body text-[14px] leading-[18px] transition-colors ${
                        active === s.id
                          ? "border-tala-100 text-tala-100 font-medium"
                          : "border-tala-20 text-tala-60 hover:text-tala-90"
                      }`}
                    >
                      {s.heading}
                    </a>
                  ))}
                  <a
                    href="#final-thoughts"
                    onClick={(e) => handleTocClick("final-thoughts", e)}
                    className={`block pl-4 border-l-2 font-body text-[14px] leading-[18px] transition-colors ${
                      active === "final-thoughts"
                        ? "border-tala-100 text-tala-100 font-medium"
                        : "border-tala-20 text-tala-60 hover:text-tala-90"
                    }`}
                  >
                    Final thoughts
                  </a>
                </nav>
                <div className="h-px bg-tala-20" />
                <div className="flex flex-col gap-3">
                  <p className="font-body text-[14px] leading-[16px] tracking-[-0.5px] text-tala-60">
                    Share this recap
                  </p>
                  <ShareIcons />
                </div>
              </div>
            </aside>

            {/* Article content */}
            <article className="flex-1 min-w-0 bg-tala-0 rounded-[32px] md:rounded-[40px] p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10">
              <p className="font-body text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] text-tala-80">
                {recap.intro}
              </p>

              {recap.sections.map((section) => (
                <section key={section.id} id={section.id} className="flex flex-col gap-4 scroll-mt-32">
                  <h2 className="font-headline font-bold text-[24px] leading-[26px] md:text-[32px] md:leading-[32px] text-tala-100">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="font-body text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] text-tala-80">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="flex flex-col gap-2 pl-5 list-disc">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="font-body text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] text-tala-80">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section id="final-thoughts" className="flex flex-col gap-4 scroll-mt-32">
                <h2 className="font-headline font-bold text-[24px] leading-[26px] md:text-[32px] md:leading-[32px] text-tala-100">
                  Final thoughts
                </h2>
                <p className="font-body text-[16px] leading-[22px] md:text-[18px] md:leading-[26px] text-tala-80">
                  {recap.finalThoughts}
                </p>
              </section>

              <div className="pt-6 md:pt-8 border-t border-tala-10 flex flex-col md:flex-row gap-6 md:gap-20">
                <div className="flex flex-col gap-1">
                  <p className="font-body text-[14px] leading-[16px] tracking-[-0.5px] text-tala-50">
                    Written by
                  </p>
                  <p className="font-headline font-medium text-[20px] leading-[22px] text-tala-100">
                    {recap.writtenBy}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-body text-[14px] leading-[16px] tracking-[-0.5px] text-tala-50">
                    Published on
                  </p>
                  <p className="font-headline font-medium text-[20px] leading-[22px] text-tala-100">
                    {recap.publishedOn}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </TalaPageLayout>
  );
}
