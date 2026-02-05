# Interactions (source: https://www.disterheft.pro/de)

## Header / Nav
- Horizontal menu (wix-dropdown-menu) with 5 items.
  - Items link to anchors on the same page (scroll-to-section):
    - «Обо мне» (anchor: anchors-lljqh6rn3)
    - «Тренировки» (anchor: anchors-lljqh6s53)
    - «Контакт» (anchor: dataItem-lnu4qquc)
    - «Отзывы» (anchor: anchors-lljqh6rs)
    - «Новая страница» (links to /datenschutzerklärung)
  - If the menu overflows, a "More" item appears (dropdown container exists in DOM).
- Header social icon: Instagram (opens external link in new tab).

## Calls-to-action / External links
- Buttons open external Google Forms in new tab:
  - «Kontakt»
  - «Kostenlose Beratung»
  - «Formular ausfüllen»
- Inline link in paragraph "lizenzierte" opens Google Drive document in new tab.

## Slideshow / Testimonials
- Slideshow component (wixui-slideshow) with:
  - Prev/Next arrow buttons
  - Dot navigation (anchors to slide IDs)
- Manual navigation confirmed via buttons/dots.

## Social links (Footer)
- Whatsapp (tel:+49 (0) 157 51705788)
- Instagram (external)

## Misc
- Scroll-to-top and scroll-to-bottom regions exist in DOM for accessibility.

## Consent Banner
- Not present in static HTML; likely injected at runtime.
- Client-provided screenshot shows a Usercentrics-style privacy settings panel:
  - Title: "Privatsphäre-Einstellungen"
  - Buttons: "Einstellungen speichern", "Ablehnen", "Alles akzeptieren"
  - Toggles: Essenziell, Funktionell, Analytisch, Marketing
  - Links: Datenschutzerklärung, Impressum, Mehr Informationen
- Behavior details (storage keys, gating rules) must be confirmed by client.
