# Classy Cloth Hub

A small, responsive clothing shop website built with plain HTML, CSS and JavaScript. The seven supplied clothing photos are used as the first collection. Product cards and the WhatsApp buttons open a pre-filled chat so a customer can ask about sizes, prices, availability and Nyanza delivery.

## Before sharing the site

1. Your WhatsApp number is set in `script.js` as `254702091173` (from `0702 091173`). Change it there if you ever use a different number.
2. Update the product names, categories and descriptions in the `products` list in `script.js` to match the items you have in stock. Replace the `look-*.jpg` files with your own product photos if needed.
3. Add the actual M-Pesa Till/Paybill or payment number to the payment step in `index.html` after deciding which details you want customers to use. For now, the site tells buyers to request payment details in WhatsApp so nobody is sent to an unverified number.
4. Edit the delivery information in `index.html` to match your towns, delivery fees and timing.

## Preview

Open `index.html` in a browser. No build step is required. Google Fonts are used when a connection is available; the page falls back to local system fonts when offline.

## Publish

Upload `index.html`, `styles.css`, `script.js`, and the seven `look-*.jpg` files together to a static host such as GitHub Pages, Netlify or Cloudflare Pages. Keep all files in the same folder.
