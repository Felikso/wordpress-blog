import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ImageWrapper = styled.div`
    position: relative;
    background: red;
    display: flex;
    margin: 1em auto;
    border-radius: ${({ theme }) => theme.border.primary};
    opacity: .8;
    transition: ${({ theme }) => theme.transitions.primary};

    &:hover{
        opacity: 1;
    }
`

export const PortfolioImg = styled(GatsbyImage)`
    width: 25vw;
    height: auto;
    border-radius: ${({ theme }) => theme.border.primary};
`