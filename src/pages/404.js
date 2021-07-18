import React from "react"
import { Layout } from "../components/theme"
import { graphql, useStaticQuery, Link } from "gatsby"

import { ContentWrapper, SectionButton, MainSlimWrapper } from "components/common"

import { DefaultHeader } from "components/theme"

const ErrorPage = () => {
  const { wpMain } = useStaticQuery(graphql`
        {
          wpMain(slug: {eq: "error-page"}) {
              header_background {
                backgroundImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
        }
      `)


  const bg = wpMain.header_background.backgroundImage

  return (

    <Layout>
      <DefaultHeader headerContent={bg} full>
        <ContentWrapper flex lessVisbale>
          <h2>Wybrana strona nie istnieje</h2>
          <p>Serdecznie zapraszam do strony głównej</p>
          <Link to="/"><SectionButton secondary>strona główna</SectionButton></Link>
        </ContentWrapper>
      </DefaultHeader>
      <MainSlimWrapper>

      </MainSlimWrapper>
    </Layout>
  )
}

export default ErrorPage;

