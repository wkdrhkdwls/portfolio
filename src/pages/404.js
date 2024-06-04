import * as React from "react"
import "../styles/style.css"
import Seo from "../components/seo"
import Layout from "../components/Layout/layout"

const NotFoundPage = () => (
  <Layout>
    <div class="container-404">
      <div class="imageWrapper-404">
        <img src="../../contents/404.png" alt="Not Found" />
      </div>
      <div class="textWrapper-404">
        <h1>404: N33ot Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <a class="backHomeButton" href="/">
          Go Back Home
        </a>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
