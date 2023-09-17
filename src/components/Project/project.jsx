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

            <h2 class="h3 section-title">Team Projects</h2>

            <p class="section-text">팀 프로젝트 목록</p>
          </div>
        </li>

        <li>
          <Link href="/projects/gganbu" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/gganbu/gganbuTitle.jpg"
                class="w-100"
                alt="A macintosh on a yellow background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">깐부GG</h3>

              <time class="publish-date" datetime="2022-04">
                Jan 2023
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/devrentPage" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/devrent/devrent.png"
                class="w-100"
                alt="On a Blue background, a Wacom and a mouse."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">DevRent WebPage</h3>

              <time class="publish-date" datetime="2022-04">
                March 2023
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/tmtp" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/tmtp/tmtp.png"
                class="w-100"
                alt="A Cassette tape on a mellow apricot background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">TMTP</h3>

              <time class="publish-date" datetime="2022-04">
                June 2023
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/festival" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/festival/festival.png"
                class="w-100"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">2023 가톨릭대학교 축제 홍보페이지</h3>

              <time class="publish-date" datetime="2022-04">
                May 2023
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/crush" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/crush/Crush.png"
                class="myListBanner"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">My List(개발 진행중)</h3>

              <time class="publish-date" datetime="2022-04">
                Sep 2023
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
              <h3 class="h4 card-title">Qrunch(개발 진행중)</h3>

              <time class="publish-date" datetime="2022-04">
                Sep 2023
              </time>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Projects
