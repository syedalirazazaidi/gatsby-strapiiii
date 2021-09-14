/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { RecoilRoot } from "recoil"
import Header from "./header"
import "./layout.css"
import Preloader from "./Blog/Preloader"
import GoTop from "./Blog/GoTop"

const Layout = ({ children }) => {
  const [loader, setLoader] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500)
  }, [])
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <RecoilRoot>
        {children}
        {loader ? <Preloader /> : null}

        {/* <GoTop scrollStepInPx="100" delayInMs="10.50" /> */}
      </RecoilRoot>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div> */}
    </>
  )
}

export default Layout
