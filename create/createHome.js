const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage, homeURI } = options

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

      const path = index === 0 ? homeURI : `${homeURI}page/${index + 1}/`

      await actions.createPage({
        component: resolve(`./src/templates/homeArchive.js`),
        path: path,
        context: {
          firstId: firstNode.id,
          archivePath: homeURI,
          uri: path,
          archiveType: "home",
          offset: perPage * index,
          pageNumber: index + 1,
          totalPages: chunkedContentNodes.length,
          perPage,
        },
      })
    })
  )
}
