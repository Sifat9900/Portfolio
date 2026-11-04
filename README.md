# Mohammed Sifat — Portfolio (Next.js)

The portfolio design converted to **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 20.9 or newer.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero, projects (filter tabs, first 6), services, process tour, about, FAQ, footer |
| `/projects` | All projects with filter tabs and search |
| `/projects/[id]` | Case study: overview, problem/solution, process, style guide, gallery, page tour, related and next project |

Every case study is pre-rendered at build time (`generateStaticParams`), so the site deploys as static pages on Vercel or any Node host.

## Where to edit

- `data/projects.ts` — all projects: card text, case-study copy, colours, palette and gallery images. The array order is the "Next project" order; `cardOrder` sets the order on the home and All projects pages.
- `data/home.ts` — services, process steps, about cards, experience/education, toolbox, FAQ.
- `data/site.ts` — name, email and social links (Behance, Dribbble and LinkedIn are still placeholder URLs).
- `app/globals.css` — design tokens (colours, fonts, breakpoints, animations) in the `@theme` block.
- `public/images/<project-id>/` — thumbnails (`thumb.jpg`) and full-page screens.

To add a project, put its images in `public/images/<id>/` and add an entry to `projects` and `cardOrder` in `data/projects.ts`. A project without `img` gets a branded mock-up thumbnail, and one with an empty `gallery` shows placeholder phone screens.

## Notes

- Inter and Manrope are self-hosted through Fontsource, so builds don't depend on Google Fonts.
- Set `NEXT_PUBLIC_SITE_URL` to your live domain so social preview images get absolute URLs.
# Portfolio
