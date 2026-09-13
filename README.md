# aws-nfw-walkthrough

Walkthrough for the disposable dual-hub AWS Network Firewall lab in
[`jajera/aws-nfw-lab`](https://github.com/jajera/aws-nfw-lab).

Sydney and Auckland hubs (TGW + Network Firewall), RAM-shared spokes, hub-to-hub
peering, and **double** vs **single** cross-Region inspection.

## Docs

```bash
npm install
npm run dev
```

Layout matches other johna.kiwi Astro Starlight walkthroughs (Concepts, Deploy
and operate, Reference). Published site:
`https://aws-nfw-walkthrough.johna.kiwi/`.

Pages live under `src/content/docs/`. Lab Terraform stays in `aws-nfw-lab`.

## Brand assets

`public/favicon.svg` and `public/og.svg` are the sources of truth. The committed
PNGs (`og.png`, `favicon-32.png`, `apple-touch-icon.png`) are generated, so
re-render them after editing either SVG:

```bash
npm run images
```

The social card renders with Outfit/Manrope where installed and falls back to
Montserrat/Open Sans on the rasteriser, so check `public/og.png` after changes.

## Out of scope

- Production CIDRs / org naming
- Firewall Manager / Cloud WAN migration
- Polished SVG diagrams (ASCII placeholders for now)
