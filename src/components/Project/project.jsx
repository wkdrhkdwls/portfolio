import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <section class="project" id="portfolio">
      <ul class="project-list">
        <li>
          <div class="project-content section-content">
            <p class="section-subtitle">My Works</p>

            <h2 class="h3 section-title">Projects</h2>

            <p class="section-text">프로젝트 목록</p>
          </div>
        </li>

        <li>
          <Link href="/projects/gganbu" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/gganbu/gganbuTitle.png"
                class="w-100"
                alt="A macintosh on a yellow background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">깐부GG</h3>

              <time class="publish-date" datetime="2023-01">
                2023.01
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/tmtp" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/tmtp/tmtp.jpg"
                class="w-100"
                alt="A Cassette tape on a mellow apricot background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">TMTP</h3>

              <time class="publish-date" datetime="2022-04">
                2023.05
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/qrunch" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/qrunch/Qrunch.png"
                class="w-50"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Qrunch</h3>

              <time class="publish-date" datetime="2023-09">
                2023.09
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/mylist" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/mylist/mylist.png"
                class="myListBanner"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">My List</h3>

              <time class="publish-date" datetime="2023-12">
                2023.12
              </time>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects/mymatch" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/mymatch/mymatch.png"
                class="myMatchBanner"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">MyMatch</h3>

              <time class="publish-date" datetime="2024-03">
                2024.03
              </time>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects/metlife" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/metlife/metlife.jpg"
                class="metLifeBanner"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Metlife 해커톤</h3>

              <time class="publish-date" datetime="2024-03">
                2024.03
              </time>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Projects
