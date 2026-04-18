/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ojiva.ai",
  generateRobotsTxt: true,
  priority: 0.70,
  sitemapSize: 5000,
  exclude: ["/404", "/admin/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/platform"),
    await config.transform(config, "/sms"),
    await config.transform(config, "/whatsapp"),
    await config.transform(config, "/whatsapp-chatbot"),
    await config.transform(config, "/rcs"),
    await config.transform(config, "/voice"),
    await config.transform(config, "/blogs"),
    await config.transform(config, "/book-demo"),
    await config.transform(config, "/about"),
    await config.transform(config, "/support"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/privacy"),
    await config.transform(config, "/terms"),
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/404", "/admin"] },
    ],
    additionalSitemaps: [
      "https://ojiva.ai/sitemap.xml",
    ],
  },
};
