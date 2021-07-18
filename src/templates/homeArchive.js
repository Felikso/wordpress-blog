import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"
import styled from "styled-components"
import { PortfolioItem, Wrapper, Title, SectionButton, MenuButton } from "components"

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.categories.nodes[0].name
    })

    let tempCategories = []
    tempItems.map(item => {
        tempCategories.push(item)
        tempCategories = tempCategories.filter(onlyUnique);

    })

    let categories = Array.from(tempCategories)
    categories = ["wszystkie", ...categories]
    return categories
}

const HomeArchive = (props) => {
    const {
        data: {
            allWpPortfolio: { nodes, pageInfo },
        },
        pageContext: { PortfolioArchiveType, PortfolioArchivePath, archivePath, uri },
    } = props

    const bg = props.data.wpMain.main_content

    const [menuItems, setMenuItems] = useState(nodes)
    const [displayedItems, setDisplayedItems] = useState(nodes)
    const [currentCategory, setCurrentCategory] = useState("wszystkie")
    const [categories, setCategories] = useState(getCategories(nodes))


    const handleItems = cat => {
        let tempItems = [...menuItems]
        if (cat === "wszystkie") {
            setDisplayedItems(tempItems)
            setCurrentCategory(cat)

        }
        else {
            let items = tempItems.filter((items) => {
                return items.categories.nodes[0].name.indexOf(cat) >= 0
            })
            setDisplayedItems(items)
            setCurrentCategory(cat)

        }
    }

    return (

        <Layout>
            <h2>HOME SWEET HOME :)</h2>

            <CategoryButtonWrapper>
                {categories.map((cat, index) => {
                    return (
                        <SectionButton
                            style={{ margin: "0.4rem" }}
                            key={index}
                            onClick={() => handleItems(cat)}
                        >
                            {cat}
                        </SectionButton>
                    )
                })}
            </CategoryButtonWrapper>

            <CategoryButtonWrapper>
                <select onChange={(e) => handleItems(e.target.value)}>
                    {categories.map((cat, index) => {
                        return (
                            <option key={index} value={cat} onChange={() => handleItems(cat)}>
                                {cat}
                            </option>
                        )
                    })}
                </select>
            </CategoryButtonWrapper>

            <Title title={`${currentCategory} Items`} />
            <h2>{`${currentCategory} Items`}</h2>
            <Wrapper>
                {displayedItems.map(item => {

                    return (

                        <PortfolioItem
                            item={item} />

                    )
                })}
            </Wrapper>
        </Layout>
    )
}


export default HomeArchive


export const query = graphql`
  query HomeArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPortfolio(
      limit: $perPage
      skip: $offset
      filter: {
        author: {
          node: { databaseId: { eq: $userDatabaseId } }}
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
        nodes {
            ...PortfolioPreviewContent
          }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`


const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
