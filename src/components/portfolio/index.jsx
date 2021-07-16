import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"



/* Archive Page */

export const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PortfolioWrapper = styled.section`
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.border.primary};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem auto;

`



/* Single Page */


export const PortfolioHeader = styled.header`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 10%);
  z-index: 2;
`

export const PortfolioBlock = styled.div`
 height: 60px;
 width: 100%;
 background: ${({ theme }) => theme.colors.third};
`

export const PortfolioItemWrapper = styled.div`
  margin-top: 60px;
  background: ${({ theme }) => theme.colors.secondary};
  width: 90%;
  margin: auto;
  position: relative;
  height: 90vh;
  display: flex;
`

export const PortoflioImage = styled(GatsbyImage)`
 img {
  object-fit: contain !important;
 }

`
export const ImageBox = styled.div`
    display: flex;
    max-height: 100%;
`
