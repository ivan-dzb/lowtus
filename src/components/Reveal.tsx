"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: React.ElementType;
  className?: string;
};

export default function Reveal({ children, as: Tag = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in view or scrolled past — show immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fires when it enters the viewport, or when a fast scroll / anchor
        // jump has already carried it above the viewport.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${shown ? "shown" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
