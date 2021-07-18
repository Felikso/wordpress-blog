import React from "react"
import { getImage } from "gatsby-plugin-image"

import { FeatuedImage } from "./styles"

export const FeaturedMedia = ({ image, header }) => {
    const imageData = getImage(image?.node?.localFile)

    if (!imageData) return null

    return (

        <FeatuedImage header={header} alt={image.node.altText} image={imageData} />

    )
}

