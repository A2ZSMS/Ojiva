<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap — Ojiva AI</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8faff;
            color: #1a2b33;
            min-height: 100vh;
          }
          /* Header */
          .header {
            background: #0f172a;
            padding: 1.25rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 3px solid #25d366;
          }
          .header-brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
          }
          .header-logo {
            font-size: 1.3rem;
            font-weight: 800;
            color: #ffffff;
            letter-spacing: -0.02em;
          }
          .header-logo span { color: #25d366; }
          .header-badge {
            background: rgba(37,211,102,0.12);
            border: 1px solid rgba(37,211,102,0.3);
            color: #25d366;
            font-size: 0.72rem;
            font-weight: 700;
            padding: 0.25rem 0.7rem;
            border-radius: 50px;
            letter-spacing: 0.05em;
          }
          /* Container */
          .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2.5rem 1.5rem;
          }
          /* Stats bar */
          .stats {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          .stat {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 0.85rem 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }
          .stat-num {
            font-size: 1.5rem;
            font-weight: 800;
            color: #1B48E0;
          }
          .stat-label {
            font-size: 0.72rem;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          /* Section heading */
          .section-head {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #94a3b8;
            margin: 2rem 0 0.6rem;
            padding-bottom: 0.4rem;
            border-bottom: 1px solid #e2e8f0;
          }
          /* URL table */
          table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            margin-bottom: 0.5rem;
          }
          thead tr {
            background: #f1f5f9;
          }
          th {
            padding: 0.65rem 1rem;
            text-align: left;
            font-size: 0.7rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            border-bottom: 1px solid #e2e8f0;
          }
          td {
            padding: 0.7rem 1rem;
            font-size: 0.83rem;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f8faff; }
          .url-link {
            color: #1B48E0;
            text-decoration: none;
            font-weight: 500;
          }
          .url-link:hover { text-decoration: underline; }
          .priority-high   { color: #16a34a; font-weight: 700; }
          .priority-mid    { color: #d97706; font-weight: 600; }
          .priority-low    { color: #94a3b8; }
          .freq {
            display: inline-block;
            padding: 0.15rem 0.55rem;
            border-radius: 50px;
            font-size: 0.68rem;
            font-weight: 600;
            background: #f1f5f9;
            color: #475569;
          }
          /* Footer */
          .footer {
            text-align: center;
            padding: 2rem;
            font-size: 0.75rem;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
            margin-top: 2rem;
          }
          .footer a { color: #1B48E0; text-decoration: none; }
        </style>
      </head>
      <body>

        <div class="header">
          <a class="header-brand" href="https://www.ojiva.ai">
            <span class="header-logo">Ojiva <span>AI</span></span>
          </a>
          <span class="header-badge">XML SITEMAP</span>
        </div>

        <div class="container">

          <!-- Stats -->
          <div class="stats">
            <div class="stat">
              <span class="stat-num">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
              </span>
              <span class="stat-label">Total URLs</span>
            </div>
            <div class="stat">
              <span class="stat-num">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority = '1.0' or sitemap:priority = '0.9'])"/>
              </span>
              <span class="stat-label">High Priority</span>
            </div>
            <div class="stat">
              <span class="stat-num">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/blogs/')])"/>
              </span>
              <span class="stat-label">Blog Posts</span>
            </div>
            <div class="stat">
              <span class="stat-num">2026-05-13</span>
              <span class="stat-label">Last Updated</span>
            </div>
          </div>

          <!-- URL Table -->
          <div class="section-head">All Pages</div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Priority</th>
                <th>Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td style="color:#94a3b8;font-size:0.75rem;">
                    <xsl:value-of select="position()"/>
                  </td>
                  <td>
                    <a class="url-link" target="_blank">
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.9">
                        <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.7">
                        <span class="priority-mid"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td>
                    <span class="freq"><xsl:value-of select="sitemap:changefreq"/></span>
                  </td>
                  <td style="color:#64748b;font-size:0.78rem;">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

        </div>

        <div class="footer">
          <a href="https://www.ojiva.ai">ojiva.ai</a> ·
          This sitemap is auto-generated and submitted to Google Search Console.
          For crawlers: valid XML per <a href="https://www.sitemaps.org/protocol.html" target="_blank">sitemaps.org protocol</a>.
        </div>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
