# Aaryan Kakad

A personal site about the lockdown, self-learning, markets, ML, papers, gym, and leverage.

## Run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4237`.

## Verify

```bash
npm run typecheck
npm run build
```

`npm run build` exports the static site to `out/`.

## Deploy To GitHub Pages

This site is configured for a root GitHub Pages domain:

```text
https://aaryan-kakad.github.io
```

Use the repository `aaryan-kakad/aaryan-kakad.github.io`.

1. Push this folder to the `main` branch of that repo.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or run `Deploy to GitHub Pages` from the Actions tab.

The workflow builds with Node 22, runs TypeScript checks, exports the static site, and publishes `out/`.
