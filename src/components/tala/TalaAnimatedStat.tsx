import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TalaAnimatedStatProps {
  stat: string;
  label: string;
  className?: string;
}

function TalaAnimatedStat({ stat, label, className }: TalaAnimatedStatProps) {
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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !animated.current) { setVisible(true); animated.current = true; } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [visible, target]);

  const display = `${prefix}${target >= 100 ? Math.round(count) : count.toFixed(target % 1 !== 0 ? 1 : 0)}${suffix}`;

  return (
    <div ref={ref} className={cn("bg-tala-0 rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between", className)}>
      <div />
      <div className="flex flex-col gap-1">
        <p className="font-headline font-bold text-[32px] leading-[32px] sm:text-[42px] sm:leading-[40px] lg:text-[56px] lg:leading-[54px] text-tala-100">
          {visible ? display : stat}
        </p>
        <p className="font-body text-[16px] leading-[20px] sm:text-[20px] sm:leading-[24px] lg:text-[24px] lg:leading-[28px] text-tala-50">
          {label}
        </p>
      </div>
    </div>
  );
}

export { TalaAnimatedStat };
