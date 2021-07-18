import styled from "styled-components"

export const PostExcerpt = styled.footer`
    font-style: italic;
    text-align: right;
    padding: 20px;
`

export const PostArticle = styled.article`
    width: 80%;
    margin: 2rem auto;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.third};
    border: solid 4px ${({ theme }) => theme.colors.primaryLight};
    border-radius: ${({ theme }) => theme.border.primary};
`

export const PostTitle = styled.h2`
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