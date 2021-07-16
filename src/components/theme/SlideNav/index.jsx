import React from "react"
import CloseIcon from "../../../assets/svg/close.inline.svg"
import { graphql, useStaticQuery } from "gatsby"
import stopPropagation from "../../../utils/stop-propagation"
import { UniversalLink, SocialMenu } from "../index"

import "./style.css"

export const SlideNav = ({ isActive, toggleBackdrop }) => {
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

    return (
        <div id="nav-container">
            <div class="bg"></div>
            <div class="button" tabindex="0">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
            <div id="nav-content" tabindex="0">
                <ul>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">Services</a></li>
                    <li><a href="#0">Blog</a></li>
                    <li><a href="#0">About</a></li>
                    <li><a href="#0">Contact</a></li>
                    <li class="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

