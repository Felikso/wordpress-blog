import styled from "styled-components"

export const SinglePostContent = styled.section`
    padding: 20px;

    h4 {
        text-align: center;
        line-height: 3rem;
    }

    h6 {
        text-align: right;
        font-style: italic;
        color: ${({ theme }) => theme.colors.primaryLight};
        margin: 2rem 0;
        letter-spacing: 3px;
    }

    a {
        color: ${({ theme }) => theme.colors.primaryLight};
        transition: ${({ theme }) => theme.transitions.primary};
    }

    a:hover {
        color: ${({ theme }) => theme.colors.primary};
    }


    @media (min-width: ${({ theme }) => theme.device.s}){
        padding: 3rem;

        h1,
        h2,
        h3,
        h4,
        h5,
        p{
            padding: 0 40px;
        }
  
    }

    blockquote  {
        text-align: center;
        position: relative;
        margin: 5rem 0;
        em {
            font-size: clamp(0.75rem,2.5vmax,2.5rem);

        }

      }

    blockquote:after{
        content: "";
        background:  ${({ theme }) => theme.colors.primaryLight};
        height: 10px;
        width: 65%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0, -10px);
    }

    blockquote:before{
        content: "";
        background:  ${({ theme }) => theme.colors.primaryLight};
        height: 10px;
        width: 65%;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(0, 10px);
    }


    figure {
        margin: auto;
        text-align: center;


        figcaption {
            margin: auto;
            text-align: center;
        }
    }
`

export const SingleArticle = styled.article`
    margin-top: 60px;
    background: ${({ theme }) => theme.colors.third};
    color: ${({ theme }) => theme.colors.secondary};
`

export const SinglePostHeader = styled.article`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.third};
    padding: 20px;
    text-align: center;
`