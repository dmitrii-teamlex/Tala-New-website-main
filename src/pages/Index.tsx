import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaNavbar,
  TalaLogo,
  navItems,
} from "@/components/tala";

/* ═══════ Animated stat card ═══════ */
function AnimatedStat({ stat, label }: { stat: string; label: string }) {
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

  return (
    <div ref={ref} className="bg-tala-0 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-[240px] sm:h-[280px] lg:h-[337px] overflow-hidden">
      <div />
      <div className="flex flex-col gap-1">
        <p className="font-headline font-bold text-[32px] leading-[32px] sm:text-[42px] sm:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-100">{visible ? display : stat}</p>
        <p className="font-body text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] lg:text-[24px] lg:leading-[28px] text-tala-50">{label}</p>
      </div>
    </div>
  );
}

/* ═══════ Platform icons ═══════ */
const platformIcons = [
  { name: "TikTok", pos: "left-[calc(8.33%+66px)] top-[45px]", bg: "bg-black", icon: "/images/icon-tiktok.svg", iconClass: "w-[36px] h-[42px]", delay: 0.1, bob: 3.8, dist: -10 },
  { name: "Meta", pos: "left-[calc(25%+59px)] top-[85px]", bg: "bg-[#007BF9]", icon: "/images/icon-meta.svg", iconClass: "w-[42px] h-[28px]", delay: 0.25, bob: 4.6, dist: -14 },
  { name: "Gemini", pos: "left-[50%] top-[21px]", bg: "bg-white border border-[#e5e5e5] border-b-[0.5px] border-r-[0.5px]", icon: "/images/icon-gemini.svg", iconClass: "w-[42px] h-[42px]", delay: 0.05, bob: 5.0, dist: -8 },
  { name: "OpenAI", pos: "right-[calc(16.67%-52px)] top-[67px]", bg: "bg-black", icon: "/images/icon-openai.svg", iconClass: "w-[43px] h-[43px]", delay: 0.3, bob: 4.2, dist: -12 },
  { name: "Instagram", pos: "left-[calc(16.67%+30px)] top-[307px]", bg: "", icon: "/images/icon-instagram-full.svg", iconClass: "w-full h-full", delay: 0.4, bob: 5.2, dist: -15 },
  { name: "Claude", pos: "right-[calc(16.67%+10px)] top-[339px]", bg: "bg-[#E66F4C]", icon: "/images/icon-claude.svg", iconClass: "w-[41px] h-[42px]", delay: 0.55, bob: 3.6, dist: -11 },
  { name: "LinkedIn", pos: "left-[71px] top-[447px]", bg: "", icon: "/images/icon-linkedin-full.svg", iconClass: "w-full h-full", delay: 0.5, bob: 4.8, dist: -13 },
  { name: "Perplexity", pos: "left-[50%] top-[545px]", bg: "bg-[#010101]", icon: "/images/icon-perplexity.svg", iconClass: "w-full h-full", delay: 0.7, bob: 4.0, dist: -9 },
  { name: "Pinterest", pos: "left-[calc(16.67%+61px)] top-[577px]", bg: "", icon: "/images/icon-pinterest.svg", iconClass: "w-full h-full", delay: 0.65, bob: 5.4, dist: -16 },
  { name: "Snapchat", pos: "left-[calc(75%-25px)] top-[588px]", bg: "", icon: "/images/icon-snapchat.svg", iconClass: "w-full h-full", delay: 0.75, bob: 4.4, dist: -10 },
  { name: "Pinterest2", pos: "left-[calc(66.67%+60px)] top-[203px]", bg: "", icon: "/images/icon-pinterest2.svg", iconClass: "w-full h-full", delay: 0.35, bob: 5.0, dist: -14 },
  { name: "X", pos: "right-[calc(8.33%-6px)] top-[524px]", bg: "bg-black", icon: "/images/icon-x-vector.svg", iconClass: "w-[42px] h-[42px]", delay: 0.8, bob: 3.4, dist: -12 },
];

/* ═══════ Product engines ═══════ */
const engines = [
  { title: "Viral content engine", description: "Monitor trends, analyze competitors, and generate content that captures attention.", href: "/viral-content-engine", dark: false, reversed: false },
  { title: "Traffic growth engine", description: "You scale visibility with AI-powered SEO, content, and answer engine optimization, built for how people search today.", href: "/traffic-growth-engine", dark: true, reversed: true },
  { title: "Paid growth engine", description: "Analyze, create, and scale ads based on what's already working.", href: "/paid-growth-engine", dark: false, reversed: false },
];

/* ═══════ Stats ═══════ */
const statsRow1 = [
  { stat: "~75%", label: "viral video rate" },
  { stat: "85K+", label: "monthly organic visitors" },
  { stat: "+180%", label: "organic traffic growth" },
  { stat: "+300%", label: "engagement growth" },
];
const statsRow2 = [
  { stat: "30K+", label: "keyword rankings achieved" },
  { stat: "$220K+", label: "additional revenue generated" },
  { stat: "+312%", label: "organic traffic growth" },
  { stat: "+85%", label: "organic traffic increase" },
];

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
    <TalaNavbar logo={<TalaLogo />} items={navItems} ctaLabel="Get started" onCtaClick={() => navigate("/get-started")} />
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
          <div className="bg-tala-100 rounded-4xl pt-5 px-5 overflow-hidden flex flex-col gap-5 items-center">
            <div className="w-full flex justify-center">{navbarEl}</div>
            <div className="w-full p-2.5 lg:p-5">
              <div className="flex flex-col lg:flex-row gap-2.5 items-start">
                <div className="w-full lg:w-[681px] shrink-0 p-6 md:p-8 lg:p-10 flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h1 className="font-headline font-bold text-[36px] leading-[36px] md:text-[56px] md:leading-[54px] lg:text-[80px] lg:leading-[76px] text-tala-0">
                      Do twice the marketing with the same team
                    </h1>
                    <p className="font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] text-tala-20">
                      Get more campaigns live, launch faster, and free your team from manual work with AI agents that handle execution while your experts focus on strategy.
                    </p>
                  </div>
                  <div><TalaButton color="white" size="L" onClick={() => navigate("/get-started")}>Get started</TalaButton></div>
                </div>
                <div className="flex-1 relative min-h-[280px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-2xl self-stretch">
                  <img src="/images/hero-image.png" alt="Tala AI" className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. LLM-AGNOSTIC — Centered text + floating icons ═══ */}
      <section className="bg-tala-0">
        <div className="max-w-[1440px] mx-auto relative py-16 md:py-24 lg:py-32">
          <div className="relative min-h-[350px] md:min-h-[500px] lg:min-h-[640px] flex items-center justify-center">
            {/* Floating platform icons — desktop */}
            <div className="hidden lg:block">
              {platformIcons.map((icon) => (
                <div
                  key={icon.name}
                  className={`platform-icon absolute ${icon.pos} ${icon.bg} rounded-[20px] w-16 h-16 flex items-center justify-center overflow-hidden`}
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
                    className={icon.iconClass || "w-full h-full"}
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

            {/* Mobile platform icons */}
            <div className="lg:hidden absolute bottom-2 left-0 right-0 flex justify-center gap-2 px-4 flex-wrap">
              {platformIcons.slice(0, 8).map((icon) => (
                <div key={icon.name} className={`${icon.bg} rounded-[20px] w-10 h-10 flex items-center justify-center overflow-hidden`}>
                  <img src={icon.icon} alt={icon.name} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. PRODUCT ENGINES — Unified blocks ═══ */}
      <section className="bg-tala-0">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          {engines.map((engine) => (
            <div key={engine.title} className="py-1">
              <div className={`${engine.dark ? "bg-tala-100" : "bg-tala-0"} rounded-4xl overflow-hidden flex flex-col ${engine.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`}>
                <div className="flex-1 min-h-[260px] lg:min-h-[596px] overflow-hidden">
                  <div className={`w-full h-full ${engine.dark ? "bg-tala-80/20" : "bg-tala-10"} rounded-xl flex items-center justify-center`}>
                    <span className={`font-body text-[14px] ${engine.dark ? "text-tala-50" : "text-tala-30"}`}>{engine.title}</span>
                  </div>
                </div>
                <div className="w-full lg:w-[440px] shrink-0 p-8 md:p-10 lg:p-[60px] flex flex-col justify-between min-h-[360px] lg:h-[596px]">
                  <div className="flex flex-col gap-6 lg:gap-10">
                    <h2 className={`font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[38px] lg:text-[60px] lg:leading-[54px] ${engine.dark ? "text-tala-0" : "text-tala-100"}`}>{engine.title}</h2>
                    <p className={`font-body text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[20px] lg:leading-[24px] ${engine.dark ? "text-tala-30" : "text-tala-70"}`}>{engine.description}</p>
                  </div>
                  <Link to={engine.href} className="mt-8 lg:mt-0">
                    <TalaButton color={engine.dark ? "white" : "black"} size="L">Explore</TalaButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 4. TESTIMONIAL — bg-tala-10, carousel style ═══ */}
      <section className="bg-tala-10">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-10 py-10">
          <div className="flex items-center gap-4 lg:gap-10 min-h-[400px] lg:min-h-[560px]">
            <button className="hidden md:flex shrink-0 w-[50px] h-[50px] rounded-pill border border-tala-90 items-center justify-center hover:bg-tala-100 hover:text-tala-0 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex-1 flex flex-col lg:flex-row items-stretch h-full min-h-[400px] lg:min-h-[480px]">
              <div className="bg-tala-100 rounded-4xl p-6 lg:p-10 flex flex-col items-center justify-between w-full lg:w-[238px] shrink-0 min-h-[200px]">
                <div className="w-full aspect-square rounded-3xl border-2 border-tala-70 overflow-hidden max-w-[200px] lg:max-w-none">
                  <img src="/images/olga-andrienko.png" alt="Olga Andrienko" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-4 lg:mt-0">
                  <p className="font-headline font-medium text-[20px] leading-[22px] lg:text-[28px] lg:leading-[26px] text-tala-0 whitespace-nowrap">Olga Andrienko</p>
                  <p className="font-body text-[12px] lg:text-[14px] leading-[20px] text-tala-30 text-center">VP of Marketing / Semrush</p>
                </div>
              </div>
              <div className="bg-tala-100 rounded-4xl p-6 lg:p-10 flex-1 flex flex-col justify-between min-h-[280px]">
                <div className="flex items-start justify-between">
                  <div className="h-7 w-auto"><img src="/images/logo-semrush.svg" alt="Semrush" className="h-full w-auto brightness-0 invert opacity-80" /></div>
                  <Link to="/case-studies" className="bg-tala-0 rounded-pill px-5 py-3 font-body text-[16px] leading-[18px] text-tala-100 hover:bg-tala-10 transition-colors">Read case</Link>
                </div>
                <p className="font-body text-[16px] leading-[22px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[28px] mt-6 lg:mt-0">
                  <span className="text-tala-30">"Tala provided structured, </span>
                  <span className="text-tala-0">ready-made solutions and models</span>
                  <span className="text-tala-30"> that were incredibly educational. It gave me a huge push and showed me that everything is possible, </span>
                  <span className="text-tala-0">you can build anything with AI</span>
                  <span className="text-tala-30">. Now, with every problem, I ask myself, 'Can I solve this with AI?' And the answer is clear."</span>
                </p>
              </div>
            </div>
            <button className="hidden md:flex shrink-0 w-[50px] h-[50px] rounded-pill border border-tala-90 items-center justify-center hover:bg-tala-100 hover:text-tala-0 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 5. STATS — "See how others are growing with us" on bg-tala-10 ═══ */}
      <section className="bg-tala-10 py-10 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 lg:mb-10">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[38px] lg:text-[60px] lg:leading-[58px] text-tala-100 max-w-[700px]">See how others are growing with us</h2>
            <Link to="/case-studies" className="shrink-0"><TalaButton color="black" size="L">Success stories</TalaButton></Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">{statsRow1.map((s) => <AnimatedStat key={s.stat} {...s} />)}</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">{statsRow2.map((s) => <AnimatedStat key={s.stat} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* ═══ 6. BLOG — "Browse our blog" ═══ */}
      <section className="bg-tala-0 py-12 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 lg:mb-10">
            <h2 className="font-headline font-bold text-[28px] leading-[28px] md:text-[40px] md:leading-[38px] lg:text-[60px] lg:leading-[58px] text-tala-100">Browse our blog</h2>
            <TalaButton color="black" size="L">Read articles</TalaButton>
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
        </div>
      </section>
    </TalaPageLayout>
  );
}
