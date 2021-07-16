import React from "react"
import { getImage } from "gatsby-plugin-image"
import { PortfolioImg } from "./styles.js"

import { ModalImage } from "my/components"
import { ImageWrapper } from "./styles"



export const PortfolioItem = ({ item }) => {
  const imageData = getImage(item.featuredImage?.node?.localFile)
  if (!imageData) return null
  return (
    <ImageWrapper>
      <ModalImage currentImg={imageData} />
      <PortfolioImg alt={item.featuredImage.node.altText} image={imageData} />
    </ImageWrapper>
  )
}

