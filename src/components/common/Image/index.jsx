import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Image = ({ image }) => {
    const imageData = getImage(image?.node?.localFile)

    if (!imageData) return null

    return (

        <GatsbyImage alt={image.node.altText} image={imageData} />

    )
}

