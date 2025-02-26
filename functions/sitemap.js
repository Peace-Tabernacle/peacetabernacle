exports.handler = async function() {
        const siteUrl = "https://peace-tabernacle.netlify.app";

        // Fetch all pages dynamically (if using an API or CMS)
        // For now, manually list static pages
        const pages = [
            "/",
            "/about.html",
            "/news.html",
            "/calendar.html",
            "/contact.html",
            // Add more pages as needed
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${siteUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("")}
    </urlset>`;
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
      },
      body: xml,
    };
  };