import React from 'react'
import { HomeImage, HomeImageBox } from "./styles"
import { getImage } from "gatsby-plugin-image"

export const DefaultHeader = ({ headerContent }) => {


  if (!headerContent?.main_content || headerContent.main_content === 0) return null

  const imageData = getImage(headerContent?.main_content?.backgroundImage?.localFile.childImageSharp.gatsbyImageData)

  return (
    <HomeImageBox>
      <HomeImage image={imageData} />
    </HomeImageBox>



  )
}
