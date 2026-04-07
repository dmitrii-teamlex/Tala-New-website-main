import { useState } from "react";
import { Check, Play, X as XIcon, ArrowRight, Zap, TrendingUp, Target } from "lucide-react";
import {
  TalaPageLayout,
  TalaButton,
  TalaTag,
  TalaInput,
  TalaFaqGroup,
} from "@/components/tala";

/* ═══════════════════════════════════════
   REGISTRATION MODAL
   ═══════════════════════════════════════ */
function RegisterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration:", { name, email });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-tala-100/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-tala-0 rounded-3xl p-8 md:p-10 w-full max-w-[480px] shadow-xl">
        <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 rounded-full bg-tala-10 flex items-center justify-center hover:bg-tala-20 transition-colors">
          <XIcon size={16} className="text-tala-70" />
        </button>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <h3 className="font-headline font-bold text-h5 text-tala-100">Register for the webinar</h3>
              <p className="font-body text-body-s text-tala-50 mt-2">April 15, 2026 · 11:00 AM EST · Free</p>
            </div>
            <TalaInput label="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            <TalaInput label="Work email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TalaButton color="black" size="L" className="w-full" type="submit">Register free</TalaButton>
            <p className="font-body text-[13px] text-tala-40 text-center">Free · No credit card · Replay included</p>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-6 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-tala-100 flex items-center justify-center">
              <Check size={32} className="text-tala-0" />
            </div>
            <h3 className="font-headline font-bold text-h6 text-tala-100">You're in!</h3>
            <p className="font-body text-body-s text-tala-70 max-w-[300px]">Check your inbox for the webinar link. See you on April 15.</p>
            <TalaButton color="black" size="M" onClick={onClose}>Close</TalaButton>
          </div>
        )}
      </div>
    </div>
  );
}

const faqItems = [
  { question: "Is this webinar really free?", answer: "Yes, completely free. No credit card required. Just register with your email and you'll receive the link." },
  { question: "Will there be a replay?", answer: "Yes, all registered attendees receive the full recording within 24 hours after the live session." },
  { question: "Who is this webinar for?", answer: "Marketing leaders, growth managers, content strategists, and anyone responsible for scaling content and campaigns with limited resources." },
  { question: "Do I need to use Tala to attend?", answer: "No. The strategies and frameworks we share apply regardless of your current tools. But you'll see how Tala can accelerate the process." },
  { question: "How long is the webinar?", answer: "60 minutes: 40 minutes of presentation with live demos, followed by 20 minutes of Q&A." },
  { question: "Can I ask questions during the session?", answer: "Absolutely. We have a dedicated Q&A segment and you can submit questions throughout via the chat." },
  { question: "What if I can't make the live session?", answer: "Register anyway — you'll automatically receive the replay link. But live attendees get priority for Q&A and exclusive resources." },
  { question: "Will you share the slides?", answer: "Yes, all registered attendees receive the slide deck and additional resources after the webinar." },
];

const agenda = [
  { time: "0:00", topic: "Welcome & the state of AI marketing", description: "Why 2026 is the inflection point for AI-powered content." },
  { time: "0:10", topic: "Live demo: Viral Content Engine", description: "Watch Tala find a trending topic, create content, and schedule it — in real time." },
  { time: "0:25", topic: "Case study deep dive", description: "How Alps2Alps generated 10,000+ pages and doubled organic revenue." },
  { time: "0:35", topic: "Framework: Building your AI content stack", description: "The exact playbook for deploying AI agents in your marketing workflow." },
  { time: "0:45", topic: "Live Q&A", description: "Your questions answered by our product and growth team." },
];

export default function WebinarLanding() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <TalaPageLayout>
      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ═══ 1. HERO — Full-bleed immersive dark section ═══ */}
      <section className="bg-tala-0 p-3 lg:p-5">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-tala-100 rounded-4xl overflow-hidden relative min-h-[600px] lg:min-h-[780px]">
            {/* Multi-layered gradient background — rich, dynamic */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_85%_15%,rgba(104,81,255,0.45),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_90%,rgba(104,81,255,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(104,81,255,0.05),transparent_40%)]" />

            {/* Decorative grid dots — subtle texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--tala-0)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            {/* Large glowing orb — hero focal point */}
            <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-tala-brand/15 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-tala-brand/10 blur-[100px]" />

            {/* Floating accent elements */}
            <div className="absolute top-[12%] right-[18%] w-20 h-20 lg:w-28 lg:h-28 rounded-3xl bg-tala-brand/15 border border-tala-brand/20 backdrop-blur-sm rotate-12 hidden lg:block" />
            <div className="absolute bottom-[18%] right-[10%] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-tala-brand/10 border border-tala-brand/15 backdrop-blur-sm -rotate-6 hidden lg:block" />
            <div className="absolute top-[50%] right-[30%] w-3 h-3 rounded-full bg-tala-brand/60 animate-pulse hidden lg:block" />
            <div className="absolute top-[30%] right-[22%] w-2 h-2 rounded-full bg-tala-brand/40 hidden lg:block" />
            <div className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full bg-tala-brand/30 animate-pulse hidden lg:block" style={{ animationDelay: "1.5s" }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[600px] lg:min-h-[780px] p-6 md:p-10 lg:p-16">
              {/* Top bar — badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 bg-tala-brand/20 border border-tala-brand/30 rounded-pill px-5 py-2.5 font-body text-body-xs text-tala-brand backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-tala-brand animate-pulse" />
                  LIVE · April 15, 2026
                </span>
                <span className="inline-flex items-center bg-tala-0/10 border border-tala-0/15 rounded-pill px-5 py-2.5 font-body text-body-xs text-tala-0/70 backdrop-blur-sm">
                  Free · 60 min · Replay included
                </span>
              </div>

              {/* Center — headline */}
              <div className="flex flex-col gap-6 max-w-[850px]">
                <h1 className="font-headline font-bold text-[44px] leading-[44px] md:text-[72px] md:leading-[68px] lg:text-[96px] lg:leading-[90px] text-tala-0">
                  AI Agents Are
                  <br />
                  Changing
                  <br />
                  <span className="text-tala-brand">Marketing.</span>
                </h1>
                <p className="font-body text-body-l lg:text-body-xl text-tala-30 max-w-[450px]">
                  See how teams are producing 5-10X more content while cutting costs by 95%. Live demos. Real case studies.
                </p>
              </div>

              {/* Bottom — CTA row */}
              <div className="flex flex-wrap items-center gap-4">
                <TalaButton color="white" size="L" onClick={openModal}>
                  Register free
                </TalaButton>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-tala-70 border-2 border-tala-100" />
                    ))}
                  </div>
                  <span className="font-body text-body-xs text-tala-30">
                    <span className="text-tala-brand font-medium">450+</span> registered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE — Urgency strip with brand color ═══ */}
      <section className="bg-tala-brand py-3.5 overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 mx-8">
              <span className="font-headline font-bold text-[15px] text-tala-0 uppercase tracking-[0.1em]">Free live webinar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tala-0/50" />
              <span className="font-headline font-bold text-[15px] text-tala-0/70 uppercase tracking-[0.1em]">April 15, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tala-0/50" />
              <span className="font-headline font-bold text-[15px] text-tala-0 uppercase tracking-[0.1em]">Only 50 spots left</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tala-0/50" />
            </span>
          ))}
        </div>
      </section>

      {/* ═══ 2. PROBLEM — Bold split section with contrast ═══ */}
      <section className="bg-tala-0 py-12 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {/* Left — Dark dramatic statement */}
            <div className="bg-tala-100 rounded-3xl lg:rounded-l-4xl lg:rounded-r-none p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-[360px] lg:min-h-[480px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(104,81,255,0.2),transparent_50%)]" />
              <div className="relative z-10">
                <p className="font-headline font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[38px] lg:leading-[44px]">
                  <span className="text-tala-40">Your team produces content all day. </span>
                  <span className="text-tala-0">Nothing goes viral. Nothing ranks. </span>
                  <span className="text-tala-brand">Nothing converts.</span>
                </p>
              </div>
              <p className="font-body text-body-m text-tala-40 relative z-10 mt-6 lg:mt-0">
                Sound familiar? You're not alone. 87% of marketing teams face the same problem.
              </p>
            </div>
            {/* Right — Solution preview */}
            <div className="bg-tala-brand rounded-3xl lg:rounded-r-4xl lg:rounded-l-none p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-[360px] lg:min-h-[480px]">
              <div>
                <p className="font-headline font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[38px] lg:leading-[44px] text-tala-0">
                  In 60 minutes, we'll show you how to fix it.
                </p>
                <p className="font-body text-body-m text-tala-0/70 mt-4">
                  Live demos. Real numbers. Actual playbooks you can implement tomorrow.
                </p>
              </div>
              <TalaButton color="white" size="L" onClick={openModal}>Register free — limited spots</TalaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. WHAT YOU'LL LEARN — Dynamic staggered cards ═══ */}
      <section className="bg-tala-0 py-16 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-16">
            <div>
              <span className="font-body text-body-s text-tala-brand uppercase tracking-[0.15em] mb-3 block">In 60 minutes</span>
              <h2 className="font-headline font-bold text-h4 lg:text-h3 text-tala-100 max-w-[550px]">What you'll walk away with</h2>
            </div>
            <TalaButton color="stroke-black" size="M" onClick={openModal}>Save your spot</TalaButton>
          </div>
          {/* Staggered asymmetric layout — more visual energy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Card 1 — spans 5 columns, tall */}
            <div className="lg:col-span-5 bg-tala-brand rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[340px] lg:min-h-[480px] relative overflow-hidden group">
              <span className="absolute -bottom-8 -right-4 font-headline font-bold text-[200px] lg:text-[260px] leading-none text-tala-0/[0.08] select-none pointer-events-none">01</span>
              <div className="w-14 h-14 rounded-2xl bg-tala-0/20 flex items-center justify-center">
                <Zap size={28} className="text-tala-0" />
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="font-headline font-bold text-h5 lg:text-h4 text-tala-0">Deploy AI agents that create content automatically</h3>
                <p className="font-body text-body-m text-tala-0/70">See how trend-watching, viral scoring, and auto-publishing work together to produce content that actually performs.</p>
              </div>
            </div>
            {/* Right column — 2 stacked cards */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="bg-tala-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[200px] lg:min-h-[232px] relative overflow-hidden group">
                <span className="absolute -bottom-4 -right-2 font-headline font-bold text-[140px] lg:text-[180px] leading-none text-tala-brand/[0.1] select-none pointer-events-none">02</span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-tala-brand/20 flex items-center justify-center text-tala-brand">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="font-headline font-bold text-h6 lg:text-h5 text-tala-0">Turn trends into traffic before competitors</h3>
                  <p className="font-body text-body-s text-tala-30">Identify viral moments and create platform-native content in minutes, not days.</p>
                </div>
              </div>
              <div className="bg-tala-10 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[200px] lg:min-h-[232px] relative overflow-hidden group hover:bg-tala-100 transition-colors duration-500">
                <span className="absolute -bottom-4 -right-2 font-headline font-bold text-[140px] lg:text-[180px] leading-none text-tala-brand/[0.06] group-hover:text-tala-brand/[0.12] select-none pointer-events-none transition-colors duration-500">03</span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-tala-brand/10 group-hover:bg-tala-brand/20 flex items-center justify-center text-tala-brand transition-colors duration-500">
                    <Target size={24} />
                  </div>
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="font-headline font-bold text-h6 lg:text-h5 text-tala-100 group-hover:text-tala-0 transition-colors duration-500">Scale content 5-10X without hiring</h3>
                  <p className="font-body text-body-s text-tala-70 group-hover:text-tala-30 transition-colors duration-500">Cut cost per creative from ~$100 to ~$5 while increasing output dramatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. LIVE DEMO — Dark section with play element ═══ */}
      <section className="bg-tala-0 py-5 lg:py-10">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-4xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_70%_50%,rgba(104,81,255,0.15),transparent_50%)]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-stretch">
              {/* Text */}
              <div className="flex-1 p-8 md:p-10 lg:p-16 flex flex-col justify-center gap-6">
                <span className="inline-flex items-center gap-2 bg-tala-brand/20 border border-tala-brand/30 rounded-pill px-4 py-2 font-body text-body-xs text-tala-brand w-fit backdrop-blur-sm">
                  Live demo included
                </span>
                <h2 className="font-headline font-bold text-h4 text-tala-0">See Tala create a viral video in real time</h2>
                <p className="font-body text-body-m text-tala-30 max-w-[450px]">
                  Watch our AI agents find a trending topic, create platform-native content, and schedule it for publishing — all during the webinar.
                </p>
                <div className="mt-2">
                  <TalaButton color="white" size="L" onClick={openModal}>Register to watch live</TalaButton>
                </div>
              </div>
              {/* Video preview area */}
              <div className="w-full lg:w-[500px] shrink-0 min-h-[300px] lg:min-h-[400px] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-l from-tala-brand/10 to-transparent" />
                {/* Concentric rings */}
                <div className="absolute w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] rounded-full border border-tala-brand/10" />
                <div className="absolute w-[150px] h-[150px] lg:w-[210px] lg:h-[210px] rounded-full border border-tala-brand/15" />
                <div className="absolute w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] rounded-full border border-tala-brand/20" />
                <button
                  onClick={openModal}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-tala-brand flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_60px_rgba(104,81,255,0.5)] cursor-pointer relative z-10"
                >
                  <Play size={32} className="text-tala-0 ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. SPEAKERS — Side-by-side large cards ═══ */}
      <section className="bg-tala-0 py-16 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-h4 text-tala-100 mb-10 lg:mb-16">Your hosts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Sarah Mitchell", role: "VP of Product, Tala", bio: "Former Head of Growth at HubSpot. Led the development of Tala's AI agent platform. Passionate about making world-class marketing accessible to every team." },
              { name: "James Cooper", role: "Head of Growth, Tala", bio: "Scaled 3 startups from 0 to $10M ARR. Architected Tala's content engine framework. Speaks at 20+ industry events per year." },
            ].map((speaker) => (
              <div key={speaker.name} className="bg-tala-10 rounded-4xl p-6 md:p-8 lg:p-10 flex flex-col gap-6">
                <div className="w-full aspect-[4/3] rounded-3xl bg-tala-20 overflow-hidden flex items-center justify-center">
                  <span className="font-body text-body-xs text-tala-40">Speaker photo</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-h5 text-tala-100">{speaker.name}</h3>
                  <p className="font-body text-body-s text-tala-50 mt-1">{speaker.role}</p>
                  <p className="font-body text-body-s text-tala-70 mt-4">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. WHO IT'S FOR — Checklist with brand accents ═══ */}
      <section className="bg-tala-10 py-16 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="lg:w-[400px] shrink-0">
              <h2 className="font-headline font-bold text-h4 text-tala-100">This webinar is for you if...</h2>
            </div>
            <div className="flex-1 flex flex-col gap-0">
              {[
                "You manage marketing but can't scale content fast enough",
                "You spend too much on ads with declining returns",
                "You hear about AI agents but don't know where to start",
                "You want real results, not another generic AI overview",
                "You need to do more with the same team size",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start py-5 border-b border-tala-20 last:border-b-0">
                  <div className="w-7 h-7 rounded-full bg-tala-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={16} className="text-tala-0" />
                  </div>
                  <p className="font-body text-body-l text-tala-80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. RESULTS — Brand purple gradient with floating stats ═══ */}
      <section className="bg-tala-100 py-16 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(104,81,255,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_60%,rgba(104,81,255,0.15),transparent_50%)]" />
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--tala-0)) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10 relative z-10">
          <h2 className="font-headline font-bold text-h4 lg:text-h3 text-tala-0 mb-10 lg:mb-16 max-w-[600px]">Real results from teams using Tala</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { stat: "~75%", label: "viral content rate" },
              { stat: "85K+", label: "monthly organic visitors" },
              { stat: "+180%", label: "traffic growth" },
              { stat: "3X", label: "faster content production" },
            ].map((s) => (
              <div key={s.stat} className="bg-tala-0/[0.07] backdrop-blur-sm border border-tala-0/10 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between h-[200px] sm:h-[240px] lg:h-[300px] group hover:bg-tala-0/[0.12] transition-colors duration-300">
                <div />
                <div className="flex flex-col gap-2">
                  <p className="font-headline font-bold text-[32px] sm:text-h4 lg:text-h3 text-tala-0 group-hover:text-tala-brand transition-colors duration-300">{s.stat}</p>
                  <p className="font-body text-body-s lg:text-body-l text-tala-30">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. AGENDA — Clean timeline ═══ */}
      <section className="bg-tala-0 py-16 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-h4 text-tala-100 mb-10 lg:mb-16">Agenda</h2>
          <div className="flex flex-col">
            {agenda.map((item, i) => (
              <div key={i} className="flex gap-6 lg:gap-10 items-start relative pb-8 lg:pb-12">
                {i < agenda.length - 1 && (
                  <div className="absolute left-[27px] lg:left-[35px] top-14 bottom-0 w-px bg-tala-20" />
                )}
                <div className="w-[56px] lg:w-[72px] shrink-0 h-[56px] lg:h-[72px] rounded-2xl bg-tala-brand/10 flex items-center justify-center">
                  <span className="font-headline font-bold text-body-s lg:text-body-l text-tala-brand">{item.time}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-headline font-bold text-h6 text-tala-100">{item.topic}</h3>
                  <p className="font-body text-body-s text-tala-70 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <TalaButton color="black" size="L" onClick={openModal}>Register free</TalaButton>
          </div>
        </div>
      </section>

      {/* ═══ 9. TESTIMONIAL — Dramatic dark quote block ═══ */}
      <section className="bg-tala-0 py-5 lg:py-10">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <div className="bg-tala-100 rounded-4xl p-8 md:p-12 lg:p-16 flex flex-col gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-tala-brand/10 blur-[100px] rounded-full" />
            <div className="font-headline font-bold text-[80px] lg:text-[120px] text-tala-brand/20 leading-none relative z-10">"</div>
            <p className="font-body text-body-l md:text-body-xl lg:text-[28px] lg:leading-[36px] max-w-[800px] relative z-10">
              <span className="text-tala-30">After attending Tala's webinar, we </span>
              <span className="text-tala-0">completely rethought our content strategy</span>
              <span className="text-tala-30">. Within 3 months we were producing </span>
              <span className="text-tala-0">5X more content at a fraction of the cost</span>
              <span className="text-tala-30">. This wasn't another fluffy AI talk — it was a </span>
              <span className="text-tala-0">real playbook we implemented the next day</span>
              <span className="text-tala-30">.</span>
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-tala-70 shrink-0" />
              <div>
                <p className="font-headline font-medium text-body-m text-tala-0">Alex Chen</p>
                <p className="font-body text-body-xs text-tala-30">Head of Growth, TechScale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. CTA — Maximum impact registration ═══ */}
      <section className="bg-tala-0 p-3 lg:p-5">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-tala-brand rounded-4xl p-10 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Decorative elements on brand bg */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.1),transparent_40%)]" />
            <div className="absolute top-[10%] right-[8%] w-24 h-24 rounded-3xl bg-tala-0/10 rotate-12 hidden lg:block" />
            <div className="absolute bottom-[15%] left-[5%] w-16 h-16 rounded-2xl bg-tala-0/8 -rotate-6 hidden lg:block" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <h2 className="font-headline font-bold text-[36px] md:text-[56px] lg:text-h2 text-tala-0 mb-6 max-w-[700px]">
                Ready to transform your marketing?
              </h2>
              <p className="font-body text-body-l text-tala-0/70 mb-10 max-w-[450px]">
                Join 500+ marketing leaders who've already registered. Limited spots available.
              </p>
              <TalaButton color="black" size="L" onClick={openModal}>Register free — it takes 10 seconds</TalaButton>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {["Free", "Live session", "60 minutes", "Replay included"].map((badge) => (
                  <span key={badge} className="inline-flex items-center bg-tala-0/15 border border-tala-0/20 rounded-pill px-4 py-2 font-body text-body-xs text-tala-0/80 backdrop-blur-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="bg-tala-0 py-16 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10">
          <h2 className="font-headline font-bold text-h4 text-tala-100 mb-10 lg:mb-16">Frequently asked questions</h2>
          <TalaFaqGroup items={faqItems} />
        </div>
      </section>

      {/* ═══ 12. FINAL URGENCY ═══ */}
      <section className="bg-tala-0 px-3 lg:px-5 pb-3 lg:pb-5">
        <div className="max-w-[1360px] mx-auto">
          <div className="bg-tala-100 rounded-4xl px-8 md:px-12 lg:px-16 py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="font-headline font-bold text-h6 text-tala-0">April 15, 2026</p>
              <div className="w-1.5 h-1.5 rounded-full bg-tala-50 hidden md:block" />
              <p className="font-body text-body-m text-tala-30">Only 50 spots left</p>
            </div>
            <TalaButton color="white" size="L" onClick={openModal}>Register now</TalaButton>
          </div>
        </div>
      </section>
    </TalaPageLayout>
  );
}
