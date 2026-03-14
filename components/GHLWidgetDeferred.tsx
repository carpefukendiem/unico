"use client";

import Script from "next/script";
import { useState, useEffect, useCallback } from "react";

const GHL_LOAD_DELAY_MS = 5000;

/**
 * Loads the GHL chat widget only after delay or first user interaction.
 * Keeps reCAPTCHA and other widget JS off the critical path for Lighthouse.
 */
export default function GHLWidgetDeferred() {
  const [load, setLoad] = useState(false);

  const loadNow = useCallback(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(loadNow, GHL_LOAD_DELAY_MS);
    const events = ["scroll", "keydown", "click", "touchstart", "mousemove"] as const;
    const onInteraction = () => {
      clearTimeout(timer);
      loadNow();
    };
    events.forEach((e) => window.addEventListener(e, onInteraction, { once: true, passive: true }));
    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, onInteraction));
    };
  }, [loadNow]);

  if (!load) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="69b2f2b60ec300a774ad843f"
      strategy="lazyOnload"
    />
  );
}
