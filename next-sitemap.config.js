/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://h3-studios.fr",
  generateRobotsTxt: true,
  outDir: "out",
};
