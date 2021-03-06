import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"

import { FeaturedMedia, Seo } from "components/common"
import { PostCategories, PostMeta, ContentTypePagination } from "components/post"


const post = ({ data }) => {
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

      <article
        className={`post-${databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${databaseId}`}
      >
        <header className="entry-header has-text-align-center header-footer-group">
          <div className="entry-header-inner section-inner medium">
            <PostCategories categories={categories} />
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
              className="intro-text section-inner max-percentage small"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <PostMeta title={title} author={author} date={date} />
          </div>
        </header>

        <FeaturedMedia image={featuredImage} />

        <div className="post-inner thin">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="section-inner">
          <ContentTypePagination
            previousPage={previousPage}
            nextPage={nextPage}
            contentType={"Post"}
          />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpBlog(id: { eq: $id }) {
      ...BlogContent
    }
    nextPage: wpBlog(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpBlog(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default post;
