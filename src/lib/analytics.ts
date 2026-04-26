type GtagCommand =
  | ["js", Date]
  | ["config", string]
  | ["event", string, Record<string, string>];

declare global {
  interface Window {
    dataLayer?: GtagCommand[];
    gtag?: (...args: GtagCommand) => void;
  }
}

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const leadFormUrl = import.meta.env.VITE_LEAD_FORM_URL || "#";

export function initializeAnalytics() {
  if (!gaMeasurementId || window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => {
    window.dataLayer?.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    gaMeasurementId,
  )}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId);
}

export function trackEvent(
  eventName: string,
  params: Record<string, string> = {},
) {
  window.gtag?.("event", eventName, params);
}

export function trackCtaClick(ctaLocation: "hero" | "header") {
  trackEvent("cta_click", {
    cta_id: "start_free_check",
    cta_location: ctaLocation,
  });
}

export function trackLead() {
  trackEvent("generate_lead", {
    lead_source: "free_check_form",
    form_result: "success",
  });
}
