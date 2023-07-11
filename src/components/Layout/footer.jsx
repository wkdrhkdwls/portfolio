import { Link } from "gatsby"
import "../../styles/style.css"
import React from "react"

const Footer = ({ siteTitle, author }) => {
  return (
    <footer class="footer">
      <div class="container">
        <p class="h1 logo">
          <Link href="#">{siteTitle}</Link>
        </p>

        <p class="copyright">
          &copy; 2022 <Link href="#">{author}</Link>. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
