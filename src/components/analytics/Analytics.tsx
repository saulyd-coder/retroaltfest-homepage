"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type AnalyticsPayload = {
  type: "pageview" | "event";
  path: string;
  event?: string;
  timestamp: string;
};

function trackingAllowed() {
  if (typeof navigator === "undefined") return false;

  const doNotTrack = navigator.doNotTrack || (window as Window & { doNotTrack?: string }).doNotTrack;
  return doNotTrack !== "1" && doNotTrack !== "yes";
}

function sendAnalytics(payload: AnalyticsPayload) {
  if (!trackingAllowed()) return;

  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics", new Blob([body], { type: "application/json" }));
    return;
  }

  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function trackRetroAltFestEvent(event: string, path = window.location.pathname) {
  sendAnalytics({
    type: "event",
    event,
    path,
    timestamp: new Date().toISOString(),
  });
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    sendAnalytics({
      type: "pageview",
      path: query ? `${pathname}?${query}` : pathname,
      timestamp: new Date().toISOString(),
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleTrackedClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("[data-raf-track]") : null;
      const trackingName = target?.getAttribute("data-raf-track");

      if (trackingName) {
        trackRetroAltFestEvent(trackingName);
      }
    }

    document.addEventListener("click", handleTrackedClick);
    return () => document.removeEventListener("click", handleTrackedClick);
  }, []);

  return null;
}
