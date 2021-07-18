import styled from "styled-components"
import { Link } from "gatsby"

import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";

export const PostPaginatorLinkLeft = styled(Link)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-10%, -50%);
`

export const PostPaginatorLinkRight = styled(Link)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(10%, -50%);
`

export const PostPaginatorNav = styled.nav`
    position: relative;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.third};
    height: 200px;

    a {
        color: ${({ theme }) => theme.colors.primary};
        transition: ${({ theme }) => theme.transitions.primary};
    }

    a:hover {
        color: ${({ theme }) => theme.colors.primaryLight};
    }


`

export const PostPaginatorArrowLeft = styled(IoIosArrowForward)`
    font-size: 40px;
/*     color: white; */

`




export const PostPaginatorArrowRight = styled(IoIosArrowBack)`
    font-size: 40px;
/*     color: white; */
`