# How to update the hashtags (Trending Hashtag)

There is no backend or database. All hashtags live in one file: **hashtags.js**

## Update from GitHub (easiest)
1. Open your GitHub repo and click `hashtags.js`.
2. Click the pencil (Edit) icon at the top right.
3. Change the tags. Format:
   G("Group name", "tags for all platforms", "extra Instagram tags", "extra Facebook tags", "extra YouTube tags"),
   - Separate tags with a space, no # sign.
   - Do not remove the commas or quotes.
4. Click **Commit changes**. Cloudflare Pages redeploys the site in 1-2 minutes.

## Add a new category
Copy a whole `{id:"...",name:"...",groups:[ ... ]},` block in `hashtags.js`, change the id and name, and fill in its 4 groups.

## Other changes
- Contact email, site name, policy date: in `index.html`, in the `SITE` block near the top.
- Domain: replace `YOUR-DOMAIN.com` in `index.html`, `robots.txt` and `sitemap.xml`.
