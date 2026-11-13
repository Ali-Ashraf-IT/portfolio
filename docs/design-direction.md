# Design direction

Source: the five reference images supplied on 2026-11-12. These notes describe what is in each image, then the direction taken from them for an IT operations and automation engineer.

## Reference-by-reference notes

### 1. "PORTFOLIO" dark maroon poster (UI/UX designer)
- **Layout:** poster-scale wordmark across the full width, portrait cut-out overlapping it, then a bento grid of boxed regions: services row (5 tiles), numbered process list beside a 2x2 featured-work grid, about plus tools plus testimonial, contact with QR codes.
- **Palette:** near-black with a deep red cast, cream wordmark, crimson accent (circle behind portrait, numerals, card outlines).
- **Typography:** ultra-condensed heavy sans for the wordmark and section heads; a classical serif for the person's name; small tracked sans for body.
- **Spacing:** dense, with thin 1px hairline frames dividing every region. Little whitespace; the frames do the separating.
- **Cards:** dark tiles, 1px tinted outline, small radius (around 6px), icon top-left.
- **Navigation:** none visible (static poster). Hierarchy carried by section heads.
- **Motion implied:** none; rotating circular text badge suggests one slow spin.

### 2. "my portofolio" electric blue (graphic designer)
- **Layout:** stacked bands: hero with portrait and glowing ring, an about panel beside a phone mock-up, small pill panels, then a fanned carousel of work.
- **Palette:** saturated cobalt and cyan on a blue grid background, white text, neon glow.
- **Typography:** rounded geometric sans, lowercase, large.
- **Spacing:** generous padding inside heavily rounded panels (radius 24px+).
- **Cards:** pill and capsule shapes with dark outlines; toggles used as decoration.
- **Navigation:** pill-shaped labels act as section markers.
- **Motion implied:** glow and carousel fan.

### 3. "Portfolio" glass navy (UI student)
- **Layout:** large serif wordmark with portrait, a search-bar style tagline, a horizontal carousel of screens inside a glass panel, then rows of pill chips.
- **Palette:** navy to royal blue gradient, white and light-blue text, starburst highlights.
- **Typography:** high-contrast serif for the wordmark mixed with a clean sans; a light-weight/heavy-weight contrast inside one word.
- **Spacing:** airy; panels float with blur.
- **Cards:** glass (translucent, blurred, light border), radius around 20px.
- **Navigation:** "Follow" CTA pill, carousel arrows.
- **Motion implied:** carousel slide, faint glow.

### 4. Two-column CV (education)
- **Layout:** dark slate header band with name and title; grey left sidebar (photo in arch frame, contact, languages, skills); white main column (summary, education, experience, certifications).
- **Palette:** slate #3A3F4B-ish, light grey, white, black text.
- **Typography:** bold sans headings with round icons, regular sans body.
- **Note:** looks clean, but a sidebar, icons and photo are known to break some applicant tracking systems. The brief asks for ATS-safe, so the CV keeps this order of sections and the restrained slate palette, in one column without icons.

### 5. Light bento (graphic designer)
- **Layout:** bento board on light grey: about tile, big name, portrait over a giant letter "C", trait tiles, two-column education/organisation timeline, software icon row, contact bento of social cards.
- **Palette:** cool light grey background, white tiles, black type, small bright tiles (orange, purple, blue) as accents.
- **Typography:** wide heavy grotesk for the name, small sans for details, gradient outline labels.
- **Spacing:** medium; tiles of different sizes sit on a loose grid.
- **Cards:** white tiles, radius around 16px, soft shadow.
- **Navigation:** none; contact tiles are the calls to action.

## What the five have in common
1. A **portrait** is the anchor of the hero in all four portfolio images.
2. **Oversized display type** (wordmark or name) is the first thing seen.
3. **Bento grids:** content in tiles of different sizes, not one long list of identical cards.
4. **Tool/skill icons in square tiles**, and **pill chips** for tags.
5. **Blue** dominates three of five; the other two are maroon and neutral grey.
6. **Stats row** (years, projects) near the hero.
7. Contact as **tiles** (social cards, QR codes), not a plain list.

## Direction for this portfolio

An operations console that reads like a premium poster: oversized condensed name, portrait, and a bento board of real systems work. Dark by default (images 1 to 3), with a light mode taken from image 5.

### Palette
| Token | Dark | Light | Use |
|---|---|---|---|
| bg | #060A13 | #E8EBF0 | page |
| surface | #0C1424 | #FFFFFF | tiles |
| line | #1C2840 | #D2D8E2 | 1px tile frames (image 1) |
| ink | #E9EEF8 | #0A1120 | text |
| muted | #8C9BB7 | #4A5670 | secondary text (meets AA on surface) |
| signal | #3D8BFF | #1A5BD6 | primary accent, links, focus (images 2 and 3) |
| glow | #57D9E8 | #0E8A9A | small highlights, status, ring around portrait |

One accent family (blue to cyan). No gradient washes on every card; glow is used only around the portrait and on the active state.

### Typography
- **Display:** Big Shoulders Display (condensed, industrial; the role of image 1's wordmark). Used for the name and section heads only.
- **Body:** Manrope (clean geometric sans, readable at small sizes).
- **Mono:** JetBrains Mono, only inside workflow and terminal snippets.
- Scale: 1.250 ratio from 16px body; name at clamp(56px, 14vw, 200px).

### Layout
- Hero: giant name across the width, portrait overlapping it with a glowing ring (images 1 and 2), title, one-line value proposition, two buttons, stats row.
- Sections as bento boards with 1px frames (image 1) and medium radius 14px (between images 1 and 5).
- Projects: bento of different tile sizes; flagship projects take a double tile with a screenshot or video poster.
- Contact: tile board with email, LinkedIn, GitHub, CV, and a LinkedIn QR code (images 1 and 5).
- Content left-aligned throughout; only the hero name is set edge to edge.

### Motion
- One orchestrated hero entrance (name, portrait, stats).
- Tiles reveal once on scroll with a short fade; hover only lifts the frame colour.
- All motion off under `prefers-reduced-motion`.

### Things deliberately not copied
- Fake testimonials and client counts (image 1). Only real, supplied facts are used.
- Lowercase playful type and toggles as decoration (image 2): wrong tone for infrastructure hiring.
- Two-column CV with photo (image 4): conflicts with the ATS requirement.
