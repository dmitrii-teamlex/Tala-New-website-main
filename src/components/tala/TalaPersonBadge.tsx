import { cn } from "@/lib/utils";

/**
 * TalaPersonBadge
 *
 * Avatar + name + role badge for team members, testimonial authors, etc.
 * Used in testimonials, case studies, and about pages.
 *
 * Anatomy:
 * - Round avatar: 64px, rounded-full
 * - Name: Nohemi Medium h5 (28px) in tala-90
 * - Role: Helvetica body-m (18px) tracking-[-0.18px] in tala-60
 *
 * Usage:
 *   <TalaPersonBadge
 *     name="Raitis Bullits"
 *     role="Co-founder and CEO / Alps2Alps"
 *     image="/avatars/raitis.jpg"
 *   />
 */

interface TalaPersonBadgeProps {
  name: string;
  role: string;
  image?: string;
  className?: string;
}

function TalaPersonBadge({ name, role, image, className }: TalaPersonBadgeProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {image ? (
        <img
          src={image}
          alt={name}
          className="size-16 rounded-full object-cover shrink-0"
        />
      ) : (
        <div className="size-16 rounded-full bg-tala-60 shrink-0" />
      )}
      <div className="flex flex-col gap-1">
        <p className="font-headline font-medium text-h5 text-tala-90">
          {name}
        </p>
        <p className="text-body-m tracking-[-0.18px] text-tala-60 font-body">
          {role}
        </p>
      </div>
    </div>
  );
}

export { TalaPersonBadge };
