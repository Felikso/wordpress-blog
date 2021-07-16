import React from "react"
import { Layout } from "../components/theme"
import { Link } from 'gatsby-plugin-modal-routing'

const NotFound = () => (
  <Layout>
    <div>
      <h1>Oops, that's a 404</h1>
    </div>
    <Link
  to="/modal-example/"
  asModal
>
  modal-example
</Link>
  </Layout>
)

export default NotFound;
