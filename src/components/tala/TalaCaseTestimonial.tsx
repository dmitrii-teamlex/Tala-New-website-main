import { Link } from "react-router-dom";
import { TalaButton } from "./TalaButton";

/**
 * TalaCaseTestimonial — Testimonial + stats block (Figma 350:5980)
 * Left: person card (318px) + quote card (590px) with -1px overlap
 * Right: stat cards stacked with -1px overlap, fills remaining width
 * Total height: 400px on desktop
 */

interface QuotePart {
  text: string;
  highlight?: boolean;
}

interface TalaCaseTestimonialProps {
  name: string;
  role: string;
  image: string;
  logo: string;
  caseHref: string;
  quote: QuotePart[];
  stats: { value: string; label: string }[];
}

export function TalaCaseTestimonial({ name, role, image, logo, caseHref, quote, stats }: TalaCaseTestimonialProps) {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:h-[400px]">
          {/* Person card */}
          <div className="border border-tala-20 rounded-[60px] p-10 flex flex-col items-center justify-between w-full lg:w-[318px] shrink-0 mr-[-1px] mb-[-1px] lg:mb-0">
            <div className="w-[238px] h-[238px] rounded-[40px] border border-tala-20 overflow-hidden shrink-0">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1 items-center mt-4 lg:mt-0">
              <p className="font-headline font-medium text-[28px] leading-[26px] text-tala-100 whitespace-nowrap">{name}</p>
              <p className="font-body text-[14px] leading-[20px] text-tala-60 text-center">{role}</p>
            </div>
          </div>
          {/* Quote card */}
          <div className="border border-tala-20 rounded-[60px] p-10 w-full lg:w-[590px] shrink-0 flex flex-col justify-between min-h-[280px] mr-[-1px] mb-[-1px] lg:mb-0">
            <div className="flex items-start justify-between">
              <div className="h-8 flex items-center">
                <img src={logo} alt="" className="h-8" />
              </div>
              <Link to={caseHref}>
                <TalaButton color="black" size="S">Read case</TalaButton>
              </Link>
            </div>
            <p className="font-body text-[24px] leading-[28px] mt-6 lg:mt-0">
              {quote.map((q, i) => (
                <span key={i} className={q.highlight ? "text-tala-100" : "text-tala-60"}>
                  {q.text}
                </span>
              ))}
            </p>
          </div>
          {/* Right: stat cards */}
          <div className="flex flex-row lg:flex-col flex-1">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border border-tala-20 rounded-[60px] p-10 flex-1 flex items-end mb-[-1px]"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-headline font-bold text-[36px] leading-[36px] lg:text-[60px] lg:leading-[54px] text-tala-100">
                    {stat.value}
                  </p>
                  <p className="font-body text-[18px] leading-[22px] lg:text-[24px] lg:leading-[28px] text-tala-70">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
