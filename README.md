# lmc.kervian.com

Website for the LMC Minecraft server, built with [Eleventy](https://www.11ty.dev/) and hosted at [lmc.kervian.com](https://lmc.kervian.com).

## Stack

- **Generator**: Eleventy (11ty) v3
- **Hosting**: Cloudflare Pages

## Development

```bash
npm install
npm start        # local dev server
npm run build    # production build
```

## Pages

| Page | Purpose |
|------|---------|
| `/` | Home |
| `/rules` | Server rules |
| `/commands` | Available commands |
| `/map` | Live map |
| `/worlds` | World information |
| `/claims` | Land claim info |
| `/join` | How to join |
| `/gallery` | Screenshots |
| `/staff` | Staff list |

## Site banner

A dismissible announcement banner appears at the top of every page. To manage it, edit **`src/banner.md`**:

```markdown
---
enabled: true
id: ip-move-2026-05
---
**The server IP is moving.** See the [Join](/join/) page for the new address.
```

- **`enabled`** — set to `false` to hide the banner entirely.
- **`id`** — a unique string for this banner's message. Change it to reset dismissals so users who already dismissed it will see the new message.
- **Body** — the message content; supports markdown (bold, links, etc.).

> `docs/` is the static site output — excluded from the documentation site via `.no-docs`.
