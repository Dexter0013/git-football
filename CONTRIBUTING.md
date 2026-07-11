# Contributing to GitFut

Thanks for wanting to help scout GitHub's finest ⚽ — bug fixes, new playstyles, sharper scoring, and docs are all welcome.

## Getting started

GitFut is a [Next.js](https://nextjs.org) (App Router) app in TypeScript, styled with Tailwind. You'll need **Node 20+** and **npm**.

```bash
git clone https://github.com/Dexter0013/git-football.git
cd git-football
npm install
npm run dev          # http://localhost:3000
```

Out of the box it runs on a handful of baked sample profiles (Torvalds, ThePrimeagen, …), so you can build and click around **without any secrets**.

### Environment (optional)

Create a `.env.local` only if you want live scouting or the counter:

```bash
# Live GitHub scouting (GraphQL). Use a fine-grained, READ-ONLY token with
# public-repo access — no write scopes are ever needed. Without it, the app
# serves the baked sample cards.
GITHUB_TOKEN=github_pat_xxx

# Optional: scout counter + card cache. The app is fully functional without it,
# and won't touch a remote Redis you can't reach — just leave it unset.
REDIS_URL=redis://localhost:6379
```

## Before you open a PR

Run what CI runs, plus the tests:

```bash
npm run lint      # eslint            (CI runs this)
npm run build     # types + prod build (CI runs this)
npm test          # vitest unit tests (in tests/)
```

- **Tests** live in `tests/` (vitest). Please add or adjust tests for scoring, parsing, or any pure logic you touch.
- **Types** are strict — the build fails on type errors.

## Conventions

- **Commits**: [Conventional Commits](https://www.conventionalcommits.org) — e.g. `feat(scoring): …`, `fix(og): …`, `docs: …`.
- **Branches**: branch off `master`, open your PR against `master`.
- **Style**: match the surrounding code; comments explain the *why*, not the *what*. eslint settles formatting.
- Keep PRs focused. For anything visual (cards, OG images), a before/after screenshot is gold.

## Ideas & bugs

Open an [issue](https://github.com/Dexter0013/git-football/issues) (there are templates). Good places to start: new playstyles/archetypes, scoring tweaks, language-logo coverage, accessibility, and card/OG rendering.

Found a security issue? Please **don't** open a public issue — see [SECURITY.md](./SECURITY.md).

## Licensing

By contributing, you agree that your contributions are licensed under the project's [LICENSE](./LICENSE).
