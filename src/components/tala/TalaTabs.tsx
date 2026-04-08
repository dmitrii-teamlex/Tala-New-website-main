import { cn } from "@/lib/utils";

/**
 * TalaTabs — Figma pill tabs component
 * Container: bg-tala-10/50, rounded-3xl (40px), p-2, gap-1
 * Active tab: bg-tala-90, text-tala-0, rounded-pill
 * Inactive tab: text-tala-40, hover:text-tala-70
 */

interface TalaTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function TalaTabs({ tabs, activeTab, onTabChange, className }: TalaTabsProps) {
  return (
    <div className={cn("inline-flex gap-1 bg-tala-10/50 p-2 rounded-3xl flex-wrap", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-3 rounded-pill font-body text-[16px] leading-[18px] whitespace-nowrap transition-colors cursor-pointer",
            activeTab === tab
              ? "bg-tala-90 text-tala-0"
              : "text-tala-40 hover:text-tala-70"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
