export const CONSENT_STORAGE_KEY = "disterheft_consent";

export const defaultConsent = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false
};

export function readConsent() {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) {
      return null;
    }
    return normalizeConsent(JSON.parse(stored));
  } catch (error) {
    return null;
  }
}

export function writeConsent(state) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // Ignore storage errors.
  }
}

export function normalizeConsent(input) {
  if (!input || typeof input !== "object") {
    return { ...defaultConsent };
  }
  return {
    essential: true,
    functional: Boolean(input.functional),
    analytics: Boolean(input.analytics),
    marketing: Boolean(input.marketing)
  };
}
