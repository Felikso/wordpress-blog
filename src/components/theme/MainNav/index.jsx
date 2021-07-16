import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { RiMessengerLine } from "@react-icons/all-files/ri/RiMessengerLine";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

import stopPropagation from "../../../utils/stop-propagation"
import { UniversalLink, SocialMenu } from "../index"

import { MainNavBox, MainNavLink, MainNavIcon, MainNavSocialBox, MainNavLinkBox } from "./styles"

import { Toggler } from "components/theme"
export const MainNav = (props) => {
  const { wpMenu } = useStaticQuery(graphql`
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
  }
`)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null


  const navIcons = [
    { icon: (<FiFacebook />), title: "skontaktuj się przez facebook;a", link: "#" },
    { icon: (<FiInstagram />), title: "skontaktuj się przez instagrama", link: "#" },
    { icon: (<FiPhoneCall />), title: "skontaktuj się przez telefon", link: "#" },
    { icon: (<RiMessengerLine />), title: "skontaktuj się przez Messenger'a", link: "#" },
    { icon: (<FaWhatsapp />), title: "skontaktuj się przez Whatsapp'a", link: "#" },
  ]

  const links = [
    {
      id: 0,
      path: "/",
      name: "start",
    },
    {
      id: 1,
      path: "/oferta/",
      name: "oferta",
    },
    {
      id: 2,
      path: "/o-nas/",
      name: "o nas",
    },
    {
      id: 3,
      path: "/kontakt/",
      name: "kontakt",
    },
  ]


  return (



    <MainNavBox>

      <MainNavSocialBox>
        {
          navIcons.map((item, i) => (
            <MainNavIcon title={item.title} href={item.link}>
              {item.icon}
            </MainNavIcon>
          ))
        }
      </MainNavSocialBox>

      <MainNavLinkBox>
        {/*         {
          links.map((item, i) => (
            <MainNavLink key={item.i} to={item.path}>
              {item.name}
            </MainNavLink>
          ))
        } */}
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const pathItem = menuItem?.connectedNode?.node?.uri ?? menuItem.url
          const path = pathItem.replace('http://', '/');
          /*           const path = menuItem?.connectedNode?.node?.uri ?? menuItem.label */
          const itemId = "modal-menu-item-" + menuItem.databaseId

          console.log(path)

          return (
            <>
              <MainNavLink id={itemId}
                key={itemId} to={path}>
                <UniversalLink
                  to={path}
                  activeClassName={
                    "current-menu-item current_page_item"
                  }
                >
                  {menuItem.label}
                </UniversalLink>
              </MainNavLink>
            </>
          )
        })}
        <Toggler />
      </MainNavLinkBox>

    </MainNavBox>
  )
}
