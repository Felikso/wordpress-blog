import styled from "styled-components"
import { Link } from 'gatsby'

const BannerButton = styled.button`
  display: block;
  border: 4px solid  ${({ theme }) => theme.colors.secondary};
  background: transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: .7rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  border: 4px solid  ${({ theme }) => theme.colors.primary};
/*   margin-bottom: 1rem; */
  transition: ${({ theme }) => theme.transitions.primary};
  border-radius: ${({ theme }) => theme.border.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.mainWhite};
    color:  ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.device.m}){
    font-size: 1.5rem;
}
`

const SectionButton = styled(BannerButton)`
  color:  ${({ theme }) => theme.colors.secondary};
  ${({ secondary, theme }) =>
    secondary &&
    `
  color: ${theme.colors.third};
  `}
  border: 4px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.primary};


  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border: 4px solid  ${({ theme }) => theme.colors.secondary};
  }
`

const MenuButton = styled(SectionButton)`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
`

const LinkButton = styled(Link)`

display: block;
color: ${({ theme }) => theme.colors.primary};
background: transparent;
padding: 0.5rem 1rem;
text-align: center;
text-transform: uppercase;
font-size: 1.1rem;
letter-spacing: 0.2rem;
font-weight: 700;
border: 4px solid  ${({ theme }) => theme.colors.secondary};
/* margin-bottom: 1rem; */
position: absolute;
top: 0;
left: 0;
text-decoration: none;
transition: ${({ theme }) => theme.transitions.primary};

&:hover {
  background:  ${({ theme }) => theme.colors.mainWhite};
  color: ${({ theme }) => theme.colors.fourthColor};
  cursor: pointer;
}
`

export { BannerButton, SectionButton, MenuButton, LinkButton }
