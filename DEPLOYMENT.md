# Deployment Guide — SRK Roofing & Construction

This site is a **fully static** Next.js 15 export (`output: 'export'` in
`next.config.mjs`). `npm run build` produces plain HTML/CSS/JS in `out/` —
there is **no server to run, no database, nothing to patch**. That makes
hosting free and maintenance nearly zero.

---

## 1. Where to deploy — comparison

| Host | Free tier | Forms work? | Pipeline | Custom domain + HTTPS | Verdict |
|---|---|---|---|---|---|
| **Netlify** ⭐ | 100 GB bandwidth/mo, 300 build min/mo | ✅ **Yes — the contact & quote forms already use Netlify Forms** | Built in (zero config) | Free | **Use this** |
| Vercel | 100 GB bandwidth/mo | ❌ forms would need rewrite (Formspree etc.) | Built in | Free | Good, but forms break |
| Cloudflare Pages | Unlimited bandwidth | ❌ forms need rewrite | Built in | Free | Good, but forms break |
| GitHub Pages | 100 GB/mo soft limit | ❌ forms need rewrite | **You must build it** (GitHub Actions) | Free | Most manual work |

**Recommendation: Netlify.** The repo is already wired for it:

- `netlify.toml` — build command, publish dir, security + caching headers ✅
- `public/__forms.html` + `useNetlifyForm.ts` — Contact and Quote forms
  submit to **Netlify Forms** (100 free submissions/month, spam filtering,
  email notifications). On any other host these forms silently stop working.

---

## 2. Do you need a pipeline?

**You need *a* pipeline, but you don't need to build one.**

A "pipeline" here just means: *push code → site rebuilds → deploys*.

- **Netlify / Vercel / Cloudflare Pages** — the pipeline is **built in**.
  You connect your Git repository once; every `git push` triggers
  build + deploy automatically. **Do not create a GitHub Actions workflow —
  it would be redundant.**
- **GitHub Pages** — the only option where you must write the pipeline
  yourself (a GitHub Actions workflow that runs `npm run build` and uploads
  `out/`). Not worth it for this project since it kills the forms.

| Scenario | Pipeline needed? | Who provides it |
|---|---|---|
| Netlify (recommended) | Yes | Netlify, automatic on `git push` |
| Vercel / Cloudflare Pages | Yes | Provider, automatic on `git push` |
| GitHub Pages | Yes | **You** (GitHub Actions YAML) |
| Drag-and-drop `out/` to Netlify | No | Manual re-upload every change (fine for one-off demos only) |

---

## 3. Deploy to Netlify — step by step (~10 minutes)

### One-time setup

1. **Put the project on GitHub** (from the project root):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   # create an empty repo on github.com, then:
   git remote add origin https://github.com/<your-user>/srk-construction.git
   git branch -M main
   git push -u origin main
   ```
   Make sure `node_modules/`, `out/`, `.next/` are in `.gitignore`.

2. **Create the Netlify site**
   - Sign up at [app.netlify.com](https://app.netlify.com) (log in with GitHub — free, no card).
   - **Add new site → Import an existing project → GitHub** → pick the repo.
   - Netlify reads `netlify.toml` automatically — build command
     (`npm run build`), publish dir (`out`), Node 20 are already set.
     Just click **Deploy**.
   - ~2 minutes later the site is live at `https://<random-name>.netlify.app`.

3. **Enable form notifications**
   - Site → **Forms** → confirm `contact` and `quote` forms were detected.
   - **Forms → Settings → Form notifications → Email** → add the address
     that should receive enquiries (e.g. info@steppingedge.com).
   - Turn on spam filtering (Akismet) — it's free and on by default.

4. **Custom domain (optional but recommended)**
   - Site → **Domain management → Add a domain** (buy one anywhere, ~₹800–1000/yr).
   - Point the domain's DNS to Netlify (it shows the exact records to add).
   - HTTPS certificate is issued automatically (Let's Encrypt, free, auto-renews).
   - Then update `siteConfig.url` in `src/lib/site.ts` to the real domain and push
     (fixes sitemap/SEO URLs).

### That's the whole pipeline

```
edit code → git commit → git push → Netlify builds → live in ~2 min
```

Every push to `main` deploys automatically. Failed builds never go live —
the previous version stays up.

---

## 4. How to maintain it

| Task | How | How often |
|---|---|---|
| Change text/images/projects | Edit files in `src/content/` or `src/components/`, push | Whenever |
| Preview before publish | Open a Pull Request — Netlify builds a **Deploy Preview** URL for it | Per change |
| Roll back a bad deploy | Netlify → **Deploys** → pick an old deploy → **Publish deploy** (instant, one click) | Rarely |
| Read form submissions | Netlify → **Forms** (plus the email notifications) | As they arrive |
| Update dependencies | `npm outdated`, then `npm update`; verify `npm run build && npm run preview` locally, push | Every 2–3 months |
| Check usage vs free tier | Netlify dashboard → usage. A local business site won't get near 100 GB | Monthly glance |

**Security maintenance: essentially none.** Static files have no server to
hack, no runtime to patch. Dependency updates only affect the build step.

### Local checks before pushing (optional but good habit)

```bash
npm run typecheck   # TypeScript errors
npm run build       # exactly what Netlify runs
npm run preview     # serve out/ at http://localhost:3000 to eyeball it
```

---

## 5. If you ever outgrow the free tier

- **>100 form submissions/month** → Netlify Forms Level 1 (~$19/mo) or swap
  forms to Formspree/Web3Forms free tiers.
- **>100 GB bandwidth/month** → Cloudflare Pages (unlimited bandwidth) +
  moving forms to a service, or Netlify Pro.
- **Need a CMS for the owner to edit content** → the Markdown content in
  `src/content/` works with Decap CMS or TinaCMS (both free, both work on
  Netlify) without restructuring.
