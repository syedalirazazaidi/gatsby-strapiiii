import React from "react"
import Footer from "../components/Blog/Footer"
import { Link, graphql } from "gatsby"
import blog10 from "../assets/images/blog/blog10.jpg"
import blog11 from "../assets/images/blog/blog11.jpg"
import blog12 from "../assets/images/blog/blog12.jpg"
import blog13 from "../assets/images/blog/blog13.jpg"
import blog14 from "../assets/images/blog/blog14.jpg"
import blog15 from "../assets/images/blog/blog15.jpg"
import blog16 from "../assets/images/blog/blog16.jpg"
import blog17 from "../assets/images/blog/blog17.jpg"
import blog18 from "../assets/images/blog/blog18.jpg"
import TopHeader from "../components/Blog/TopHeader"
import PageBanner from "../components/Blog/Banner"
import Image from "gatsby-image"
export const query = graphql`
  {
    allStrapiArticles {
      edges {
        node {
          content
          title
          id
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const {
    allStrapiArticles: { edges: articles },
  } = data
  return (
    <React.Fragment>
      <div id="blog" className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div
              className="blog-item"
              // className="col-sm-12 col-lg-4"
            >
              <div
                style={{
                  //   display: "grid",
                  display: " grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "1fr 1fr",
                  //   gridTemplateRows: " 80px auto 80px",
                  columnGap: " 25px",
                  rowGap: "25px",
                }}
              >
                {articles.map((art, item) => (
                  <div key={item.strapiId}>
                    <div className="top">
                      <Link
                        to={`/${art.node.id}`}
                        // to="/blog-details"
                      >
                        <Image fluid={art.node.image.childImageSharp.fluid} />
                        {/* <Image fluid={art.node.image.childImageSharp.fluid} /> */}
                        <h4>{art.node.created_at}</h4>
                      </Link>
                    </div>

                    <div className="bottom">
                      <h3>
                        <Link
                        // to="/blog-details"
                        >
                          {art.node.title}
                        </Link>
                      </h3>
                      <p>{art.node.content.substring(0, 100)}...</p>

                      <Link
                        // to="/blog-details"
                        className="blog-btn"
                      >
                        Read More <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default Blog
