import styled from "styled-components"

export const MainNavSocialBox = styled.div`
display: none;
@media (min-width: ${({ theme }) => theme.device.s}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  } 



`

export const MainNavIcon = styled.a`
color: ${({ theme }) => theme.colors.secondary};
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
    background: ${({ theme }) => theme.colors.secondary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

&:hover::after{
    width: 100%; 
    left: 0; 
}

svg {
    color: ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme }) => theme.transitions.primary};
}
&:hover svg {
    color: ${({ theme }) => theme.colors.third};

}
`