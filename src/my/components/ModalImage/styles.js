
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import ReactModal from "react-modal"

import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus";

export const ModalImageBox = styled.div`
    position: relative;
    display: grid;
    max-height: 95vh;
    max-width: 80vh;

`

export const ModalGatsbyImage = styled(GatsbyImage)`
/*     max-height: 90%;
    width: auto; */
`


export const ModalContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`
export const ModalBox = styled(ReactModal)`
    transition: 2s;
    display: flex;
    position: relative;
/*     height: 100vh;
    width: 100%; */
`

export const CloseIcon = styled(AiFillCloseCircle)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, 20px);

    color: white;
    font-size: 30px;
    transition: 1s;
    opacity:.8;
    cursor: pointer;

    &:hover{
        color: black;
        opacity: .7;
    }

    @media (min-width:768px) {
        font-size: 50px;
    }


`

export const OpenIcon = styled(FaSearchPlus)`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    color: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.device.m}){
        width: unset;
        height: unset;
        color: white;
        transform: translate(-20px, 20px);
        font-size: 30px;
        transition: 1s;
        opacity:.8;
        font-size: 50px;

        &:hover{
            color: black;
            opacity: .7;
        }
    }

`