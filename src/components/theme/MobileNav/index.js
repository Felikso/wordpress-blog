import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"



import { TogglerBurgerBox, MenuBar, MenuIconContainer, MenuIcon, MenuLinks, MenuContentBox, BrandLink } from "./styles"

import { Toggler, SocialLinks } from 'components/theme';

import { supportsPassiveEvents } from 'detect-it';



export const MobileNav = ({ links }) => {
  const { wpMenu, wp, allWpNavpage, allWpContentType } = useStaticQuery(graphql`
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

    allWpNavpage {
      nodes {
        id
        uri
        title
        side_menu {
          hide
          show
        }
        slug
      }
    }

    allWpContentType(filter: { graphqlPluralName: { ne: "mediaItems" } }) {
      nodes {
        graphqlSingleName
      }
    }
  }
`)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  const [menuOpen, toggleMenuOpen] = useState(false)

  const brandName = wp.generalSettings.title
  const slogan = wp.generalSettings.description

  console.log(allWpContentType)




  return (
    <MenuBar >
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
            {allWpNavpage.nodes.map((menuItem, i) => {

              return (
                menuItem.side_menu.show &&
                <li>
                  <Link id={menuItem.id}
                    key={menuItem.id} to={`/${menuItem.slug}`}>
                    {menuItem.title}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio">
                Portfolio
              </Link>
            </li>

          </ul>
          {/*  <ul>
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

          </ul> */}
        </MenuLinks>
      </TogglerBurgerBox>
    </MenuBar>
  )
}
