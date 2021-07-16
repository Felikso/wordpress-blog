import { graphql } from "gatsby"
import React from "react"
import { Feature, SiteMetadata } from "../customedComponents"
import { useModal } from "../context"
import  Layout from "../layouts/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

const SingleModal = (props) => {
  const { data, location } = props

  const {
    country,
    name,
    summary,
    image,
    tags,
    url,
  } = data.item
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()



  console.log(data)
console.log(country)
  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={name} description={summary} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-blue-500 dark:text-blue-400 font-bold leading-tight">
            {name}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 dark:text-blue-500 font-medium mb-4">
            {summary}
          </p>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">

<GatsbyImage image={image.childImageSharp.gatsbyImageData} />
            </div>
            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="Country" value={country} />

              <p className="mt-4 whitespace-pre-line text-sm lg:text-base leading-normal text-blue-900 dark:text-blue-600">

              </p>
            </div>
          </div>

        </div>
      </article>
    </Layout>
  )
}
export default SingleModal

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtableJson(slug: { eq: $slug }){
        country
        name
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        slug
        summary

      }
    }
  

`
