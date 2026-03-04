"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const hasObserver = "IntersectionObserver" in window;
    let observer: IntersectionObserver | null = null;
    let failSafeTimer: number | null = null;

    if (hasObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1 }
      );
    }

    const wireRevealElements = () => {
      const elements = document.querySelectorAll<HTMLElement>(".reveal");
      elements.forEach((el) => {
        if (el.dataset.revealReady === "true") return;
        el.dataset.revealReady = "true";
        if (!hasObserver) {
          el.classList.add("visible");
          return;
        }
        const rect = el.getBoundingClientRect();
        const inViewport =
          rect.top < window.innerHeight * 0.95 && rect.bottom > window.innerHeight * 0.05;
        if (inViewport) {
          el.classList.add("visible");
          return;
        }
        observer?.observe(el);
      });
    };

    wireRevealElements();
    failSafeTimer = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('.reveal[data-reveal-ready="true"]:not(.visible)')
        .forEach((el) => el.classList.add("visible"));
    }, 900);

    const mutationObserver = new MutationObserver(() => {
      wireRevealElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (failSafeTimer !== null) window.clearTimeout(failSafeTimer);
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
