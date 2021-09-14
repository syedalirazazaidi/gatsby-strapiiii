import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import blogImg3 from "../assets/images/blog/blog-details3.jpg"
import blogImg2 from "../assets/images/blog/blog-details2.jpg"
import blogImg5 from "../assets/images/blog/blog-thumb5.jpg"
import blogImg6 from "../assets/images/blog/blog-thumb6.jpg"
import blogImg7 from "../assets/images/blog/blog-thumb7.jpg"
const ArticleTemplate = ({ data }) => {
  return (
    <React.Fragment>
      <div id="blog" className="blog-details-area ptb-100">
        <div className="container">
          <div className="details-img">
            <Img fluid={data.strapiArticles.image.childImageSharp.fluid} />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="details-img-info">
                <ul className="info">
                  <li>
                    By: <a href="#">Adam Smith</a>
                  </li>
                  <li>October 07, 2020</li>
                  <li>2 Comments</li>
                </ul>
                <h2>{data.strapiArticles.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invi dunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ips um dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonu my eirmod tempor invidunt ut labore et dolore mag na
                  aliquyam erat
                </p>

                <h3>Key Points</h3>
                <ul className="item">
                  <li>
                    <i className="bx bxs-chevrons-right"></i>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    <i className="bx bxs-chevrons-right"></i>
                    It is a long established fact that a reader will be
                    distracted by the readable
                  </li>
                  <li>
                    <i className="bx bxs-chevrons-right"></i>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text
                  </li>
                  <li>
                    <i className="bx bxs-chevrons-right"></i>
                    There are many variations of passages of Lorem Ipsum
                    available
                  </li>
                  <li>
                    <i className="bx bxs-chevrons-right"></i>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined
                  </li>
                </ul>

                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="img">
                      <img src={blogImg2} alt="Details" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="img">
                      <img src={blogImg3} alt="Details" />
                    </div>
                  </div>
                </div>

                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy tempor invidunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className="recent widget-item">
              <h3>Recent Post</h3>
              <div className="recent-inner">
                <ul className="align-items-center">
                  <li>
                    <img src={blogImg5} alt="Details" />
                  </li>
                  <li>
                    <h3>How Design Became Fun In My Life</h3>
                    <Link href="#">
                      <a>
                        Read More <i className="flaticon-right-arrow"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="recent-inner">
                <ul className="align-items-center">
                  <li>
                    <img src={blogImg6} alt="Details" />
                  </li>
                  <li>
                    <h3>
                      How Graphic Design Take The Place Of Next Generation
                    </h3>
                    <Link href="#">
                      <a>
                        Read More <i className="flaticon-right-arrow"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="recent-inner">
                <ul className="align-items-center">
                  <li>
                    <img src={blogImg7} alt="Details" />
                  </li>
                  <li>
                    <h3>Old Tradition Of Art Are Changed Throughout These</h3>

                    <Link href="#">
                      <a>
                        Read More <i className="flaticon-right-arrow"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    // <Layout>
    //   <p>{data.strapiArticles.content}</p>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: { eq: $id }) {
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
`
