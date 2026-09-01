# Rithesh & Madhura  — Wedding Invitation

A cinematic, animated wedding invitation website built with React, Vite,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local development, http://localhost:5173
npm run build     # production build, output in dist/
npm run preview   # preview the production build
```

## Editing wedding details

All names, dates, venue, contact numbers and the RSVP WhatsApp number live
in one place: `src/data/weddingData.js`. Update that file and every
section of the site updates automatically.

## Background music (optional)

Drop an MP3 named `wedding-music.mp3` into `public/audio/`. The floating
button in the bottom-right corner lets guests play or pause it — nothing
autoplays, and the site works fine if the file is missing.

## Project structure

```
src/
  components/   All UI sections (Hero, Invitation, Couple, Countdown,
                Events, Venue, RSVP, Footer, EnvelopeIntro, Navbar, and
                shared decorative pieces)
  data/
    weddingData.js   Single source of truth for all wedding content
  index.css     Theme tokens (colors, fonts) and global styles
  App.jsx       Page composition and the envelope-opening gate
```

## Notes

- Motion respects `prefers-reduced-motion`.
- The "Get Directions" link and RSVP WhatsApp number are placeholders in
  `weddingData.js` — swap in the real Google Maps link and phone number
  before sharing.
