import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  margin: auto;
  align-items: center;
  grid-gap: 1rem;
`


export const MainSlimWrapper = styled(MainWrapper)`
  @media (min-width: ${({ theme }) => theme.device.m}){
      margin: unset;
      width: 60%;
      margin: 20px;

  }
`