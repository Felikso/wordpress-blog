import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const FeatuedImage = styled(GatsbyImage)`
    height: 200px;
    width: 100%;
    ${({ header }) =>
        header &&
        `
    height: 400px;
  `
    }

    @media (min-width: ${({ theme }) => theme.device.s}){
        max-height: 400px;
        ${({ header }) =>
        header &&
        `
        height: 600px;
      `
    }
    }
`