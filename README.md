# Organization Blog (Hugo + GitHub Pages + Decap CMS)

This repository is set up as a static blog with:

- `Hugo` for static site generation
- `GitHub Pages` for hosting
- `Decap CMS` for browser-based editing at `/admin/`

## Local development

```bash
hugo server -D
```

Open http://localhost:1313.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub: `Settings -> Pages`, set source to `GitHub Actions`.
3. Ensure your default branch is `main`.
4. Push any commit to `main`; workflow `.github/workflows/hugo.yml` deploys automatically.

## CMS setup (required values)

Edit `static/admin/config.yml` and replace:

- `repo`: `OWNER/REPO`
- `site_url` and `display_url`: your final domain
- `auth_endpoint`: URL of your GitHub OAuth bridge for Decap

Decap with GitHub backend needs an OAuth bridge when hosted on GitHub Pages.

## Custom domain on GitHub Pages

Yes, GitHub Pages supports custom domains.

After first deployment:

1. Set your custom domain in `Settings -> Pages`.
2. Add DNS records from GitHub docs.
3. Enable `Enforce HTTPS` once DNS is active.

## Replacing the visual template later

You can keep all content/CMS and replace only templates and styles:

- `layouts/` (HTML templates)
- `static/css/site.css`

Content in `content/posts/` and CMS schema in `static/admin/config.yml` can remain unchanged.
