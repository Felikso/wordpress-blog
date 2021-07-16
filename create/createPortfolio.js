const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage, portfolioURI } = options

  const { data } = await graphql(/* GraphQL */ `
    {
      allWpPortfolio(sort: { fields: modifiedGmt, order: DESC }) {
        nodes {
          uri
          id
        }
      }
    }
  `)

  const chunkedContentNodes = chunk(data.allWpPortfolio.nodes, perPage)

  await Promise.all(
    chunkedContentNodes.map(async (nodesChunk, index) => {
      const firstNode = nodesChunk[0]

      const path = index === 0 ? portfolioURI : `${portfolioURI}page/${index + 1}/`

        await actions.createPage({
        component: resolve(`./src/templates/portfolioArchive.js`),
        path: path,
        context: {
          firstId: firstNode.id,
          archivePath: portfolioURI,
          uri: path,
          archiveType: "portfolio",
          offset: perPage * index,
          pageNumber: index + 1,
          totalPages: chunkedContentNodes.length,
          perPage,
        },
      })
    })
  )
}
