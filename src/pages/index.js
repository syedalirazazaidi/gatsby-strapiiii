import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Footer from "../components/Blog/Footer"
import BlogPost from "../components/Index/BlogPost"
export const query = graphql`
  {
    allStrapiArticles {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <BlogPost />
  </Layout>
)

export default IndexPage
