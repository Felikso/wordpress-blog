import React from "react"
import { Layout } from "../components/theme"
import { graphql, useStaticQuery, Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ContentWrapper, SectionButton, MainSlimWrapper } from "components/common"

import { DefaultHeader } from "components/theme"

import styled from "styled-components"


const InexPage = () => {
  const { wpMain, allWpPortfolio } = useStaticQuery(graphql`
        {
          wpMain(slug: {eq: "home-page"}) {
            content
            home_page {
                text
                heading
              }
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
          

          allWpPortfolio(limit: 3) {
            edges {
              node {
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                      name
                    }
                  }
                }
                title
                uri
              }
            }
          }
        }
      `)


  const content = wpMain.home_page

  const innerText = wpMain.content

  const bg = wpMain.main_content

  const samplePortfolio = allWpPortfolio.edges
  return (

    <Layout>
      <DefaultHeader headerContent={bg} />
      <MainSlimWrapper>
        <ContentWrapper>
          <h3>{content.heading}</h3>
          <div dangerouslySetInnerHTML={{ __html: innerText }} />


        </ContentWrapper>
        <Link to="/portfolio"><SectionButton>Portfolio</SectionButton></Link>
        <SampleBox>

          {
            samplePortfolio.map(({ node }, i) => {
              const img = getImage(node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
              return (
                <SampleImgBox>
                  <SampleImg image={img} />
                  <Link to={node.uri}>{node.title}</Link>
                </SampleImgBox>
              )
            })
          }
        </SampleBox>
      </MainSlimWrapper>
    </Layout>
  )
}

export default InexPage;

const SampleBox = styled(ContentWrapper)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const SampleImg = styled(GatsbyImage)`
    border-radius: ${({ theme }) => theme.border.primary};
`

const SampleImgBox = styled.div`
  position: relative;
  display: flex;
  border-radius: ${({ theme }) => theme.border.primary};

  a {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    background: rgba(255,255,255,.5);
    font-size: 14px;
    border-radius: ${({ theme }) => theme.border.primary};
  }
`
