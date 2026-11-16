# Oluwakemi Mary Alex · Virtual Assistant

Portfolio site for Oluwakemi Mary Alex, built with React, Vite and React Router.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Where things live

- `src/data/site.js`: all copy (services, experience, education, contact details). Edit words here, not in the pages.
- `src/pages/`: Home, About, Services, Experience, Contact, 404
- `src/components/`: shared pieces (nav, footer, contact form, cards, hero portrait)
- `src/styles/tokens.css`: colours, type scale, radii and shadows, all drawn from the portrait

Icons are Google Material Symbols (Rounded). Only the icons in use are downloaded. If you add one,
add its name to the `icon_names` list in `index.html` (alphabetical order).

The contact form posts to FormSubmit and sends the visitor an automatic confirmation.
Deploys on Vercel; `vercel.json` redirects the old `.html` URLs to the new routes.
