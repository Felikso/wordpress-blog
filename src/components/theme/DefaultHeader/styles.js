import styled from "styled-components"

import { GatsbyImage } from "gatsby-plugin-image"

export const HomeImageBox = styled.section`
    width: 100%;
    height: 50vh;
    position: relative;
    margin-top: 60px;

    ${({ full }) =>
        full &&
        `
   height: 100vh;
	`}
`

export const HomeImage = styled(GatsbyImage)`
        width: 100%;
        height: 100%;
        position: absolute;
`
export const HomeContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`