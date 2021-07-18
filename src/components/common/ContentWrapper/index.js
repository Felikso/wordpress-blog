import styled from "styled-components"

export const ContentWrapper = styled.section`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
/*   width: calc(100% - 80px);
  margin: 1rem auto; */
  border-radius: ${({ theme }) => theme.border.primary};
  padding: 20px;
  border: solid 4px ${({ theme }) => theme.colors.primaryLight};

  ${({ flex }) =>
    flex &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`}

    ${({ lessVisbale, theme }) =>
    lessVisbale &&
    `
    background: ${theme.colors.secondaryLight};
    `}
  
  @media (min-width: ${({ theme }) => theme.device.m}){
/*       width: 60%;
      margin: unset;
      margin: 30px; */


  }
  
`