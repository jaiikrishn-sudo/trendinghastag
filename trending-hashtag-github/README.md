# Trending Hashtag

Free hashtags for Instagram, Facebook and YouTube. A single static page: no backend, no database, no cookies, no tracking.

## Deploy on Cloudflare Pages (free, no card)
1. Push these files to a GitHub repo (`index.html` must be in the root).
2. Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Pick the repo. Leave build command and output directory empty. Save and Deploy.

## Domain
The site address is set to https://trendinghastag.com in `index.html`, `robots.txt` and `sitemap.xml`. If the main domain ever changes, update those three files.

## Keep the site data-free
Do not add analytics, ads, fonts from other sites or embeds without first updating the Privacy Policy inside `index.html`.

## Hashtags update karna
See HOW-TO-UPDATE.md. All hashtags live in hashtags.js.
