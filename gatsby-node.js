const path = require(`path`)
const glob = require(`glob`)

const createBlog = require(`./create/createBlog`)
const createPortfolio = require(`./create/createPortfolio`)
const createContentTypes = require(`./create/createContentTypes`)
const createCategories = require(`./create/createCategories`)
const createAuthors = require(`./create/createAuthors`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

exports.createPages = async (props) => {
  /*   const { createPage } = props.actions */
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allAirtableJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const perPage = wpSettings.wp.readingSettings.postsPerPage || 10
  /*   const homeURI = "/" */
  const blogURI = "/blog"
  const portfolioURI = "/portfolio"
  const templates = getTemplates()



  await createContentTypes(props, { templates })
  await createBlog(props, { perPage, blogURI })
  await createPortfolio(props, { perPage, portfolioURI })
  /*   await createHome(props, { perPage, homeURI }) */
  /*   await createCategories(props, { perPage })
    await createAuthors(props, { perPage }) */



  /*   const component = path.resolve(`./src/customedTemplates/single-item.jsx`)
  
    wpSettings.allAirtableJson.edges.forEach(edge => {
      createPage({
        path: edge.node.slug,
        component,
        context: {
          slug: edge.node.slug,
        },
      })
    }) */
}


exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  createPage({
    ...page,
    context: {
      ...page.context,
    },
  })
}


const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// We do this, because the Avatar doesn't get handled as a File from the gatsby-source plugin yet. This might change in the future.
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WpAvatar: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.url

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
