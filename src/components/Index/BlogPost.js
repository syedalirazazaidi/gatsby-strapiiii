import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// abde@hotmail.com

const BlogPost = () => {
  return (
    <div id="blog" className="blog-area border-bottom ptb-100">
      <div className="common-right-text">
        <span>BLOG</span>
      </div>

      <div className="container">
        <div className="section-title">
          <span className="sub-title">BLOG</span>
          <h2>
            Read My <span>Blog</span> To Know More About My Design Process
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, seddiam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>

        <div className="row"></div>

        <div className="text-center">
          <Link to="/blog" className="common-btn">
            Explore Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
