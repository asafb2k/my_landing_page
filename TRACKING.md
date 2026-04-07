# Visitor & CV download tracking (Vercel Web Analytics)

## 1. Enable Web Analytics on Vercel

1. Open your project in the [Vercel dashboard](https://vercel.com/dashboard).
2. Go to **Analytics** in the sidebar and click **Enable** for Web Analytics.
3. Deploy the site (or redeploy). Vercel injects the insights script at `/_vercel/insights/*` on the next deployment.

Page views for this React Router SPA are sent by the `<Analytics route={...} path={...} />` component in [`src/layouts/Layout.tsx`](src/layouts/Layout.tsx), which calls `pageview` on every navigation.

## 2. CV downloads

CV button clicks call `track('CV Download', { page: '...' })` from [`src/hooks/useTracking.ts`](src/hooks/useTracking.ts). In the dashboard, open **Analytics** and look for custom events named **CV Download** (and the `page` property).

Custom events may require a **Pro** (or higher) plan on Vercel; page-level analytics is available on the free tier. See [Vercel Analytics pricing](https://vercel.com/docs/analytics/limits-and-pricing).

## 3. Local development

With `npm run dev`, `@vercel/analytics` uses the debug script and logs to the console instead of sending production data. Deploy to Vercel to verify real traffic.

## 4. Privacy

See [Vercel Web Analytics privacy](https://vercel.com/docs/analytics/privacy-policy) for how data is collected and processed.
