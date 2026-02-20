"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  noAnimation?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  noAnimation = false,
}: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12, once: true });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("scroll-mt-24 py-14 sm:py-16", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
          !noAnimation &&
            "transition-all duration-700 ease-out will-change-transform",
          !noAnimation && !inView && "opacity-0 translate-y-8",
          !noAnimation && inView && "opacity-100 translate-y-0",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

