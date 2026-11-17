# TikTok Browser

A static, TikTok-only launcher made with HTML, CSS, and JavaScript. It navigates the current browser tab directly to `https://www.tiktok.com/`. It is not a proxy.

## Files
- `index.html` — page structure
- `style.css` — styling
- `app.js` — TikTok-only launch action

## Recommended hosting: GitHub Pages (no backend)

jsDelivr is a file CDN, but its documentation says `.html` files are served as `text/plain`, so opening an HTML file directly from jsDelivr may show its source instead of rendering it as a webpage.

1. Create a public GitHub repository.
2. Upload `index.html`, `style.css`, and `app.js` to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. After GitHub Pages publishes it, open the Pages URL shown in that settings section.

This is still fully static hosting: no Render, server, database, or backend is needed. You can optionally use jsDelivr for the CSS and JavaScript assets, but keep the actual HTML page on GitHub Pages so the browser receives it as an HTML document.

## Important
- The launcher itself opens only `https://www.tiktok.com/`.
- Once TikTok opens, TikTok controls its own navigation and features.
- This does not hide or rewrite network traffic and is not a proxy.
- TikTok may change its website or restrict access based on its own policies and browser settings.
