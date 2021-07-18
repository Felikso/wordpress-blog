import styled from "styled-components"

export const PageExcerpt = styled.footer`
    font-style: italic;
    text-align: right;
    padding: 20px;
`

export const PageArticle = styled.article`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.third};
    border: solid 4px ${({ theme }) => theme.colors.primaryLight};
    border-radius: ${({ theme }) => theme.border.primary};
    padding: 10px;
    margin: 2rem auto;
    width: calc(100% - 20px);

    @media (min-width: ${({ theme }) => theme.device.m}){
        padding: 3rem 5rem;
        width: calc(100% - 10rem);
    }
`

export const PageTitle = styled.h2`
    text-align: center;
    margin: 2rem auto;

    a{
        color: ${({ theme }) => theme.colors.primary};
        transition: ${({ theme }) => theme.transitions.primary};
    }

    a:hover{
        color: ${({ theme }) => theme.colors.primaryLight};
    }

`