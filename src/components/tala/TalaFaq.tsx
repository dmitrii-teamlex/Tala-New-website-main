import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * TalaFaq — Figma 42:3931
 *
 * Closed: bg-white, border tala-20, rounded-[40px], pl-40 pr-20 py-20
 *   Question: Nohemi Medium 24px, tala-80
 *   Button: 42px pill, border tala-90, chevron down
 *
 * Open: same container, column layout
 *   Question: Nohemi Medium 24px, tala-100
 *   Answer: Body M 18px, tala-80, tracking -0.18, pr-192
 *   Button: chevron up
 *
 * Group: -1px margin overlap between items
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
        "bg-tala-0 border border-tala-20 rounded-[40px] w-full text-left pl-10 pr-5 py-5 cursor-pointer flex flex-col",
        className
      )}
    >
      <div className="flex items-center w-full">
        <p
          className={cn(
            "flex-1 font-headline font-medium text-[24px] leading-[26px] transition-colors duration-300",
            open ? "text-tala-100" : "text-tala-80"
          )}
        >
          {question}
        </p>
        <div className="border border-tala-90 rounded-pill size-[42px] flex items-center justify-center shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown size={20} className="text-tala-90" />
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="pr-5 lg:pr-[192px] pt-3 pb-1">
          <p className="font-body text-[18px] leading-[20px] tracking-[-0.18px] text-tala-80">
            {answer}
          </p>
        </div>
      </div>
    </button>
  );
}

interface TalaFaqGroupProps {
  items: { question: string; answer: string }[];
  defaultOpen?: boolean;
  className?: string;
}

function TalaFaqGroup({ items, defaultOpen = false, className }: TalaFaqGroupProps) {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {items.map((item, i) => (
        <TalaFaq key={i} question={item.question} answer={item.answer} defaultOpen={defaultOpen} className="mb-[-1px]" />
      ))}
    </div>
  );
}

export { TalaFaq, TalaFaqGroup };
