import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/maps"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MyMap />
  </Layout>
)

export default IndexPage
