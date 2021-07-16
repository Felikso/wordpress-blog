import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout } from "components/theme"
import { PortfolioItem, Title, CategoryButtonWrapper, PortfolioWrapper } from "components"
import { DefaultHeader } from "components/theme"
import { MainWrapper, SectionButton } from "components/common"

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

const PortfolioArchive = (props) => {
  const {
    data: {
      allWpPortfolio: { nodes, pageInfo },
    },
    pageContext: { PortfolioArchiveType, PortfolioArchivePath, archivePath, uri },
  } = props

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
      <DefaultHeader headerContent={props.data.wpMain} />
      <MainWrapper>
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

        <Title title={`${currentCategory}`} />
        <PortfolioWrapper>
          {displayedItems.map(item => {
            return (
              <PortfolioItem
                item={item} />
            )
          })}
        </PortfolioWrapper>
      </MainWrapper>
    </Layout>
  )
}


export default PortfolioArchive


export const query = graphql`
  query PortfolioArchivePage(
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
    wpMain(slug: {eq: "portfolio-page"}) {
      main_content {
        backgroundImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        heroText
      }
    }
  }
`


