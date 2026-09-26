<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All invitation copy (names, parents, addresses, date, venue) is edited in one
  place: `src/lib/event.ts`. Components render from `EVENT`; do not hardcode a
  name, date or venue in a component, so a family correction stays a single edit.
  Why: the families will revise spelling and addresses repeatedly.
- Design tokens live in `src/styles.css` only; components use token utilities
  (`bg-gold`, `text-parchment`) or the named classes (`.foil`, `.ornate`,
  `.btn-gold`). Why: keeps the single dark emerald/gold theme consistent.
- Decorative inline styles must serialise identically on server and client
  (fixed-decimal strings, no `Math.random()`/`Date.now()` at render).
  Why: those caused a React hydration mismatch.
