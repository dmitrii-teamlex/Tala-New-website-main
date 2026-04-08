/**
 * TalaBrandline — Infinite scrolling logo marquee
 * Logos from Figma node 35:11415
 */

const brandLogos = [
  { name: "Semrush", src: "/images/brand-semrush.svg", h: "h-[30px]" },
  { name: "Gaia", src: "/images/brand-gaia.svg", h: "h-[40px]" },
  { name: "Ask Ayurveda", src: "/images/brand-ayurveda.svg", h: "h-[32px]", flip: true },
  { name: "Telecom", src: "/images/brand-telecom.svg", h: "h-[24px]" },
  { name: "Alps2Alps", src: "/images/brand-alps.svg", h: "h-[40px]" },
  { name: "Myself", src: "/images/brand-myself.svg", h: "h-[34px]" },
  { name: "Lev Haolam", src: "/images/brand-levhaolam.svg", h: "h-[24px]" },
  { name: "Facultet", src: "/images/brand-facultet.svg", h: "h-[36px]" },
  { name: "nmbr", src: "/images/brand-nmbr.svg", h: "h-[32px]" },
  { name: "Engage", src: "/images/brand-engage.svg", h: "h-[25px]" },
  { name: "INXY", src: "/images/brand-inxy.svg", h: "h-[40px]" },
  { name: "Qase", src: "/images/brand-qase.svg", h: "h-[32px]" },
  { name: "Elirox", src: "/images/brand-elirox.svg", h: "h-[40px]" },
];

export function TalaBrandline() {
  return (
    <section className="py-6 md:py-10 overflow-hidden">
      <div className="relative">
        <div className="flex animate-[marquee_40s_linear_infinite] w-max gap-16 items-center">
          {[...brandLogos, ...brandLogos].map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              className={`${logo.h} w-auto shrink-0 opacity-80 grayscale ${"flip" in logo && logo.flip ? "-scale-y-100" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
