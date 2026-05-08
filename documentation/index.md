# lmc.kervian.com

Website for the LMC Minecraft server, built with [Eleventy](https://www.11ty.dev/) and hosted at [lmc.kervian.com](https://lmc.kervian.com).

## Stack

- **Generator**: Eleventy (11ty) v3
- **Hosting**: Cloudflare Pages
- **DNS**: Cloudflare

## Development

```bash
npm install
npm start        # local dev server with live reload
npm run build    # production build → _site/
```

## Pages

| Page | Purpose |
|------|---------|
| `/` | Home |
| `/rules` | Server rules |
| `/commands` | Available in-game commands |
| `/map` | Live world map |
| `/worlds` | World information and descriptions |
| `/claims` | Land claim system info |
| `/join` | How to connect |
| `/gallery` | Screenshots |
| `/staff` | Staff list |
| `/bugs-and-suggestions` | Bug reports and feature requests |

## Structure

```
src/              # Source templates and content
_site/            # Built site output
docs/             # Static assets (CNAME, images, etc.)
eleventy.config.js
```

> `docs/` contains static assets — it's excluded from the documentation site via `.no-docs`. Markdown docs live in `documentation/` instead.
