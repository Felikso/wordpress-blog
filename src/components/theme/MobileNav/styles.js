import styled from 'styled-components'

import { Link } from "gatsby"


export const BrandLink = styled(Link)`
  margin-left: 20px; 
  color: ${({ theme }) => theme.colors.secondary};

  h2 {
    margin: 0;
    font-size: clamp(.8rem,2vmax,2rem);
    line-height: 1rem;
  }

  h5 {
    margin: 0;
    font-size: clamp(0.125rem,1vmax,1rem);
    line-height: 1rem;
    font-style: italic;
  }

   @media (min-width: ${({ theme }) => theme.device.s}) {
    margin: 0;
  }  
`

export const MenuContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
`

export const TogglerBurgerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
`

export const MenuBar = styled.header`
  position: fixed;
  width: 100%;
  transition: background 300ms;
  top: 0;
  background: ${({ theme }) => theme.colors.primary};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primaryLight};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  margin-left: 20px;
  outline: thin-dotted;
  z-index: 11;

  &:focus{
    outline: none;
  }

  &:active{
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen, theme }) => (menuOpen ? theme.nav.burgerOpen : theme.nav.burgerClose)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

export const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  transition: 300ms;
  width: ${({ menuOpen }) => (menuOpen ? "60vw" : 0)};

  @media (min-width: ${({ theme }) => theme.device.l}) {
    width: ${({ menuOpen }) => (menuOpen ? "40vw" : 0)};
  }  

  ul {
    width: 100%;
    overflow: hidden;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};


    li {
      list-style: none;

      a {

        width: 100vw;
        text-align: center;


        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem 0.5rem 1rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    
        &:hover {
          background: ${({ theme }) => theme.colors.primaryLight};
          color: ${({ theme }) => theme.colors.secondary};
          padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
      }

      
    }
  } 
`
