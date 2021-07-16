import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"
import Seo from "../components/Seo"

import ArchivePagination from "../components/ArchivePagination"
import { DefaultHeader } from "components/theme"
import { PostPreview } from "components/post"

const Archive = (props) => {
  const {
    data: {
      allWpBlog: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivePath, uri },
  } = props

  return (
    <Layout>
      <Seo title="Home" description="Welcome to the Twenty Nineteen Theme." uri={uri} />
      <DefaultHeader headerContent={props.data.wpMain} />
      {nodes &&
        nodes.map((post, index) => {
          return (
            <PostPreview
              key={index}
              post={post}
              isLast={index === nodes.length - 1}
            />
          )
        })}

      <ArchivePagination {...pageInfo} archivePath={archivePath} />
    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpBlog(
      limit: $perPage
      skip: $offset
      filter: {
        author: {
          node: { databaseId: { eq: $userDatabaseId } }}
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...BlogPreviewContent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
    wpMain(slug: {eq: "blog-page"}) {
      main_content {
        backgroundImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        heroText
      }
    }
  }
`

export default Archive
