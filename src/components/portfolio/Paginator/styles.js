import styled from "styled-components"
import { Link } from "gatsby"

import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";

export const PaginatorLinkLeft = styled(Link)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-10%, -50%);
`

export const PaginatorLinkRight = styled(Link)`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(10%, -50%);
`

/* export const PaginatorNav = styled.nav`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    justify-content: ${(previousPage) => previousPage ? 'space-between' : 'flex-end'};

` */

export const PaginatorArrowLeft = styled(IoIosArrowForward)`
    font-size: 40px;
    color: white;

`




export const PaginatorArrowRight = styled(IoIosArrowBack)`
    font-size: 40px;
    color: white;
`