module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      logotype: false,
      productName: 'Example service'
    },
    footer:  {
      meta: {
          items: [

              {
                href: "#",
                text: "Privacy statement"
              },
              {
                href: "#",
                text: "Accessibility"
              },
              {
                href: "#",
                text: "Terms and conditions"
              },
              {
                href: "#",
                text: "Feedback"
              },
              {
                href: "https://github.com/vickytnz/govuk-header-footer",
                text: "Open-sourced code"
              }
            ],
            html: '<strong class="govuk-tag govuk-phase-banner__content__tag">Beta</strong>This is a new service assessed to the Service Standard - <a class="govuk-footer__link" href="/service-assessments">view assessment history for this service</a>'
  }
},
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-design-history-template/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-header-footer/'
  }
}
