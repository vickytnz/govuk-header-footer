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
                text: "Give feedback"
              }
            ],
            html: '<strong class="govuk-tag govuk-phase-banner__content__tag">Beta</strong>This is a new service assured to the Service Standard - view <a class="govuk-footer__link" href="/service-assessments">assurance history</a> and <a class="govuk-footer__link" href="https://github.com/vickytnz/govuk-header-footer"">source code</a>'
  }
},
    url:
      process.env.GITHUB_ACTIONS &&
      'https://vickytnz.github.io/govuk-header-footer/'
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
