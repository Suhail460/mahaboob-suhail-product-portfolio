export const GA_MEASUREMENT_ID = "G-GDS3P2MY0BX"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const trackEvent = (
  action: string,
 category: string,
  label: string
) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  })
}