"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export default function Slam() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("loading");
    const t = setTimeout(
      () => {
        document.body.classList.remove("loading");
        setDone(true);
      },
      reduce ? 0 : 780,
    );
    return () => {
      clearTimeout(t);
      document.body.classList.remove("loading");
    };
  }, []);

  if (done) return null;

  return (
    <div className="slam" aria-hidden="true">
      {site.displayNameKana.split("・")[0]}
      <small>Loading — {site.displayName}</small>
    </div>
  );
}
