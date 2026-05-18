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

## Site banner

A dismissible announcement banner appears at the top of every page. To manage it, edit **`src/banner.md`**:

```markdown
---
enabled: true
id: ip-move-2026-05
---
**The server IP is moving.** See the [Join](/join/) page for the new address.
```

| Frontmatter field | Purpose |
|---|---|
| `enabled` | Set to `false` to hide the banner entirely |
| `id` | Unique string for this banner version; change it to reset dismissals so users who closed it see the new message |

The body supports markdown (bold, links). Dismissals are stored in `localStorage` keyed on `id`.

## Structure

```
src/              # Source templates and content
src/banner.md     # Site-wide announcement banner content
docs/             # Built site output
eleventy.config.js
```

> `docs/` contains the built site — it's excluded from the documentation site via `.no-docs`. Markdown docs live in `documentation/` instead.
