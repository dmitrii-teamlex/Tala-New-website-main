import {
  TalaButton,
  TalaTag,
  TalaInput,
  TalaCheckbox,
  TalaFaq,
  TalaStatCard,
  TalaCaseCard,
  TalaCaseStudyCard,
  TalaTestimonialCard,
  TalaStepCard,
  TalaSelectionCard,
  TalaProcessStep,
  TalaCaseCover,
  TalaPersonBadge,
  TalaArticleCard,
} from "@/components/tala";
import { useState } from "react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-8 w-full">
      <h2 className="font-headline font-bold text-h4 text-tala-100 border-b border-tala-20 pb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-headline font-medium text-h6 text-tala-80">{title}</h3>
      {children}
    </div>
  );
}

export default function StyleGuide() {
  const [checkboxState, setCheckboxState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedCards, setSelectedCards] = useState<Set<number>>(new Set([1]));

  const toggleCard = (id: number) => {
    setSelectedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-tala-100 text-tala-0 py-16 px-10 rounded-b-4xl">
        <div className="max-w-[1360px] mx-auto">
          <h1 className="font-headline font-bold text-h3 mb-4">Tala Design System</h1>
          <p className="text-body-l text-tala-30 font-body max-w-[600px]">
            Production-ready component library and visual reference for the Tala product.
            Source of truth for building new pages and surfaces.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1360px] mx-auto px-10 py-16 flex flex-col gap-20">

        {/* ── FOUNDATIONS ── */}
        <Section title="Foundations">

          <SubSection title="Color Palette">
            <div className="flex flex-wrap gap-2">
              {[
                { name: "tala-0", bg: "bg-tala-0", text: "text-tala-100", hex: "#FFFFFF" },
                { name: "tala-10", bg: "bg-tala-10", text: "text-tala-100", hex: "#ECEBF1" },
                { name: "tala-20", bg: "bg-tala-20", text: "text-tala-100", hex: "#C3C4CE" },
                { name: "tala-30", bg: "bg-tala-30", text: "text-tala-0", hex: "#A9AAB6" },
                { name: "tala-40", bg: "bg-tala-40", text: "text-tala-0", hex: "#91929F" },
                { name: "tala-50", bg: "bg-tala-50", text: "text-tala-0", hex: "#7B7C88" },
                { name: "tala-60", bg: "bg-tala-60", text: "text-tala-0", hex: "#666772" },
                { name: "tala-70", bg: "bg-tala-70", text: "text-tala-0", hex: "#52535D" },
                { name: "tala-80", bg: "bg-tala-80", text: "text-tala-0", hex: "#40414A" },
                { name: "tala-90", bg: "bg-tala-90", text: "text-tala-0", hex: "#2F3037" },
                { name: "tala-100", bg: "bg-tala-100", text: "text-tala-0", hex: "#1F2026" },
                { name: "brand", bg: "bg-tala-brand", text: "text-tala-0", hex: "#6851FF" },
                { name: "red", bg: "bg-tala-red", text: "text-tala-0", hex: "#D6232E" },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-2">
                  <div className={`${c.bg} ${c.text} size-20 rounded-2xl flex items-center justify-center text-body-xs font-body border border-tala-20`}>
                    {c.hex}
                  </div>
                  <span className="text-body-xs text-tala-60 font-body">{c.name}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="Typography">
            <div className="flex flex-col gap-4 bg-tala-0 p-8 rounded-3xl">
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">H3 / 56px</span>
                <p className="font-headline font-bold text-h3 text-tala-100">Nohemi Bold</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">H4 / 42px</span>
                <p className="font-headline font-bold text-h4 text-tala-100">Nohemi Bold</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">H5 / 28px</span>
                <p className="font-headline font-medium text-h5 text-tala-100">Nohemi Medium</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">H6 / 24px</span>
                <p className="font-headline font-medium text-h6 text-tala-100">Nohemi Medium</p>
              </div>
              <div className="h-px bg-tala-20 my-2" />
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">XL / 24px</span>
                <p className="font-body text-body-xl text-tala-100">Helvetica Regular — Body XL</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">L / 20px</span>
                <p className="font-body text-body-l text-tala-100">Helvetica Regular — Body L</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">M / 18px</span>
                <p className="font-body text-body-m text-tala-100">Helvetica Regular — Body M</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">S / 16px</span>
                <p className="font-body text-body-s text-tala-100">Helvetica Regular — Body S</p>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-body-xs text-tala-50 font-body w-20 shrink-0">XS / 14px</span>
                <p className="font-body text-body-xs text-tala-100">Helvetica Regular — Body XS</p>
              </div>
            </div>
          </SubSection>

          <SubSection title="Border Radius">
            <div className="flex flex-wrap gap-4 items-end">
              {[
                { name: "pill (100px)", cls: "rounded-pill", size: "w-24 h-12" },
                { name: "4xl (60px)", cls: "rounded-4xl", size: "size-20" },
                { name: "3xl (40px)", cls: "rounded-3xl", size: "size-20" },
                { name: "2xl (20px)", cls: "rounded-2xl", size: "size-20" },
                { name: "lg (8px)", cls: "rounded-lg", size: "size-20" },
              ].map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div className={`${r.cls} ${r.size} bg-tala-10 border border-tala-20`} />
                  <span className="text-body-xs text-tala-60 font-body">{r.name}</span>
                </div>
              ))}
            </div>
          </SubSection>
        </Section>

        {/* ── PRIMITIVES ── */}
        <Section title="Primitives">

          <SubSection title="Buttons">
            <div className="flex flex-col gap-6">
              {/* Size L */}
              <div className="flex flex-wrap gap-3 items-center">
                <TalaButton color="black" size="L">Get started</TalaButton>
                <TalaButton color="white" size="L">Get started</TalaButton>
                <TalaButton color="stroke-black" size="L">Get started</TalaButton>
                <TalaButton color="black" size="L" icon="arrow">Get started</TalaButton>
                <TalaButton color="black" size="L" iconOnly icon="arrow" />
              </div>
              {/* Size M */}
              <div className="flex flex-wrap gap-3 items-center">
                <TalaButton color="black" size="M">Get started</TalaButton>
                <TalaButton color="white" size="M">Get started</TalaButton>
                <TalaButton color="stroke-black" size="M">Get started</TalaButton>
                <TalaButton color="black" size="M" icon="arrow">Get started</TalaButton>
                <TalaButton color="black" size="M" iconOnly icon="arrow" />
              </div>
              {/* Size S */}
              <div className="flex flex-wrap gap-3 items-center">
                <TalaButton color="black" size="S">Get started</TalaButton>
                <TalaButton color="white" size="S">Get started</TalaButton>
                <TalaButton color="stroke-black" size="S">Get started</TalaButton>
                <TalaButton color="black" size="S" icon="arrow">Get started</TalaButton>
                <TalaButton color="stroke-black" size="S" iconOnly icon="arrow" />
              </div>
              {/* On dark */}
              <div className="bg-tala-100 p-6 rounded-3xl flex flex-wrap gap-3 items-center">
                <TalaButton color="white" size="L">Get started</TalaButton>
                <TalaButton color="stroke-white" size="L">Get started</TalaButton>
                <TalaButton color="white" size="L" icon="arrow">Get started</TalaButton>
                <TalaButton color="stroke-white" size="S" iconOnly icon="arrow" />
              </div>
            </div>
          </SubSection>

          <SubSection title="Tags">
            <div className="flex flex-wrap gap-3 items-center">
              <TalaTag color="light-grey" size="XS">AI</TalaTag>
              <TalaTag color="light-grey" size="XS">E-commerce</TalaTag>
              <TalaTag color="light-grey" size="S">SEO</TalaTag>
              <TalaTag color="black" size="XS">Free</TalaTag>
              <TalaTag color="black" size="S">Step 1</TalaTag>
            </div>
          </SubSection>

          <SubSection title="Checkbox">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <TalaCheckbox checked={false} />
                <span className="text-body-s text-tala-80 font-body">Unchecked</span>
              </div>
              <div className="flex items-center gap-2">
                <TalaCheckbox checked={true} />
                <span className="text-body-s text-tala-80 font-body">Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <TalaCheckbox checked={checkboxState} onChange={setCheckboxState} />
                <span className="text-body-s text-tala-80 font-body">Interactive</span>
              </div>
            </div>
          </SubSection>

          <SubSection title="Input">
            <div className="flex flex-wrap gap-4 max-w-[800px]">
              <TalaInput label="Name" required className="w-[389px]" />
              <TalaInput
                label="Email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-[389px]"
              />
              <TalaInput label="Company" showIcon className="w-[389px]" />
              <TalaInput label="Phone" error="Please enter a valid phone number" className="w-[389px]" />
            </div>
          </SubSection>

          <SubSection title="Person Badge">
            <div className="flex flex-col gap-4">
              <TalaPersonBadge name="Raitis Bullits" role="Co-founder and CEO / Alps2Alps" />
              <TalaPersonBadge name="Olga Andrienko" role="VP of Marketing / Semrush" />
            </div>
          </SubSection>
        </Section>

        {/* ── COMPOSED COMPONENTS ── */}
        <Section title="Composed Components">

          <SubSection title="Selection Cards">
            <div className="flex flex-wrap gap-4">
              <TalaSelectionCard
                title="Grow social media on autopilot"
                subtitle="Automate content and scale reach"
                selected={selectedCards.has(1)}
                onSelect={() => toggleCard(1)}
              />
              <TalaSelectionCard
                title="Drive traffic with SEO"
                subtitle="Rank higher, get found faster"
                selected={selectedCards.has(2)}
                onSelect={() => toggleCard(2)}
              />
              <TalaSelectionCard
                title="Scale paid acquisition"
                subtitle="Optimize campaigns with AI"
                selected={selectedCards.has(3)}
                onSelect={() => toggleCard(3)}
                size="xs"
              />
            </div>
          </SubSection>

          <SubSection title="Stat Cards">
            <div className="flex flex-wrap gap-4">
              <TalaStatCard stat="~75%" label="Viral video rate" className="w-[337px] h-[337px]" />
              <TalaStatCard stat="+245%" label="Lead conversion rate" description="AI-generated, localized page templates boosted relevance and intent, raising conversions by 245%." className="w-[448px]" />
              <TalaStatCard stat="10,000+" label="Landing pages generated" description="Thousands of SEO-optimized pages created automatically." className="w-[337px]" />
            </div>
          </SubSection>

          <SubSection title="Case Card (legacy)">
            <div className="flex flex-wrap gap-4">
              <TalaCaseCard
                logo={<span className="font-headline font-bold text-[22px] text-tala-90">Alps2Alps</span>}
                tags={["SEO", "E-commerce", "AI"]}
                statLabel="reached"
                statValue="500K–2.5M"
                statUnit="people organically"
                description="Discover how Teamlex built two fully automated content ecosystems for Social Discovery Group."
              />
            </div>
          </SubSection>

          <SubSection title="Case Study Card (catalog)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-[1120px]">
              <TalaCaseStudyCard
                logo="/images/brand-alps.svg"
                logoAlt="Alps2Alps"
                tags={["Ai", "E-commerce", "ROI", "Saas", "FinTech", "SEO", "Telecom", "Apps"]}
                statLabel="reached"
                statValue="500K–2.5M"
                statSuffix="people organically"
                description="Discover how Teamlex built two fully automated content ecosystems for Social Discovery Group, reaching 2.5M+ viewers with zero manual effort."
              />
              <TalaCaseStudyCard
                logo="/images/brand-flylane.svg"
                logoAlt="Flylane"
                tags={["Ai", "Travel", "Performance", "ROI"]}
                statLabel="grew"
                statValue="+170%"
                statSuffix="organic revenue"
                description="Programmatic SEO turned static blog content into a scalable acquisition channel, growing organic revenue by 170% in five months."
              />
            </div>
          </SubSection>

          <SubSection title="Process Steps">
            <div className="flex flex-wrap gap-4">
              <TalaProcessStep step={1} heading="Research" description="Market analysis and keyword collection" />
              <TalaProcessStep step={2} heading="Build" description="Automated page generation at scale" className="size-[440px]" />
            </div>
          </SubSection>

          <SubSection title="Step Card (Case Study)">
            <div className="flex flex-wrap gap-4">
              <TalaStepCard
                step={1}
                title="Research & data collection"
                bullets={[
                  "Analyzed the market and mapped competitor strategies.",
                  "Collected thousands of transfer-related search queries.",
                  "Grouped them into clusters by destinations and service types.",
                ]}
                impact="Clear visibility into high-demand topics and competitor gaps."
                className="w-[411px]"
              />
            </div>
          </SubSection>

          <SubSection title="FAQ">
            <div className="max-w-[800px]">
              <TalaFaq
                question="How does it work?"
                answer="Our AI agents analyze your market, identify opportunities, and execute growth strategies automatically. You get full control and transparency throughout the process."
              />
              <div className="h-2" />
              <TalaFaq
                question="What results can I expect?"
                answer="Most clients see significant improvements within the first 30 days. Traffic growth of 45-200% is typical for our programmatic SEO solutions."
                defaultOpen
              />
            </div>
          </SubSection>

          <SubSection title="Testimonial — Quote Block">
            <TalaTestimonialCard
              variant="quote-block"
              quote="Teamlex exceeded expectations by boosting our organic traffic 45% during our site redesign. Their precision and expertise in SEO were crucial to our success."
              authorName="Raitis Bullits"
              authorRole="Co-founder and CEO / Alps2Alps"
              className="max-w-[890px]"
            />
          </SubSection>

          <SubSection title="Case Cover">
            <TalaCaseCover
              logo={<span className="font-headline font-bold text-body-l text-tala-80">Alps2Alps</span>}
              tags={["AI", "E-commerce", "ROI", "Saas", "FinTech", "SEO"]}
              title="Increased Organic Traffic for Alps2Alps by 45% with Teamlex"
              className="max-w-[1270px]"
            />
          </SubSection>

          <SubSection title="Article Cards">
            <div className="flex flex-wrap gap-4">
              <TalaArticleCard
                type="small"
                tags={["General marketing", "AI", "SEO"]}
                title="Mapping the modern customer journey: How AI is changing the game"
              />
              <TalaArticleCard
                type="big"
                tags={["General marketing", "AI", "SEO", "Strategy"]}
                title="Mapping the modern customer journey: How AI is changing the game"
                subtitle="Explore how AI revolutionizes customer journey mapping with precision insights."
                className="w-[904px]"
              />
            </div>
          </SubSection>

        </Section>

        {/* ── LAYOUT PATTERNS ── */}
        <Section title="Layout Patterns">
          <div className="bg-tala-0 p-8 rounded-3xl">
            <p className="text-body-m text-tala-70 font-body mb-4">
              Tala pages follow a consistent layout system:
            </p>
            <ul className="flex flex-col gap-2 text-body-s text-tala-80 font-body list-disc pl-5">
              <li><strong>Max content width:</strong> 1360px, centered with mx-auto</li>
              <li><strong>Page background:</strong> tala-10 (light warm gray) — bg-background</li>
              <li><strong>Section padding:</strong> py-20 (80px vertical) between major sections</li>
              <li><strong>Card gaps:</strong> gap-4 (4px) for tight grids, gap-5 (20px) for loose grids</li>
              <li><strong>Section heading:</strong> Nohemi Bold h4 (42px) in tala-60, followed by content</li>
              <li><strong>All cards:</strong> White bg (tala-0), rounded-3xl (40px), p-10 (40px)</li>
              <li><strong>Navbar:</strong> Floating pill, sticky top, shadow-tala-m, z-50</li>
              <li><strong>Footer:</strong> Dark (tala-100), rounded-4xl (60px), CTA card on right</li>
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}
