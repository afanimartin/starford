# Sanity CMS Setup

This project is wired to read CMS content from Sanity if the environment variables below are set.
If they are not set, it falls back to local JSON content in `content/`.

## 1) Create a Sanity project

Create a Sanity project/dataset and note:
- `projectId`
- `dataset`

## 2) Add environment variables (Netlify + local)

Set these variables:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION` (recommended: `2025-01-01`)
- `SANITY_USE_CDN` (`true` for production read-only)

## 3) Create document types in Sanity Studio

This site expects the following document types:

1. `newsPost`
- `title` (string)
- `date` (datetime)
- `category` (string)
- `featured` (boolean)
- `excerpt` (text)
- `href` (string, optional)
- `image` (image)

2. `homePage` (singleton)
- `hero.badge` (string)
- `hero.primaryCtaLabel` (string)
- `hero.secondaryCtaLabel` (string)
- `slides[]`
  - `headline` (string)
  - `sub` (text)
  - `image` (image)

3. `aboutPage` (singleton)
- `heroBadge` (string)
- `heroTitle` (string)
- `heroSubtitle` (text)
- `storyKicker` (string)
- `storyTitle` (string)
- `mission.title` (string)
- `mission.body` (text)
- `vision.title` (string)
- `vision.body` (text)

4. `admissionsPage` (singleton)
- `hero.badge` (string)
- `hero.title` (string)
- `hero.subtitle` (text)
- `keyDates[]`
  - `label` (string)
  - `value` (string)

## 4) Deploy

After env vars are added and content is published in Sanity, redeploy the site.

## Notes

- `cdn.sanity.io` is already allowed in `next.config.ts` for images.
- News/Home/About/Admissions pages are wired to Sanity with local fallback content.
