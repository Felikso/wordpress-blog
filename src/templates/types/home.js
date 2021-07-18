import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"

import { FeaturedMedia, Seo } from "components/common"
import { PostCategories, PostMeta, ContentTypePagination } from "components/post"

const home = ({ data }) => {
    const { nextPage, previousPage, page } = data
    const {
        title,
        uri,
        content,
        featuredImage,
        categories,
        excerpt,
        databaseId,
        author,
        date,
    } = page

    return (
        <Layout
            bodyClass={`post-template-default single single-post postid-${databaseId} single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support`}
        >
            <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} />

            <h2>home</h2>
        </Layout>
    )
}

export const query = graphql`
  query homeGallery($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPortfolio(id: { eq: $id }) {
      ...PortfolioContent
    }
    nextPage: wpPortfolio(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPortfolio(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default home;
