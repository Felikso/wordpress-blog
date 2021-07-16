import React, { useEffect, useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"



import { TogglerBurgerBox, MenuBar, MenuIconContainer, MenuIcon, MenuLinks, MenuContentBox, BrandLink } from "./styles"

import { Toggler, UniversalLink, SocialLinks } from 'components/theme';

import { supportsPassiveEvents } from 'detect-it';



export const MobileNav = ({ links }) => {
  const { wpMenu, wp } = useStaticQuery(graphql`
  {
    wpMenu(slug: { eq: "extended" }) {
      name
      menuItems {
        nodes {
          label
          url
          databaseId
          connectedNode {
            node {
              ... on WpContentNode {
                uri
              } 
            }
          }
        }
      }
    }

    wp {
      generalSettings {
        title
        description
      }
    }
  }
`)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  const [menuOpen, toggleMenuOpen] = useState(false)
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  const brandName = wp.generalSettings.title
  const slogan = wp.generalSettings.description

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    if (supportsPassiveEvents) {
      // passive events are supported by the browser
      document.addEventListener('scroll', handleScroll, {
        capture: false,
        passive: true,
      });
    } else {
      // passive events are not supported by the browser
      document.addEventListener('scroll', handleScroll, false);
    }

    return () => {

      document.removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [])

  return (
    <MenuBar background={background}>
      <MenuContentBox>
        <SocialLinks isExpanded />
        <BrandLink to="/">
          <h2>{brandName}</h2>
          <h5>{slogan}</h5>
        </BrandLink>
      </MenuContentBox>

      <TogglerBurgerBox>
        <Toggler />
        <MenuIconContainer>
          <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
            <div />
            <div />
            <div />
          </MenuIcon>
        </MenuIconContainer>

        <MenuLinks menuOpen={menuOpen}>
          <ul>
            {wpMenu.menuItems.nodes.map((menuItem, i) => {
              const pathItem = menuItem?.connectedNode?.node?.uri ?? menuItem.url
              const path = pathItem.replace('http://', '/');
              const itemId = "modal-menu-item-" + menuItem.databaseId

              return (
                <li>
                  <Link id={itemId}
                    key={itemId} to={path}>
                    {menuItem.label}
                  </Link>
                </li>
              )
            })}

          </ul>
        </MenuLinks>
      </TogglerBurgerBox>
    </MenuBar>
  )
}
