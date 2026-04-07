import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Check } from "lucide-react";
import {
  TalaButton,
  TalaInput,
  TalaSelectionCard,
} from "@/components/tala";

/* ── Step config ── */
const STEP_HEADINGS = [
  {
    title: "Start your growth analysis",
    subtitle:
      "Enter your email and pick a focus — we'll build your AI-powered growth workspace and generate a personalized action plan.",
  },
  {
    title: "What do you want to grow?",
    subtitle:
      "Choose the growth path that best matches your current focus. We'll tailor AI workflows and playbooks for you.",
  },
  {
    title: "Tell us about your website",
    subtitle:
      "Share a few details so we can analyze your current growth signals.",
  },
  {
    title: "Your growth report is almost ready",
    subtitle:
      "We've already started analyzing your niche and surfaced 100+ signals about how your brand performs and where you can grow.",
  },
];

const GOALS = [
  {
    title: "Grow social media on autopilot",
    subtitle: "Automate content and scale reach",
  },
  {
    title: "Drive organic traffic with SEO",
    subtitle: "AI-powered content and keyword strategy",
  },
  {
    title: "Scale paid ads performance",
    subtitle: "AI-driven ad creatives that convert",
  },
  {
    title: "Increase content output 10X",
    subtitle: "Produce more content, faster",
  },
];

const CHANNELS = ["SEO", "Social", "Paid ads", "Partnerships", "E-mail", "Other"];

export default function GetStarted() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState<Set<number>>(new Set());
  const [url, setUrl] = useState("");
  const [market, setMarket] = useState("");
  const [product, setProduct] = useState("");
  const [channels, setChannels] = useState<Set<string>>(new Set());
  const [role, setRole] = useState("");

  const toggleGoal = (i: number) =>
    setGoals((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  const toggleCh = (c: string) =>
    setChannels((prev) => {
      const n = new Set(prev);
      n.has(c) ? n.delete(c) : n.add(c);
      return n;
    });
  const next = () => step < 5 && setStep((s) => s + 1);
  const back = () => step > 1 && setStep((s) => s - 1);

  const isFinal = step === 5;
  const stepData = STEP_HEADINGS[step - 1] || { title: "", subtitle: "" };
  const totalSteps = 4;

  /* ── Progress bar ── */
  const ProgressBar = () => (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalSteps }, (_, i) => {
        const s = i + 1;
        const isCompleted = s < step;
        const isCurrent = s === step;
        if (isCurrent) {
          return (
            <div
              key={s}
              className="flex-1 h-2 rounded-pill bg-tala-0 transition-all duration-300"
            />
          );
        }
        return (
          <div
            key={s}
            className={`h-2 w-2 rounded-pill transition-all duration-300 ${
              isCompleted ? "bg-tala-0" : "bg-tala-30"
            }`}
          />
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-tala-10 flex items-center justify-center p-[60px]">
      <div className="w-full max-w-[1320px] flex flex-col lg:flex-row gap-0 overflow-hidden min-h-[773px]">
        {/* ── LEFT PANEL -- dark, step info ── */}
        {!isFinal && (
          <div className="w-full lg:w-[461px] shrink-0 bg-tala-60 rounded-4xl p-[60px] flex flex-col justify-between">
            {/* Top: step label + progress bar */}
            <div className="flex flex-col gap-5">
              <span className="font-headline font-medium text-h6 text-tala-0">
                Step {step}
              </span>
              <ProgressBar />
            </div>

            {/* Bottom: heading + subtitle */}
            <div className="flex flex-col gap-[60px]">
              <h2 className="font-headline font-bold text-h3 text-tala-0">
                {stepData.title}
              </h2>
              <p className="font-body text-body-m tracking-[-0.18px] text-tala-10">
                {stepData.subtitle}
              </p>
            </div>
          </div>
        )}

        {/* ── RIGHT PANEL -- white, form ── */}
        <div
          className={`flex-1 bg-tala-0 rounded-4xl p-[60px] flex flex-col relative`}
        >
          {/* Close button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-[60px] right-[60px] w-[42px] h-[42px] rounded-pill border border-tala-90 flex items-center justify-center hover:bg-tala-10 transition-colors z-10"
          >
            <X size={20} className="text-tala-90" />
          </button>

          <div className="flex-1 flex items-center justify-center">
            <div className={`w-full ${step === 1 ? "max-w-[440px]" : "max-w-[660px]"}`}>
              {/* --- STEP 1: Email --- */}
              {step === 1 && (
                <div className="flex flex-col gap-[60px]">
                  <div className="flex flex-col gap-5">
                    <h3 className="font-headline font-medium text-h6 text-tala-100">
                      Work e-mail
                    </h3>
                    <div className="flex flex-col gap-1">
                      <TalaInput
                        label="you@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="font-body text-body-xs text-tala-50">
                        Where should we send your growth report
                      </p>
                    </div>
                  </div>
                  <TalaButton
                    color="black"
                    size="L"
                    icon="arrow"
                    onClick={next}
                    className="w-full"
                  >
                    Continue
                  </TalaButton>
                </div>
              )}

              {/* --- STEP 2: Goals --- */}
              {step === 2 && (
                <div className="flex flex-col gap-[60px]">
                  <div className="flex flex-col gap-5">
                    <h3 className="font-headline font-medium text-h6 text-tala-100">
                      What do you want to grow
                    </h3>
                    <div className="flex flex-col -mb-px">
                      <div className="flex -mr-px">
                        {GOALS.slice(0, 2).map((g, i) => (
                          <TalaSelectionCard
                            key={g.title}
                            title={g.title}
                            subtitle={g.subtitle}
                            size="s"
                            selected={goals.has(i)}
                            onSelect={() => toggleGoal(i)}
                            className="-mr-px -mb-px flex-1 h-[196px]"
                          />
                        ))}
                      </div>
                      <div className="flex -mr-px">
                        {GOALS.slice(2, 4).map((g, i) => (
                          <TalaSelectionCard
                            key={g.title}
                            title={g.title}
                            subtitle={g.subtitle}
                            size="s"
                            selected={goals.has(i + 2)}
                            onSelect={() => toggleGoal(i + 2)}
                            className="-mr-px -mb-px flex-1 h-[196px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <TalaButton color="stroke-black" size="L" onClick={back}>
                      Back
                    </TalaButton>
                    <TalaButton
                      color="black"
                      size="L"
                      icon="arrow"
                      onClick={next}
                      className="flex-1"
                    >
                      Continue
                    </TalaButton>
                  </div>
                </div>
              )}

              {/* --- STEP 3: Business details --- */}
              {step === 3 && (
                <div className="flex flex-col gap-[60px]">
                  <div className="flex flex-col gap-10">
                    {/* Your website section */}
                    <div className="flex flex-col gap-5">
                      <h3 className="font-headline font-medium text-h6 text-tala-100">
                        Your website
                      </h3>
                      <div className="flex flex-col -mb-px">
                        <TalaInput
                          label="https://yoursite.com"
                          required
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="-mb-px"
                        />
                        <TalaInput
                          label="Main market / language"
                          showIcon
                          value={market}
                          onChange={(e) => setMarket(e.target.value)}
                          className="-mb-px"
                        />
                        <TalaInput
                          label="Main product or service (e.g. SaaS platform, e-commerce store)"
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                          className="-mb-px"
                        />
                      </div>
                    </div>

                    {/* Acquisition channels section */}
                    <div className="flex flex-col gap-5">
                      <h3 className="font-headline font-medium text-h6 text-tala-100">
                        Main acquisition channels today (optional)
                      </h3>
                      <div className="flex flex-col -mb-px">
                        <div className="flex -mr-px">
                          {CHANNELS.slice(0, 3).map((ch) => (
                            <TalaSelectionCard
                              key={ch}
                              title={ch}
                              size="xs"
                              selected={channels.has(ch)}
                              onSelect={() => toggleCh(ch)}
                              className="-mr-px -mb-px flex-1"
                            />
                          ))}
                        </div>
                        <div className="flex -mr-px">
                          {CHANNELS.slice(3, 6).map((ch) => (
                            <TalaSelectionCard
                              key={ch}
                              title={ch}
                              size="xs"
                              selected={channels.has(ch)}
                              onSelect={() => toggleCh(ch)}
                              className="-mr-px -mb-px flex-1"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <TalaButton color="stroke-black" size="L" onClick={back}>
                      Back
                    </TalaButton>
                    <TalaButton
                      color="black"
                      size="L"
                      icon="arrow"
                      onClick={next}
                      className="flex-1"
                    >
                      Continue
                    </TalaButton>
                  </div>
                </div>
              )}

              {/* --- STEP 4: Results preview --- */}
              {step === 4 && (
                <div className="flex flex-col gap-[60px]">
                  <div className="flex flex-col gap-10">
                    {/* Results preview card */}
                    <div className="bg-tala-10 rounded-2xl px-10 py-8 flex flex-col gap-5">
                      <div className="flex flex-col gap-0.5">
                        {[
                          "analyzing your website",
                          "scanning competitors",
                          "finding content gaps",
                        ].map((label) => (
                          <div
                            key={label}
                            className="flex items-center gap-2 py-2"
                          >
                            <div className="w-5 h-5 rounded-full bg-tala-90 flex items-center justify-center shrink-0">
                              <Check size={12} className="text-tala-0" />
                            </div>
                            <span className="font-body text-body-l text-tala-90">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="font-headline font-medium text-h6 text-tala-90">
                        We found 100+ content growth opportunities &amp;
                        competitor gaps
                      </p>
                    </div>

                    {/* Role input */}
                    <div className="flex flex-col gap-5">
                      <h3 className="font-headline font-medium text-h6 text-tala-100">
                        Your role
                      </h3>
                      <TalaInput
                        label="e.g. Head of Marketing"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex gap-1">
                    <TalaButton color="stroke-black" size="L" onClick={back}>
                      Back
                    </TalaButton>
                    <TalaButton
                      color="black"
                      size="L"
                      icon="arrow"
                      onClick={next}
                      className="flex-1"
                    >
                      Unlock my content growth plan
                    </TalaButton>
                  </div>
                </div>
              )}

              {/* --- STEP 5: Final -- success / report view --- */}
              {step === 5 && (
                <div className="flex flex-col items-center text-center gap-8 py-8">
                  <div className="w-20 h-20 rounded-full bg-tala-brand flex items-center justify-center">
                    <Check size={40} className="text-tala-0" />
                  </div>
                  <div className="flex flex-col gap-3 max-w-[500px]">
                    <h2 className="font-headline font-bold text-h4 text-tala-100">
                      Your growth plan is ready
                    </h2>
                    <p className="font-body text-body-m text-tala-50">
                      We've sent your personalized growth report to{" "}
                      <span className="text-tala-100 font-medium">
                        {email || "your inbox"}
                      </span>
                      . Our team will follow up within 24 hours.
                    </p>
                  </div>
                  <TalaButton
                    color="black"
                    size="L"
                    onClick={() => navigate("/")}
                  >
                    Back to homepage
                  </TalaButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
