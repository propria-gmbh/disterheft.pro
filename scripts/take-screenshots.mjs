import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = "http://localhost:4173";
const outputDir = resolve("audit/screenshots");

const routes = [
  { path: "/", name: "home-root" },
  { path: "/ru/", name: "home-ru" },
  { path: "/de/", name: "home-de" },
  { path: "/en/", name: "home-en" },
  { path: "/impressum/", name: "impressum-root" },
  { path: "/privacy-policy/", name: "privacy-root" },
  { path: "/datenschutzerklaerung/", name: "privacy-alias-root" },
  { path: "/ru/impressum/", name: "impressum-ru" },
  { path: "/ru/privacy-policy/", name: "privacy-ru" },
  { path: "/ru/datenschutzerklaerung/", name: "privacy-alias-ru" },
  { path: "/de/impressum/", name: "impressum-de" },
  { path: "/de/privacy-policy/", name: "privacy-de" },
  { path: "/de/datenschutzerklaerung/", name: "privacy-alias-de" },
  { path: "/en/impressum/", name: "impressum-en" },
  { path: "/en/privacy-policy/", name: "privacy-en" },
  { path: "/en/datenschutzerklaerung/", name: "privacy-alias-en" }
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 }
];

const consentState = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
  updatedAt: new Date().toISOString()
};

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.addInitScript((state) => {
    localStorage.setItem("disterheft_consent", JSON.stringify(state));
  }, consentState);

  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    const filePath = resolve(outputDir, `${route.name}-${viewport.name}.png`);
    await page.screenshot({ path: filePath, fullPage: true });
  }

  await page.close();
}

await browser.close();
