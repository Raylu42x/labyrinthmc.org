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

> `docs/` is the static site output — excluded from the documentation site via `.no-docs`.
