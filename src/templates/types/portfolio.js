import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"

import { getImage } from "gatsby-plugin-image"
import { Paginator } from "components/portfolio"
import { Seo } from "components/common"
import { PortfolioHeader, PortfolioItemWrapper, PortoflioImage, ImageBox, PortfolioBlock } from "components"

const portfolio = ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    uri,
    featuredImage,
    excerpt,
  } = page
  const imageData = getImage(featuredImage?.node?.localFile)
  return (
    <Layout>
      <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} />
      <PortfolioBlock />
      <PortfolioItemWrapper>
        <PortfolioHeader>
          <h1>{title}</h1>
        </PortfolioHeader>
        <ImageBox>
          <PortoflioImage alt={featuredImage.node.altText} image={imageData} />
        </ImageBox>
        <Paginator
          previousPage={previousPage}
          nextPage={nextPage}
          contentType={"Portfolio"}
        />
      </PortfolioItemWrapper>
    </Layout>
  )
}

export const query = graphql`
  query gallery($id: String!, $nextPage: String, $previousPage: String) {
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

export default portfolio;

