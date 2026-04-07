import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/**
 * TalaCaseSidebar (Left Panel)
 *
 * Sidebar panel for case study pages showing client info, bullet points,
 * and metadata key-value pairs.
 *
 * Anatomy:
 * - White bg, rounded-3xl (40px), p-10, w-[430px]
 * - Section title: Nohemi Medium h6 (24px) in tala-80
 * - Body text: Helvetica body-s (16px) in tala-80
 * - Bullet list with checkmark icons
 * - Divider line
 * - Metadata rows: icon + label (left) + value (right)
 *
 * Usage:
 *   <TalaCaseSidebar
 *     title="About the client"
 *     description="Alps2Alps is a European airport..."
 *     bullets={["Capture demand from searches", "Reduce paid ad reliance"]}
 *     metadata={[
 *       { label: "Industry", value: "Transfer service" },
 *       { label: "Location", value: "Global" },
 *     ]}
 *   />
 */

interface MetadataRow {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

interface TalaCaseSidebarProps {
  title: string;
  description: string;
  introText?: string;
  bullets?: string[];
  metadata?: MetadataRow[];
  className?: string;
}

function TalaCaseSidebar({
  title,
  description,
  introText,
  bullets = [],
  metadata = [],
  className,
}: TalaCaseSidebarProps) {
  return (
    <div
      className={cn(
        "bg-tala-0 flex flex-col gap-10 items-start p-10 rounded-3xl w-[430px] shrink-0",
        className
      )}
    >
      {/* Content section */}
      <div className="flex flex-col gap-10 w-full">
        <h3 className="font-headline font-medium text-h6 text-tala-80">
          {title}
        </h3>
        <p className="text-body-s text-tala-80 font-body">{description}</p>

        {(introText || bullets.length > 0) && (
          <div className="flex flex-col gap-5 w-full">
            {introText && (
              <p className="text-body-s text-tala-80 font-body">{introText}</p>
            )}
            {bullets.length > 0 && (
              <div className="flex flex-col gap-2 w-full">
                {bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <div className="size-6 rounded-full flex items-center justify-center shrink-0">
                      <Check size={16} className="text-tala-70" strokeWidth={2.5} />
                    </div>
                    <p className="flex-1 text-body-s text-tala-80 font-body">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Divider */}
      {metadata.length > 0 && <div className="w-full h-px bg-tala-20" />}

      {/* Metadata */}
      {metadata.length > 0 && (
        <div className="flex flex-col gap-2 w-full">
          {metadata.map((row) => (
            <div key={row.label} className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                {row.icon && (
                  <span className="size-5 text-tala-60">{row.icon}</span>
                )}
                <span className="text-body-s text-tala-80 font-body">
                  {row.label}
                </span>
              </div>
              <span className="text-body-s text-tala-100 font-body text-right">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { TalaCaseSidebar };
