import { TalaPageLayout, TalaButton, TalaPersonBadge } from "@/components/tala";

const upcomingWebinars = [
  {
    date: "April 15, 2026",
    title: "AI Agents in Marketing: From Hype to Results",
    description:
      "Learn how leading teams are deploying AI agents to produce viral content, drive organic traffic, and optimize ad spend — with real case studies and live demos.",
    speakerName: "Sarah Mitchell",
    speakerRole: "VP of Product, Tala",
  },
  {
    date: "April 28, 2026",
    title: "Building a Content Engine That Scales",
    description:
      "Deep dive into how Tala's viral content engine monitors trends, scores viral potential, and automatically creates platform-native content.",
    speakerName: "James Cooper",
    speakerRole: "Head of Growth, Tala",
  },
];

const pastWebinars = [
  {
    date: "March 10, 2026",
    title: "Paid Growth at Scale: How AI Creates Winning Ads",
    description:
      "How AI-generated ad creatives are outperforming human-made variants across Meta, Google, and TikTok.",
  },
  {
    date: "February 20, 2026",
    title: "SEO in the Age of AI: What's Changed",
    description:
      "The new playbook for organic growth when AI is creating content at unprecedented scale.",
  },
  {
    date: "January 15, 2026",
    title: "From Zero to 100K Visitors: A Tala Case Study",
    description:
      "Step-by-step breakdown of how one team used Tala to build massive organic traffic.",
  },
];

export default function Webinars() {
  return (
    <TalaPageLayout>
      <div className="bg-tala-0">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          {/* ═══ Hero ═══ */}
          <section className="flex flex-col items-center text-center py-12 md:py-16 lg:py-20">
            <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-[72px] lg:leading-[68px] text-tala-100 max-w-[900px]">
              Learn from the best in AI marketing
            </h1>
            <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-50 max-w-[700px] mt-4">
              Join our expert-led sessions on AI-powered marketing strategies,
              tools, and best practices.
            </p>
          </section>

          {/* ═══ Upcoming Webinars ═══ */}
          <section className="py-12 md:py-16 lg:py-20">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[56px] lg:leading-[54px] text-tala-100 mb-6 md:mb-10">
              Upcoming
            </h2>
            <div className="flex flex-col gap-5">
              {upcomingWebinars.map((webinar) => (
                <div
                  key={webinar.title}
                  className="bg-tala-0 border border-tala-20 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  {/* Left */}
                  <div className="flex-1 flex flex-col">
                    <p className="font-body text-[12px] lg:text-[14px] text-tala-50 uppercase tracking-wider">
                      {webinar.date}
                    </p>
                    <h3 className="font-headline font-bold text-[20px] leading-[22px] md:text-[28px] md:leading-[28px] lg:text-[42px] lg:leading-[40px] text-tala-100 mt-3">
                      {webinar.title}
                    </h3>
                    <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-70 mt-4">
                      {webinar.description}
                    </p>
                    <div className="mt-6">
                      <TalaPersonBadge
                        name={webinar.speakerName}
                        role={webinar.speakerRole}
                      />
                    </div>
                    <div className="mt-6">
                      <TalaButton color="black" size="M">
                        Register now
                      </TalaButton>
                    </div>
                  </div>
                  {/* Right — image placeholder */}
                  <div className="w-full md:w-[400px] shrink-0">
                    <div className="bg-tala-10 rounded-2xl aspect-video relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(104,81,255,0.06),transparent_60%)]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ Past Webinars ═══ */}
          <section className="py-12 md:py-16 lg:py-20">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[36px] md:leading-[34px] lg:text-[56px] lg:leading-[54px] text-tala-100 mb-6 md:mb-10">
              Past webinars
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {pastWebinars.map((webinar) => (
                <div
                  key={webinar.title}
                  className="bg-tala-0 border border-tala-20 rounded-3xl p-6 md:p-8 flex flex-col"
                >
                  <div className="bg-tala-10 rounded-2xl aspect-video mb-4 md:mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(104,81,255,0.06),transparent_60%)]" />
                  </div>
                  <p className="font-body text-[12px] lg:text-[14px] text-tala-50">{webinar.date}</p>
                  <h3 className="font-headline font-medium text-[20px] leading-[22px] lg:text-[24px] lg:leading-[26px] text-tala-100 mt-2">
                    {webinar.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[18px] lg:text-[16px] lg:leading-[18px] text-tala-70 mt-2">
                    {webinar.description}
                  </p>
                  <div className="mt-4">
                    <TalaButton color="black" size="S">
                      Watch recording
                    </TalaButton>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </TalaPageLayout>
  );
}
