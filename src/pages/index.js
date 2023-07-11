import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout/layout"
import "../styles/custom"
import "../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import CustomScript from "../styles/custom"
import ArrowUp from "../utils/arrow"
import Home from "../components/Home/home"
import Stats from "../components/Stats/stat"
import About from "../components/About/about"
import Skill from "../components/Skill/skill"
import Projects from "../components/Project/project"

const IndexPage = () => (
  <div>
    <Layout>
      <main>
        <article class="container">
          <Home />

          <Stats />

          <About />
          <Skill />
          <Projects />
        </article>
      </main>
    </Layout>
    <ArrowUp />
    <CustomScript />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
