import { defaultConsent, readConsent, writeConsent, normalizeConsent } from "./consentState.js";

const banner = document.getElementById("consent-banner");

if (banner) {
  const toggleMap = {
    functional: banner.querySelector("[data-consent-toggle='functional']"),
    analytics: banner.querySelector("[data-consent-toggle='analytics']"),
    marketing: banner.querySelector("[data-consent-toggle='marketing']")
  };

  const saveButton = banner.querySelector("[data-consent-action='save']");
  const rejectButton = banner.querySelector("[data-consent-action='reject']");
  const acceptButton = banner.querySelector("[data-consent-action='accept']");

  const updateToggles = (state) => {
    Object.entries(toggleMap).forEach(([key, input]) => {
      if (input) {
        input.checked = Boolean(state[key]);
      }
    });
  };

  const getToggleState = () => {
    const state = { ...defaultConsent };
    Object.entries(toggleMap).forEach(([key, input]) => {
      if (input) {
        state[key] = input.checked;
      }
    });
    return state;
  };

  const loadConsentedScripts = (state) => {
    const scripts = Array.from(document.querySelectorAll("script[data-consent]"));
    scripts.forEach((script) => {
      if (script.dataset.loaded === "true") {
        return;
      }
      const categories = script.dataset.consent
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
      const isAllowed = categories.some((category) => state[category]);
      if (!isAllowed) {
        return;
      }
      const replacement = document.createElement("script");
      replacement.dataset.loaded = "true";
      if (script.src) {
        replacement.src = script.src;
      }
      if (script.type && script.type !== "text/plain") {
        replacement.type = script.type;
      }
      replacement.textContent = script.textContent;
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name === "type" || attr.name === "data-consent") {
          return;
        }
        if (attr.name === "src") {
          return;
        }
        replacement.setAttribute(attr.name, attr.value);
      });
      script.replaceWith(replacement);
    });
  };

  const applyConsent = (state) => {
    const normalized = normalizeConsent(state);
    updateToggles(normalized);
    writeConsent({ ...normalized, updatedAt: new Date().toISOString() });
    banner.hidden = true;
    loadConsentedScripts(normalized);
  };

  const stored = readConsent();
  if (stored) {
    applyConsent(stored);
  } else {
    updateToggles(defaultConsent);
    banner.hidden = false;
  }

  if (saveButton) {
    saveButton.addEventListener("click", () => {
      applyConsent(getToggleState());
    });
  }

  if (rejectButton) {
    rejectButton.addEventListener("click", () => {
      applyConsent({ ...defaultConsent });
    });
  }

  if (acceptButton) {
    acceptButton.addEventListener("click", () => {
      applyConsent({
        essential: true,
        functional: true,
        analytics: true,
        marketing: true
      });
    });
  }
}
