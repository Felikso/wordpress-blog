import styled from "styled-components"
import { Link } from 'gatsby'

export const MainNavLinkBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
`

export const MainNavSocialBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
`

export const MainNavIcon = styled.a`
color: white;
color: #fff;
text-transform: uppercase;
text-decoration: none;
letter-spacing: 0.15em;

display: inline-block;
padding: 15px 20px;
position: relative;

&::after{
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

&:hover::after{
    width: 100%; 
    left: 0; 
}
`

export const MainNavLink = styled(Link)`
    color: red;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    
    display: inline-block;
    padding: 15px 20px;
    position: relative;

    &::after{
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover::after{
        width: 100%; 
        left: 0; 
    }
`


export const MainNavBox = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 10vh;
    background: brown;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 960px) {
        flex-direction: column;
      }

`
