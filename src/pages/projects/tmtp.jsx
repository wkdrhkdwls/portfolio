import React from "react"
import "../../styles/style.css"
import CustomScript from "../../styles/custom"
import Layout from "../../components/Layout/layout"
import ArrowUp from "../../utils/arrow"
import { StaticImage } from "gatsby-plugin-image"
import TMTPDetail from "../../hooks/pages/projects/tmtp/hook"

const TMTP = () => {
  const { titleData } = TMTPDetail()

  return (
    <>
      <Layout>
        <main>
          <article class="container">
            <section class="project-detail" id="home">
              <div>
                <figure class="project-detail-banner">
                  <div class="tmtp-img">
                    <StaticImage
                      src="../../../contents/images/tmtp/tmtp.jpg"
                      alt="tmtp"
                    />
                  </div>
                </figure>
              </div>
              <div class="project-detail-content">
                <h2 class="h2 project-detail-title">{titleData.title}</h2>
              </div>
              <div>
                <div>
                  {titleData.sections.map((section, index) => (
                    <div key={index}>
                      <h2 class="project-detail-subtitle">
                        {section.subtitle}
                      </h2>
                      <p class="project-detail-text">{section.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </article>
        </main>
      </Layout>
      <ArrowUp />

      <CustomScript />
    </>
  )
}

export default TMTP
