# MegaStage Web — Portal & Admin Control Plane

Official website and remote feature configuration plane for the **MegaStage** video editor, hosted on **GitHub Pages** at [megastage.subraspaceai.com](https://megastage.subraspaceai.com).

---

## Architecture

* **Framework:** Next.js 14 (App Router)
* **Rendering:** 100% Static Site Generation (`output: 'export'`)
* **Hosting:** GitHub Pages (Zero monthly hosting fees)
* **Domain:** `megastage.subraspaceai.com` (automated SSL via GitHub Pages)
* **Desktop App Repo:** [subraatakumar/mega-stage](https://github.com/subraatakumar/mega-stage)

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server on port 3400
npm run dev

# Build static production export into out/
npm run build
```

---

## Key Routes

* **`/`** — Product landing page with OS detection & direct GitHub Release download links.
* **`/admin`** — Feature flag manager for `features.json`.
* **`/config/features.json`** — Raw JSON endpoint polled by the desktop application.
