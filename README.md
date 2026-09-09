# Kira product website

Small React marketing fixture built with Vite. All visible baseline claims live in the root `main.jsx` file; `index.html` is only the application shell.

## Run and deploy

Use Node.js 22.12 or later. Run `npm ci`, then `npm run dev` and open the displayed `/kira-web/` URL. Run `npm run build` to produce static files in `dist/`; `npm run preview` serves that build locally.

The build uses `/kira-web/` as its base path for `https://justkiraai.github.io/kira-web/`. In GitHub repository Settings → Pages, select GitHub Actions as the build source. The workflow at `.github/workflows/pages.yml` builds and deploys pushes to `main`, or can be run manually. Keep that workflow at its exact nested path when uploading files.

## Current claims

- Kira Events defaults to **5 retries after the initial attempt**, or **6 total attempts**. HTTP 2xx succeeds; HTTP 408, HTTP 429, HTTP 5xx, and thrown transport errors retry immediately. Other HTTP statuses stop. Explicit `maxRetries` accepts integers from 0 through 10.
- Kira Verify defaults to **600 seconds (10 minutes)**. Timestamp units are Unix milliseconds. Validity is `issuedAt <= now < expiresAt`, so the exact expiry timestamp is inactive. Explicit `ttlSeconds` accepts integers from 1 through 3600.

The products are local policy fixtures, not hosted services. Events uses an injected transport. Verify only calculates and checks expiry metadata.
