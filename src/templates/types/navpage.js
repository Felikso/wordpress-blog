import React from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"
import { DefaultHeader } from "components/theme"

import { MainWrapper, Seo } from "components/common"
import { PageArticle, PageTitle, ContentTypePagination } from "components/page"

const navpage = ({ data }) => {
    const { navpage } = data
    console.log(navpage)
    const { title, content, featuredImage, uri } = navpage
    console.log(featuredImage.node)
    console.log('featuredImage.node')
    return (
        <Layout>
            <Seo title={title} /* description={excerpt}  */ /* socialImage={featuredImage?.node}  */ uri={uri} />
            <DefaultHeader headerContent={featuredImage.node} />
            <MainWrapper>
                <PageArticle>
                    <header>
                        <PageTitle
                            dangerouslySetInnerHTML={{ __html: title }}>

                        </PageTitle>
                    </header>

                    <div
                        className="entry-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </PageArticle>
            </MainWrapper>
        </Layout>
    )
}

export const query = graphql`
  query navpage($id: String!) {
    navpage: wpNavpage(id: { eq: $id }) {
      ...NavpageContent
    }
  }
`

export default navpage;
