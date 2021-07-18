import styled from "styled-components"


export const TitleWrapper = styled.div`
  text-align: center;

  .subtitle {
    font-family: ${({ theme }) => theme.textStyle.textFamily};
    font-style: italic;
    letter-spacing: ${({ theme }) => theme.textStyle.letterSpacing};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.fourthColor};
  }

  .title {
    font-size: 2rem;
    text-transform: uppercase;
  }

  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.colors.mainOrange}; 
    margin: 0.5rem auto;
  }
`
