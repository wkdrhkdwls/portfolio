import React from "react"
import "../../styles/style.css"
import CustomScript from "../../styles/custom"
import Layout from "../../components/Layout/layout"
import ArrowUp from "../../utils/arrow"
import { StaticImage } from "gatsby-plugin-image"
import MyMatchDetail from "../../hooks/pages/projects/mymatch/hook"

const MyMatch = () => {
  const { titleData } = MyMatchDetail()

  return (
    <>
      <Layout>
        <main>
          <article class="container">
            <section class="project-detail" id="home">
              <div>
                <figure class="project-detail-banner">
                  <div class="mymatch-img">
                    <StaticImage
                      src="../../../contents/images/mymatch/mymatch.png"
                      alt="mymatch"
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

export default MyMatch
