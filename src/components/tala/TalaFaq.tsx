import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

/**
 * TalaFaq
 *
 * Accordion-style FAQ item. Large pill-shaped container with question text
 * and a round toggle button. Expands to show answer text.
 *
 * Anatomy:
 * - White bg, border tala-20, rounded-3xl (40px)
 * - Question in Nohemi Medium h6 (24px)
 * - Answer in Helvetica body-m (18px)
 * - Toggle button: 42px circle with border and chevron
 *
 * Usage:
 *   <TalaFaq question="How does it work?" answer="We use AI..." />
 *   <TalaFaqGroup items={[{ question: "...", answer: "..." }]} />
 */

interface TalaFaqProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

function TalaFaq({ question, answer, defaultOpen = false, className }: TalaFaqProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "bg-tala-0 border border-tala-20 rounded-3xl w-full text-left transition-all",
        open ? "flex flex-col gap-0 pl-10 pr-5 py-5" : "flex items-center gap-10 pl-10 pr-5 py-5",
        className
      )}
    >
      <div className="flex items-center gap-10 w-full">
        <p
          className={cn(
            "flex-1 font-headline font-medium text-h6",
            open ? "text-tala-100" : "text-tala-80"
          )}
        >
          {question}
        </p>
        <div className="border border-tala-90 rounded-pill size-[42px] flex items-center justify-center shrink-0">
          {open ? (
            <ChevronUp size={20} className="text-tala-90" />
          ) : (
            <ChevronDown size={20} className="text-tala-90" />
          )}
        </div>
      </div>
      {open && (
        <div className="pr-4 md:pr-48 pt-2">
          <p className="text-body-m tracking-[-0.18px] text-tala-80 font-body">
            {answer}
          </p>
        </div>
      )}
    </button>
  );
}

interface TalaFaqGroupProps {
  items: { question: string; answer: string }[];
  className?: string;
}

function TalaFaqGroup({ items, className }: TalaFaqGroupProps) {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {items.map((item, i) => (
        <TalaFaq key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export { TalaFaq, TalaFaqGroup };
