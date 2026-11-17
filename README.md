# Doni Purnama — Portfolio

**Live site:** https://donieh.github.io/doni-purnama-portfolio/

**Bold Editorial / Zine.** Full colour, 4 pieces per brand, native ratios, zig-zag ordering, muted autoplay video previews for every reel.

## Latest changes

- **Motion layer added**: staggered hero entrance, scroll-reveal with per-element delays, thin lime scroll-progress bar, floating portrait, pulsing availability dot, wobbling sticker, drifting grain, button shine and card/badge hover feedback. All animations are transform/opacity only and are disabled under `prefers-reduced-motion` and in print/PDF output. A fallback timer ensures content is never left hidden if the observer fails.
- **About description revised** (EN + ID) on the site and in the deck/PDFs: VERDE Creative was built by Doni and his two partners (three co-founders working side by side), content trend research, scriptwriting, short-form video editing, graphic design and client relations for 7+ brands, Sapphire Wedding Organization, Miss Evelyn Cake & Pastry, Sabda Setia Institute of Technology and Business, PTE B2 and Teochew.
- **All 16 reels now autoplay.** The five that were previously static posters (`DfJnPOdRYwI`, `DY6Nvt7yqUh`, `DctDdmzSOQU`, `DaLLecQReRW`, `Det-DH5uR8q`) were fetched from their real Instagram sources, converted to H.264 + fast-start, and swapped from `<img>` to lazy `<video>` elements. Verified: all 16 play with no errors.
- **Contact label** changed from "Studio" to "Agency" / "Agensi", matching VERDE being a creative agency rather than a studio.
- **Unified desktop layout**: content now uses one centred measure (`--content`), section padding is tighter, and the hero grid can no longer be squeezed by the headline. Four posts per brand sit in one row on screens ≥ 1440px. Result: ~13% less page height on a 1600px desktop.
- **All videos converted to H.264** (yuv420p) with fast-start. The VP9 files (which would not play in Safari/Firefox/most mobile browsers) were re-encoded; `DU43-QNEgl-` dropped from 20.6 MB to 3.0 MB. All 16 videos verified playing with no errors.
- **Lazy video loading**: reels use `data-src` and only download when near the viewport (instead of `preload="auto"` loading ~45 MB on page open). Autoplay also pauses when the tab is hidden and respects `prefers-reduced-motion`.
- **No layout shift**: every image and video now has intrinsic `width`/`height`; i18n fallbacks contain real copy instead of raw keys; section numbering, the "four pieces" count and a skip link are consistent.
- **Consistent post order** for every brand: **feed / reel / reel / feed** (Optipro's pattern), now applied to Cempaka, Dr Wirawan, Kanaan and Sinar Baru as well — identical on mobile and desktop. `tools/final-posts.json` was updated to match.
- **Kanaan renamed** from "Kenaan" in site, deck and PDF copy (internal slugs/asset filenames left untouched so links keep working).
- **Label correctness enforced**: `FEED` = single post, `FEED (CAROUSEL)` = multi-image post, `REEL` = video. Dr Wirawan's `DfbUUpUErb5` is now `feed (carousel)`; Kanaan's `DW0GMixBDAG` is now `reel`.
- **Optipro first item replaced** with reel `Det-DH5uR8q`.
- **Sinar Baru's 4th item** replaced with reel `DU43-QNEgl-`.
- **Ubud reel `DaRvP30yWvC` kept at 16:9**: the whole video is centred inside a 9:16 black frame (no cropping) while every Ubud frame keeps the same height, so the pairings stay aligned. Its link now uses the `/reels/` Instagram permalink.
- **Indeed link removed**; Seek remains.
- All images and videos are now keyed by **post ID**, so reordering never breaks the preview.
- Nothing is cropped: the website uses native image/video ratios and deck/PDF frames use `object-fit: contain`.

## Files

| File | What it is |
|---|---|
| `index.html` | Website (masonry work grid, autoplay videos) |
| `styles.css` | Site styles + print grid |
| `script.js` | EN/ID copy dictionary |
| `deck.html` / `deck.css` | 11-slide deck |
| `Doni_Purnama_Portfolio.pdf` | 13-page A4, full colour |
| `Doni_Purnama_Deck.pdf` | 11-slide 16:9, full colour |
| `assets/posts/` | Images named by post ID |
| `assets/videos/` | 16 verified H.264 reel videos named by post ID (~54 MB) |
| `tools/final-posts.json` | Source of truth for links, order and labels |

## Open it

Double-click `index.html` (offline-safe) or `node tools/serve.mjs` → `http://localhost:3000`.

## Regenerating PDFs

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --no-sandbox --virtual-time-budget=6000 --print-to-pdf="C:\Users\moshi\Documents\Default Project\Doni_Purnama_Portfolio.pdf" "http://localhost:3000/index.html?v=42"
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --no-sandbox --virtual-time-budget=6000 --print-to-pdf="C:\Users\moshi\Documents\Default Project\Doni_Purnama_Deck.pdf" "http://localhost:3000/deck.html?v=42"
```
