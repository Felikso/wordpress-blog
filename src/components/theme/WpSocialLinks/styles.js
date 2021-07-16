import styled from "styled-components"

export const MainNavSocialBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: brown;
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

/* svg {
    fill: green;
    width: 100%;
} */

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

svg {
    color: white;
    fill: silver;
    transition: 1s;
}
&:hover svg {
    color: silver;
    fill: black;
}
`