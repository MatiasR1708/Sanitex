---
name: sanitex-brand
description: Apply Sanitex's brand identity when creating or editing its website, service descriptions, social content, and customer-facing materials. Sanitex offers at-home cleaning services in Medellín, Colombia.
---

# Sanitex Brand

Use this skill for materials representing Sanitex, a company offering cleaning services at customers' homes in Medellín, Colombia. Keep the brand clean, welcoming, trustworthy, calm, and practical. Write in natural Spanish by default; use Colombian Spanish and refer to Medellín when location matters.

## Brand identity

- Company: Sanitex.
- Service: cleaning services at home.
- Service area: Medellín, Colombia.
- Do not invent prices, schedules, service guarantees, credentials, product claims, or specific service offerings. Ask for details when a deliverable depends on them, or use clearly marked placeholders.
- Describe the service clearly and respectfully. Emphasize ease, care, and trust without making unsupported promises.

## Colors

Use this palette as the source of truth:

| Color | Hex | Suggested use |
|---|---|---|
| Deep blue | `#1b4965` | Headings, primary text, and important buttons |
| Bright blue | `#62b6cb` | Links, secondary buttons, and highlighted elements |
| Clear blue | `#5fa8d3` | Details, icons, and interactive states |
| Pale aqua | `#bee9e8` | Soft section backgrounds |
| Light sky | `#cae9ff` | Cards, information blocks, and alternate backgrounds |

Keep text readable against its background. Prefer deep blue for text on pale colors and check contrast before using lighter blues for small text. Do not introduce additional brand colors unless the task needs a neutral such as white, near-black, or a subtle gray for readability.

## Typography

The supplied Google Fonts snippets include four families, although the brief calls for two. Use **Montserrat** for headings and **DM Sans** for body text as the primary two-font system. This is a practical interpretation of the brief; retain Open Sans and Raleway only when the user explicitly asks for them. Use sensible sans-serif fallbacks.

For web pages, the Google Fonts import for the chosen pair is:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

Use Montserrat for titles and short labels, and DM Sans for paragraphs, navigation, and interface text. Keep a clear hierarchy and avoid using many weights without a reason.

## Applying the brand

- Make service, location, and the next customer action easy to find.
- Use the blues and aqua tones consistently; favor uncluttered layouts and generous spacing.
- Keep calls to action direct and friendly. Do not invent a phone number, WhatsApp link, address, or booking URL.
- For websites, preserve responsive behavior, semantic HTML, keyboard access, and readable color contrast.
- When editing an existing project, inspect its structure and current brand implementation first. Make focused changes that fit the existing stack and report any assumptions.
