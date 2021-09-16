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
    {/* <div className="main-area">
      <div
        className="main-left-img"
        style={{
          backgroundImage: `url(${nodes[0].image.childImageSharp.fluid.src})`,
        }}
      >
        <Image fluid={nodes[0].image.childImageSharp.fluid} />
      </div>

      <div className="main-content">
        {nodes.map((cnt, idx) => {
          return <MainBanner key={idx} {...cnt} />
        })}
      </div>
    </div> */}
  </Layout>
)

export default IndexPage
