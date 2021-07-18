import styled from "styled-components"

export const MetaBox = styled.section`
`
export const MetaUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;


    @media (min-width: ${({ theme }) => theme.device.s}){
        flex-direction: row;
        grid-gap: 3rem;
  
    }

    li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    @media (min-width: ${({ theme }) => theme.device.s}){
        font-size: 40px;
  
    }
    }
`