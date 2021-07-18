import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"

import { FeaturedMedia, Seo } from "components/common"
import { PostMeta, PostPaginator, SingleArticle, SinglePostHeader, SinglePostContent } from "components/post"

/* import "styles/postStyle.css" */


const blog = ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    uri,
    content,
    featuredImage,
    excerpt,
    author,
    date,
  } = page

  return (
    <Layout >
      <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} />

      <SingleArticle
      >
        <SinglePostHeader>
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <PostMeta title={title} author={author} date={date} />

        </SinglePostHeader>

        <FeaturedMedia header image={featuredImage} />

        <SinglePostContent
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <PostPaginator
          previousPage={previousPage}
          nextPage={nextPage}
          contentType={"Post"}
        />
      </SingleArticle>
    </Layout>
  )
}

export const query = graphql`
  query blog($id: String!, $nextPage: String, $previousPage: String) {
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

export default blog;
