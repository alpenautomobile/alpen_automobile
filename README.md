# Alpen Frontend

Scaffolded Vite + React + TypeScript project using Chakra UI.

Quick start

1. Install dependencies:

```bash
cd alpen-frontend
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```
4. Optimize images (optional):

```bash
npm run optimize-images
```

5. Create Hostpoint ZIP for upload:

```bash
npm run package:hostpoint
```

6. Upload to Hostpoint via SFTP (optional):

Set these environment variables then run the upload script:

```bash
export SFTP_HOST=hostpoint.example.com
export SFTP_USER=username
export SFTP_PASS=password
export SFTP_REMOTE_PATH=/www
npm run upload:sftp
```

Deploy to Hostpoint (manual):

- Build the site (`npm run build`).
- Upload the contents of the `dist` folder to Hostpoint's webspace (via SFTP or Hostpoint file manager) into the target domain folder (usually `www` or `public_html`).
- Ensure Hostpoint serves the uploaded files; single-page routing may need a fallback to `index.html` (create an `.htaccess` or configure Hostpoint accordingly).

Next steps

- Replace placeholder images in `/public` such as `hero.jpg`, `card1.jpg`, etc. with the actual assets from your designs.
- Tweak spacing, fonts and colors in `src/styles.css` and the Chakra theme in `src/theme.ts` for pixel-perfect matching.
- I can continue refining sections, produce Retina assets, and assist with Hostpoint configuration.
