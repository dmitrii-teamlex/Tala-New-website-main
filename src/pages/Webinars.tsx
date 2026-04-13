import { TalaPageLayout, TalaWebinarCard, type WebinarSpeaker } from "@/components/tala";

interface Webinar {
  slug?: string;
  date: string;
  time: string;
  title: string;
  description: string;
  speakers: WebinarSpeaker[];
  cover: string;
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

// No upcoming webinars yet — populate this array to surface the section.
const upcomingWebinars: Webinar[] = [];

const pastWebinars: Webinar[] = [
  {
    slug: "ai-stack-for-engineering",
    date: "24/09/2025",
    time: "6 PM CET",
    title: "AI Stack for Engineering: From Token to Business Benefits",
    description:
      "Learn how to optimize prompting, select the right agents, and integrate AI into your dev pipelines.",
    speakers: [dmitrii],
    cover: "/images/webinar-cover-1.svg",
  },
  {
    slug: "ai-in-business-marketing-leaders",
    date: "17/06/2025",
    time: "6 PM CET",
    title: "AI in business: how marketing leaders turn automation into real impact",
    description:
      "Discover how companies are turning AI from a buzzword into a practical growth engine.",
    speakers: [dmitrii, olga],
    cover: "/images/webinar-cover-2.svg",
  },
  {
    slug: "automation-to-advantage",
    date: "30/04/2025",
    time: "6 PM CET",
    title: "From automation to advantage: how AI reshapes marketing growth",
    description:
      "Discover how forward-thinking companies are re-engineering marketing workflows with AI systems that scale creativity, reach, and insight.",
    speakers: [dmitrii, denis],
    cover: "/images/webinar-cover-3.svg",
  },
];

export default function Webinars() {
  return (
    <TalaPageLayout className="!bg-tala-10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 pb-12 md:pb-16 lg:pb-20">
        {/* ═══ HERO ═══ */}
        <section className="pt-6 md:pt-10">
          <div className="bg-tala-100 rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-[120px] py-12 md:py-16 lg:py-[60px] gap-3 md:gap-4">
            <h1 className="font-headline font-bold text-[32px] leading-[32px] md:text-[48px] md:leading-[46px] lg:text-[56px] lg:leading-[54px] text-tala-10 max-w-[900px]">
              Webinar series on AI use cases
            </h1>
            <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-20 max-w-[700px]">
              From automation deep-dives to founder case studies, our webinars turn
              AI hype into hands-on strategies. Live and on-demand.
            </p>
          </div>
        </section>

        {/* ═══ UPCOMING ═══ */}
        {upcomingWebinars.length > 0 && (
          <section className="pt-12 md:pt-16 lg:pt-[120px]">
            <div className="flex items-start justify-between mb-8 md:mb-10">
              <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-100">
                Upcoming
              </h2>
              <span className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-50">
                ({upcomingWebinars.length})
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {upcomingWebinars.map((w) => (
                <TalaWebinarCard
                  key={w.title}
                  variant="upcoming"
                  date={w.date}
                  time={w.time}
                  title={w.title}
                  description={w.description}
                  speakers={w.speakers}
                  cover={<img src={w.cover} alt="" className="absolute inset-0 size-full object-cover" />}
                />
              ))}
            </div>
          </section>
        )}

        {/* ═══ PAST ═══ */}
        <section className="pt-12 md:pt-16 lg:pt-[120px]">
          <div className="flex items-start justify-between mb-8 md:mb-10">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-100">
              Past
            </h2>
            <span className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-50">
              ({pastWebinars.length})
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {pastWebinars.map((w) => (
              <TalaWebinarCard
                key={w.title}
                variant="past"
                date={w.date}
                time={w.time}
                title={w.title}
                description={w.description}
                speakers={w.speakers}
                cover={<img src={w.cover} alt="" className="absolute inset-0 size-full object-cover" />}
                ctaHref={w.slug ? `/webinars/${w.slug}` : undefined}
              />
            ))}
          </div>
        </section>
      </div>
    </TalaPageLayout>
  );
}
