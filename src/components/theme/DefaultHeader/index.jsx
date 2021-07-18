import React from 'react'
import { HomeImage, HomeImageBox, HomeContent } from "./styles"
import { getImage } from "gatsby-plugin-image"

export const DefaultHeader = ({ headerContent, children, full }) => {


  if (!headerContent || headerContent === 0) return null

  const imageData = getImage(headerContent?.backgroundImage?.localFile.childImageSharp.gatsbyImageData)

  return (
    <HomeImageBox full={full}>
      <HomeImage image={imageData} />
      <HomeContent>{children}</HomeContent>
    </HomeImageBox>



  )
}
