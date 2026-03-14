"use client";

import { useEffect, useRef } from "react";

/**
 * Patches the GoHighLevel chat widget:
 * 1. Close button — adds aria-label for accessibility
 * 2. Roboto font — injects font-display: swap override (bunny.net omits it)
 */
const ROBOTO_SWAP =
  '@font-face{font-family:"Roboto";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.bunny.net/roboto/files/roboto-latin-400-normal.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}';

export default function GHLWidgetA11yPatch() {
  const fontPatched = useRef(false);

  useEffect(() => {
    const injectFontDisplay = () => {
      if (fontPatched.current) return;
      fontPatched.current = true;
      const s = document.createElement("style");
      s.textContent = ROBOTO_SWAP;
      document.head.appendChild(s);
    };

    const patchButton = (el: Element) => {
      if (el instanceof HTMLButtonElement && !el.getAttribute("aria-label")) {
        el.setAttribute("aria-label", "Close chat prompt");
      }
    };

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node instanceof Element) {
            if (
              node.querySelector?.("[id='lc_text-widget']") ||
              node.id === "lc_text-widget" ||
              node.closest?.("#lc_text-widget")
            ) {
              injectFontDisplay();
            }
            const candidates = node.classList?.contains("lc_text-widget_prompt--prompt-close")
              ? [node]
              : Array.from(node.querySelectorAll(".lc_text-widget_prompt--prompt-close"));
            candidates.forEach(patchButton);
          }
        }
      }
    });

    document.querySelectorAll(".lc_text-widget_prompt--prompt-close").forEach(patchButton);
    if (document.getElementById("lc_text-widget")) injectFontDisplay();

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
