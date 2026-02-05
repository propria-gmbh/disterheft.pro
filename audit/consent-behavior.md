# Consent banner behavior

## Storage
- **Key:** `disterheft_consent` (localStorage)
- **Schema:**
  - `essential` (boolean, always `true`)
  - `functional` (boolean)
  - `analytics` (boolean)
  - `marketing` (boolean)
  - `updatedAt` (ISO timestamp)

## When banner shows
- **First visit:** no stored consent → banner is visible
- **Subsequent visits:** stored consent → banner hidden

## Buttons
- **Einstellungen speichern / Save settings / Сохранить настройки**
  - Saves current toggle states
- **Ablehnen / Reject / Отклонить**
  - Sets `functional`, `analytics`, `marketing` to `false`
- **Alles akzeptieren / Accept all / Принять все**
  - Sets `functional`, `analytics`, `marketing` to `true`

## Toggle defaults
- **Essenziell / Essential / Необходимые:** ON and locked
- **Funktionell / Functional / Функциональные:** OFF by default
- **Analytisch / Analytics / Аналитические:** OFF by default
- **Marketing:** OFF by default

## Script gating
- Non-essential scripts must be marked with `data-consent` and **not** execute until consent.
- Example:
  ```html
  <script type="text/plain" data-consent="analytics" src="/analytics.js"></script>
  ```
- Once consent is saved, `consentManager.js` replaces these tags with live scripts.

## Manual test checklist
- Fresh visit → banner appears
- Reject → banner hides, persists
- Accept → banner hides, persists
- Reload → no banner
- Clear storage → banner returns
- Non-essential scripts execute only after consent
