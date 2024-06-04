import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../../styles/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <div id="top" class="dark_theme">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Footer
        siteTitle={data.site.siteMetadata?.title || `Title`}
        author={data.site.siteMetadata?.author || `Author`}
      />
    </div>
  )
}

export default Layout

