# FUSMO GitHub Pages Website

This package is ready for GitHub Pages.

## File structure

```text
index.html
style.css
script.js
images/
```

## How to insert images

Put your image files inside the `images` folder and use the exact filenames below, or edit the filenames in `index.html`.

Recommended filenames:

```text
images/hero-bg.jpg
images/marine-project.jpg
images/refit-repair.jpg
images/inspection.jpg
images/equipment-sourcing.jpg
images/design-engineering.jpg
images/us-navy-mro.jpg
images/mro-data.jpg
images/future-mobility.jpg
```

## Important GitHub image rules

1. GitHub is case-sensitive.
   - `Hero-bg.jpg` and `hero-bg.jpg` are different files.
2. Avoid Korean, spaces, and special characters in filenames.
   - Good: `us-navy-mro.jpg`
   - Risky: `미군 MRO 사진 1.jpg`
3. Use relative paths:
   - Good: `images/hero-bg.jpg`
   - Also good: `./images/hero-bg.jpg`
   - Risky at first: `/images/hero-bg.jpg`

## Where images are used

- Main hero background: `images/hero-bg.jpg`
- Service card backgrounds:
  - `images/marine-project.jpg`
  - `images/refit-repair.jpg`
  - `images/inspection.jpg`
  - `images/equipment-sourcing.jpg`
  - `images/design-engineering.jpg`
  - `images/us-navy-mro.jpg`
- Data/reference image area:
  - `images/mro-data.jpg`
- Future mobility background:
  - `images/future-mobility.jpg`

## GitHub Pages deployment

1. Upload all files to your GitHub repository.
2. Go to `Settings`.
3. Go to `Pages`.
4. Select `Deploy from a branch`.
5. Branch: `main`
6. Folder: `/root`
7. Save.
