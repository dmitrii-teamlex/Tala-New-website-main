import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, lazy, Suspense } from "react";

const Lottie = lazy(() => import("lottie-react"));
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaNavbar,
  TalaLogo,
  navItems,
} from "@/components/tala";

/* ═══════ Animated stat card ═══════ */
function AnimatedStat({ stat, label, logo, href }: { stat: string; label: string; logo?: string; href?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const animated = useRef(false);
  const numMatch = stat.match(/[\d.]+/);
  const target = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = stat.match(/^[^0-9]*/)?.[0] || "";
  const suffix = stat.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !animated.current) { setVisible(true); animated.current = true; } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (now: number) => { const p = Math.min((now - start) / dur, 1); setCount((1 - Math.pow(1 - p, 3)) * target); if (p < 1) requestAnimationFrame(tick); else setCount(target); };
    requestAnimationFrame(tick);
  }, [visible, target]);

  const display = `${prefix}${target >= 100 ? Math.round(count) : count.toFixed(target % 1 !== 0 ? 1 : 0)}${suffix}`;

  const inner = (
    <div ref={ref} className="bg-tala-0 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[240px] sm:h-[280px] lg:h-[337px] overflow-hidden group cursor-pointer">
      <div className="h-8 flex items-center justify-between">
        <div className="h-8 flex items-center">
          {logo && <img src={logo} alt="" className="h-6" />}
        </div>
        <div className="w-8 h-8 rounded-full border border-tala-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-headline font-bold text-[32px] leading-[32px] sm:text-[42px] sm:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-100">{visible ? display : stat}</p>
        <p className="font-body text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] lg:text-[24px] lg:leading-[28px] text-tala-50">{label}</p>
      </div>
    </div>
  );
  return href ? <Link to={href}>{inner}</Link> : inner;
}

/* ═══════ Platform icons ═══════ */
const platformIcons = [
  { name: "TikTok", pos: "left-[8%] lg:left-[calc(8.33%+66px)] top-[5%] lg:top-[45px]", bg: "bg-black", icon: "/images/icon-tiktok.svg", iconSize: "w-[55%] h-[65%]", delay: 0.1, bob: 3.8, dist: -10 },
  { name: "Meta", pos: "left-[28%] lg:left-[calc(25%+59px)] top-[12%] lg:top-[85px]", bg: "bg-[#007BF9]", icon: "/images/icon-meta.svg", iconSize: "w-[65%] h-[44%]", delay: 0.25, bob: 4.6, dist: -14 },
  { name: "Gemini", pos: "left-[48%] lg:left-[50%] top-[2%] lg:top-[21px]", bg: "bg-white border border-[#e5e5e5]", icon: "/images/icon-gemini.svg", iconSize: "w-[65%] h-[65%]", delay: 0.05, bob: 5.0, dist: -8 },
  { name: "OpenAI", pos: "right-[8%] lg:right-[calc(16.67%-52px)] top-[8%] lg:top-[67px]", bg: "bg-black", icon: "/images/icon-openai.svg", iconSize: "w-[67%] h-[67%]", delay: 0.3, bob: 4.2, dist: -12 },
  { name: "Instagram", pos: "left-[3%] lg:left-[calc(16.67%+30px)] top-[35%] lg:top-[307px]", bg: "", icon: "/images/icon-instagram-full.svg", iconSize: "w-full h-full", delay: 0.4, bob: 5.2, dist: -15 },
  { name: "Claude", pos: "right-[3%] lg:right-[calc(16.67%+10px)] top-[38%] lg:top-[339px]", bg: "bg-[#E66F4C]", icon: "/images/icon-claude.svg", iconSize: "w-[64%] h-[65%]", delay: 0.55, bob: 3.6, dist: -11 },
  { name: "LinkedIn", pos: "left-[5%] lg:left-[71px] top-[60%] lg:top-[447px]", bg: "", icon: "/images/icon-linkedin-full.svg", iconSize: "w-full h-full", delay: 0.5, bob: 4.8, dist: -13 },
  { name: "Perplexity", pos: "left-[42%] lg:left-[50%] top-[78%] lg:top-[545px]", bg: "bg-[#010101]", icon: "/images/icon-perplexity.svg", iconSize: "w-full h-full", delay: 0.7, bob: 4.0, dist: -9 },
  { name: "Pinterest", pos: "left-[18%] lg:left-[calc(16.67%+61px)] top-[82%] lg:top-[577px]", bg: "", icon: "/images/icon-pinterest.svg", iconSize: "w-full h-full", delay: 0.65, bob: 5.4, dist: -16 },
  { name: "Snapchat", pos: "left-[62%] lg:left-[calc(75%-25px)] top-[80%] lg:top-[588px]", bg: "", icon: "/images/icon-snapchat.svg", iconSize: "w-full h-full", delay: 0.75, bob: 4.4, dist: -10 },
  { name: "Pinterest2", pos: "right-[12%] lg:left-[calc(66.67%+60px)] top-[22%] lg:top-[203px]", bg: "", icon: "/images/icon-pinterest2.svg", iconSize: "w-full h-full", delay: 0.35, bob: 5.0, dist: -14 },
  { name: "X", pos: "right-[5%] lg:right-[calc(8.33%-6px)] top-[70%] lg:top-[524px]", bg: "bg-black", icon: "/images/icon-x-vector.svg", iconSize: "w-[65%] h-[65%]", delay: 0.8, bob: 3.4, dist: -12 },
];

/* ═══════ Product engines ═══════ */
const engines = [
  { title: "Viral content engine", description: "Monitor trends, analyze competitors, and generate content that captures attention.", href: "/viral-content-engine", dark: false, reversed: true, media: { type: "lottie" as const, src: "/images/viral-content-engine.json" } },
  { title: "Traffic growth engine", description: "You scale visibility with AI-powered SEO, content, and answer engine optimization, built for how people search today.", href: "/traffic-growth-engine", dark: true, reversed: false, media: { type: "video" as const, src: "/images/seopages_home.webm" } },
  { title: "Paid growth engine", description: "Analyze, create, and scale ads based on what's already working.", href: "/paid-growth-engine", dark: false, reversed: true, media: { type: "lottie" as const, src: "/images/paid-growth-engine.json" } },
];

/* ═══════ Lottie block (lazy-loaded JSON) ═══════ */
function LottieBlock({ src }: { src: string }) {
  const [data, setData] = useState<unknown>(null);
  useEffect(() => {
    fetch(src).then((r) => r.json()).then(setData);
  }, [src]);
  if (!data) return null;
  return (
    <Suspense fallback={null}>
      <Lottie animationData={data} loop autoplay className="w-full h-full" />
    </Suspense>
  );
}

/* ═══════ Testimonials ═══════ */
const testimonials = [
  {
    name: "Raitis Bullits",
    role: "Co-founder and CEO / Alps2Alps",
    image: "/images/photo-raitis.jpg",
    logo: "/images/logo-alps-white.svg",
    caseHref: "/case-studies",
    quote: [
      { text: '"Tala completely transformed how we think about SEO. Instead of writing endless content, ', highlight: false },
      { text: "we now have a self-scaling system that attracts customers 24/7", highlight: true },
      { text: '. Within a few months, we started seeing results we couldn\'t achieve with any agency."', highlight: false },
    ],
  },
  {
    name: "Olga Andrienko",
    role: "VP of Marketing / Semrush",
    image: "/images/photo-olga.jpg",
    logo: "/images/logo-semrush-white.svg",
    caseHref: "/case-studies",
    quote: [
      { text: '"Tala provided structured, ', highlight: false },
      { text: "ready-made solutions and models", highlight: true },
      { text: " that were incredibly educational. It gave me a huge push and showed me that everything is possible, ", highlight: false },
      { text: "you can build anything with AI", highlight: true },
      { text: '. Now, with every problem, I ask myself, \'Can I solve this with AI?\' And the answer is clear."', highlight: false },
    ],
  },
  {
    name: "Simon Semochkin",
    role: "Head of Marketing / Maestra",
    image: "/images/photo-simon.jpg",
    logo: "/images/logo-maestra-white.svg",
    caseHref: "/case-studies",
    quote: [
      { text: '"Tala helped us spot where our time was wasted. Instead of hiring more people, we set up automated workflows. ', highlight: false },
      { text: "This cut about 30% of routine tasks", highlight: true },
      { text: ' and made our marketing and sales team work several times faster. Now we focus on growth and scaling in the US market — not on operations."', highlight: false },
    ],
  },
  {
    name: "Lada Klishchenko",
    role: "CEO / Respontika",
    image: "/images/photo-lada.jpg",
    logo: "/images/logo-respontika-white.svg",
    caseHref: "/case-studies",
    quote: [
      { text: '"With Tala, we went from 3 days per creative batch to 50+ variants in a single morning. Competitor analysis is built in, hypothesis testing is automatic — our team didn\'t grow, but output did."', highlight: false },
    ],
  },
];

/* ═══════ Stats ═══════ */
const statsRow1 = [
  { stat: "~75%", label: "viral video rate", logo: "/images/stat-logo-semrush.svg", href: "/case-studies" },
  { stat: "85K+", label: "monthly organic visitors", logo: "/images/stat-logo-elirox.svg", href: "/case-studies" },
  { stat: "+180%", label: "organic traffic growth", logo: "/images/stat-logo-alps.svg", href: "/case-studies" },
  { stat: "+300%", label: "engagement growth", logo: "/images/stat-logo-levhaolam.svg", href: "/case-studies" },
];
const statsRow2 = [
  { stat: "30K+", label: "keyword rankings achieved", logo: "/images/stat-logo-bina.svg", href: "/case-studies" },
  { stat: "$220K+", label: "additional revenue generated", logo: "/images/stat-logo-ayurveda.svg", href: "/case-studies" },
  { stat: "+312%", label: "organic traffic growth", logo: "/images/stat-logo-respontika.svg", href: "/case-studies" },
  { stat: "+85%", label: "organic traffic increase", logo: "/images/stat-logo-inxy.svg", href: "/case-studies" },
];

/* ═══════ Testimonial Carousel ═══════ */
function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [animKey, setAnimKey] = useState(0);
  const t = testimonials[idx];
  const go = (d: 1 | -1) => {
    setDir(d);
    setIdx((i) => (i + d + testimonials.length) % testimonials.length);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="bg-tala-10">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 min-h-[400px] lg:h-[640px] py-10 lg:py-20">
          {/* Desktop arrows */}
          <button onClick={() => go(-1)} className="hidden lg:flex shrink-0 w-[50px] h-[50px] rounded-pill border border-tala-90 items-center justify-center hover:bg-tala-100 hover:text-tala-0 transition-colors cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <div
            key={animKey}
            className="flex-1 flex flex-col lg:flex-row items-stretch lg:h-[400px] w-full"
            style={{
              animation: `testimonial-slide-${dir > 0 ? "left" : "right"} 0.45s cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            {/* Left: Person card */}
            <div className="bg-tala-100 rounded-[40px] lg:rounded-[60px] p-6 lg:p-10 flex flex-col items-center justify-between w-full lg:w-[318px] shrink-0">
              <div className="w-[160px] h-[160px] lg:w-[238px] lg:h-[238px] rounded-[30px] lg:rounded-[40px] border border-tala-20 overflow-hidden shrink-0">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-4 lg:mt-0">
                <p className="font-headline font-medium text-[22px] leading-[22px] lg:text-[28px] lg:leading-[26px] text-tala-0 whitespace-nowrap">{t.name}</p>
                <p className="font-body text-[12px] lg:text-[14px] leading-[20px] text-tala-30 text-center">{t.role}</p>
              </div>
            </div>
            {/* Right: Quote card */}
            <div className="bg-tala-100 rounded-[40px] lg:rounded-[60px] p-6 lg:p-10 flex-1 flex flex-col gap-6 justify-between min-h-[240px]">
              <div className="flex items-start justify-between">
                <div className="h-8 flex items-center">
                  <img src={t.logo} alt="" className="h-6" />
                </div>
                <Link to={t.caseHref}>
                  <TalaButton color="white" size="S">Read case</TalaButton>
                </Link>
              </div>
              <p className="font-body text-[18px] leading-[24px] lg:text-[24px] lg:leading-[28px]">
                {t.quote.map((q, i) => (
                  <span key={i} className={q.highlight ? "text-tala-0" : "text-tala-30"}>{q.text}</span>
                ))}
              </p>
            </div>
          </div>
          {/* Desktop arrow right */}
          <button onClick={() => go(1)} className="hidden lg:flex shrink-0 w-[50px] h-[50px] rounded-pill border border-tala-90 items-center justify-center hover:bg-tala-100 hover:text-tala-0 transition-colors cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>
        {/* Mobile navigation: arrows + dots */}
        <div className="flex lg:hidden items-center justify-center gap-4 pb-4">
          <button onClick={() => go(-1)} className="shrink-0 w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center hover:bg-tala-100 hover:text-tala-0 transition-colors cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-tala-100" : "bg-tala-30"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} className="shrink-0 w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center hover:bg-tala-100 hover:text-tala-0 transition-colors cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setShowFixedNav(!entry.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const navbarEl = (
    <TalaNavbar logo={<Link to="/"><TalaLogo /></Link>} items={navItems} ctaLabel="Get started" onCtaClick={() => navigate("/get-started")} />
  );

  return (
    <TalaPageLayout className="bg-tala-0" hideNavbar>
      {/* Fixed navbar — appears after scrolling past hero */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-5 lg:px-10 pt-5 transition-all duration-300 ${showFixedNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        {navbarEl}
      </div>

      {/* ═══ 1. HERO — Navbar INSIDE dark container ═══ */}
      <section ref={heroRef} className="bg-tala-0 p-5 lg:p-10">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-tala-100 rounded-4xl overflow-hidden flex flex-col items-center relative">
            {/* Video background */}
            <video
              src="/images/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Content on top */}
            <div className="relative z-10 w-full flex flex-col items-center pt-5 px-5">
              <div className="w-full flex justify-center">{navbarEl}</div>
              <div className="w-full p-5 lg:p-10 py-16 lg:py-24">
                <div className="w-full lg:w-[668px] flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-headline font-bold text-[36px] leading-[36px] md:text-[56px] md:leading-[54px] lg:text-[80px] lg:leading-[76px] text-tala-0">
                      Do twice the marketing with the same team
                    </h1>
                    <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-20 max-w-[587px]">
                      Get more campaigns live, launch faster, and free your team from manual work with AI agents that handle execution while your experts focus on strategy.
                    </p>
                  </div>
                  <div><TalaButton color="white" size="L" onClick={() => navigate("/get-started")}>Get started</TalaButton></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. LLM-AGNOSTIC — Centered text + floating icons ═══ */}
      <section className="bg-tala-0 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative py-16 md:py-24 lg:py-32">
          <div className="relative min-h-[520px] md:min-h-[500px] lg:min-h-[640px] flex items-center justify-center">
            {/* Floating platform icons — all screens */}
            <div className="block">
              {platformIcons.map((icon) => (
                <div
                  key={icon.name}
                  className={`platform-icon absolute ${icon.pos} ${icon.bg} rounded-[12px] md:rounded-[16px] lg:rounded-[20px] w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center overflow-hidden`}
                  style={{
                    "--appear-delay": `${icon.delay}s`,
                    "--bob-duration": `${icon.bob}s`,
                    "--bob-distance": `${icon.dist}px`,
                    "--bob-delay": `${icon.delay * 0.5}s`,
                  } as React.CSSProperties}
                >
                  <img
                    src={icon.icon}
                    alt={icon.name}
                    className={icon.iconSize}
                  />
                </div>
              ))}
            </div>

            {/* Center text content */}
            <div className="flex flex-col items-center text-center gap-10 max-w-[601px] px-5 z-10">
              <p
                className="text-subtitle-reveal font-body text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-tala-70"
                style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
              >
                The content engine for performance marketers
              </p>
              <div className="flex flex-col gap-3">
                {["LLM-agnostic", "Ad-native", "Always on"].map((t, i) => (
                  <p
                    key={t}
                    className="text-fly-up font-headline font-bold text-[36px] leading-[36px] md:text-[52px] md:leading-[48px] lg:text-[64px] lg:leading-[58px] text-tala-100"
                    style={{ "--reveal-delay": `${0.4 + i * 0.2}s` } as React.CSSProperties}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. PRODUCT ENGINES — Unified blocks ═══ */}
      <section className="bg-tala-0 pb-[120px]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col gap-20">
          {engines.map((engine) => (
            <div key={engine.title}>
              <div className={`${engine.dark ? "bg-[#1F2028]" : "bg-tala-0"} rounded-4xl overflow-hidden flex flex-col ${engine.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`}>
                <div className={`flex-1 min-h-[260px] lg:min-h-[596px] flex items-center justify-center overflow-hidden ${engine.dark ? "" : "bg-tala-10 rounded-4xl"}`}>
                  {engine.media.type === "lottie" && (
                    <LottieBlock src={engine.media.src} />
                  )}
                  {engine.media.type === "video" && (
                    <video
                      src={engine.media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-contain"
                    />
                  )}
                </div>
                <div className="w-full lg:w-[440px] shrink-0 p-6 md:p-10 lg:p-[60px] flex flex-col justify-between min-h-[240px] lg:h-[596px]">
                  <div className="flex flex-col gap-4 lg:gap-10">
                    <h2 className={`font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[38px] lg:text-[60px] lg:leading-[54px] ${engine.dark ? "text-tala-0" : "text-tala-100"}`}>{engine.title}</h2>
                    <p className={`font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] ${engine.dark ? "text-tala-30" : "text-tala-70"}`}>{engine.description}</p>
                  </div>
                  <Link to={engine.href} className="mt-4 lg:mt-0">
                    <TalaButton color={engine.dark ? "white" : "black"} size="L">Explore</TalaButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. TESTIMONIAL — bg-tala-10, carousel style ═══ */}
      <TestimonialCarousel />

      {/* ═══ 5. STATS — "See how others are growing with us" on bg-tala-10 ═══ */}
      <section className="bg-tala-10 py-10 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 lg:mb-10">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[38px] lg:text-[60px] lg:leading-[58px] text-tala-100 max-w-[700px]">See how others are growing with us</h2>
            <Link to="/case-studies" className="hidden md:block shrink-0"><TalaButton color="black" size="L">Success stories</TalaButton></Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">{statsRow1.map((s) => <AnimatedStat key={s.stat} {...s} />)}</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">{statsRow2.map((s) => <AnimatedStat key={s.stat} {...s} />)}</div>
          </div>
          <Link to="/case-studies" className="md:hidden mt-6 block"><TalaButton color="black" size="L" className="w-full">Success stories</TalaButton></Link>
        </div>
      </section>

      {/* ═══ 6. BLOG — "Browse our blog" ═══ */}
      <section className="bg-tala-0 py-12 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 lg:mb-10">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[38px] lg:text-[60px] lg:leading-[58px] text-tala-100">Browse our blog</h2>
            <div className="hidden md:block"><TalaButton color="black" size="L">Read articles</TalaButton></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:pr-px">
            {/* Small card */}
            <article className="group bg-tala-0 hover:bg-tala-10 border border-tala-20 rounded-3xl w-full lg:w-[440px] shrink-0 lg:mr-[-1px] flex flex-col overflow-clip cursor-pointer transition-colors duration-200">
              <div className="h-[220px] md:h-[280px] overflow-hidden rounded-3xl">
                <img src="/images/blog-image-1.png" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-3 justify-end flex-1">
                <div className="flex flex-wrap gap-1">
                  {["General marketing", "AI", "SEO", "Strategy", "Analytics", "Conversion"].map((t) => (
                    <span key={t} className="bg-tala-0 border-[0.5px] border-tala-20 rounded-pill px-3 py-2 font-body text-[14px] leading-[16px] tracking-[-0.5px] text-tala-50 whitespace-nowrap">{t}</span>
                  ))}
                </div>
                <p className="font-body text-[20px] leading-[24px] lg:text-[28px] lg:leading-[28px] tracking-[-0.56px] text-tala-90">Building brand loyalty in the digital age: Key strategies for success</p>
              </div>
            </article>
            {/* Big card */}
            <article className="group bg-tala-0 hover:bg-tala-10 border border-tala-20 rounded-3xl w-full lg:flex-1 lg:mr-[-1px] flex flex-col lg:flex-row lg:gap-2 lg:items-end mt-2 lg:mt-0 overflow-clip lg:self-stretch cursor-pointer transition-colors duration-200">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between lg:flex-1 lg:h-full lg:min-w-0">
                <div className="flex flex-wrap gap-1">
                  {["General marketing", "AI", "SEO", "Strategy", "Analytics", "Conversion"].map((t) => (
                    <span key={t} className="bg-tala-0 border-[0.5px] border-tala-20 rounded-pill px-3 py-2 font-body text-[14px] leading-[16px] tracking-[-0.5px] text-tala-50 whitespace-nowrap">{t}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-4 mt-6 lg:mt-0">
                  <p className="font-body text-[20px] leading-[24px] lg:text-[28px] lg:leading-[28px] tracking-[-0.84px] text-tala-90">Mapping the modern customer journey: How AI is changing the game</p>
                  <p className="font-body text-[14px] leading-[18px] lg:text-[18px] lg:leading-[20px] tracking-[-0.18px] text-tala-50">Explore how AI revolutionizes customer journey mapping with precision insights.</p>
                </div>
              </div>
              <div className="lg:flex-1 min-h-[200px] lg:min-h-0 lg:self-stretch overflow-hidden rounded-3xl">
                <img src="/images/blog-image-2.png" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </article>
          </div>
          <div className="md:hidden mt-6"><TalaButton color="black" size="L" className="w-full">Read articles</TalaButton></div>
        </div>
      </section>
    </TalaPageLayout>
  );
}
