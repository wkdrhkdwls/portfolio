import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  return (
    <section class="project" id="portfolio">
      <ul class="project-list">
        <li>
          <div class="project-content section-content">
            <p class="section-subtitle">My Works</p>

            <h2 class="h3 section-title">Team Projects & Personal Projects</h2>

            <p class="section-text">프로젝트 목록</p>
          </div>
        </li>

        <li>
          <a href="/projects/gganbu" class="project-card">
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
                March 2023
              </time>
            </div>
          </a>
        </li>

        <li>
          <a href="/projects/devrentPage" class="project-card">
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
          </a>
        </li>

        <li>
          <a href="#" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/project-3.png"
                class="w-100"
                alt="A Cassette tape on a mellow apricot background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Lorem Ipsum Dolor 03</h3>

              <time class="publish-date" datetime="2022-04">
                April 2022
              </time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/project-4.png"
                class="w-100"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Lorem Ipsum Dolor 04</h3>

              <time class="publish-date" datetime="2022-04">
                April 2022
              </time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/project-5.png"
                class="w-100"
                alt="On a dark liver background, Airport luggage car carrying a luggage."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Lorem Ipsum Dolor 05</h3>

              <time class="publish-date" datetime="2022-04">
                April 2022
              </time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/project-6.png"
                class="w-100"
                alt="On a yellow background, a digital watch and a glass."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Lorem Ipsum Dolor 06</h3>

              <time class="publish-date" datetime="2022-04">
                April 2022
              </time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="project-card">
            <figure class="card-banner">
              <StaticImage
                src="../../../contents/images/project-7.png"
                class="w-100"
                alt="A fujifilm instant camera on a dark electric blue background."
              />
            </figure>

            <div class="card-content">
              <h3 class="h4 card-title">Lorem Ipsum Dolor 07</h3>

              <time class="publish-date" datetime="2022-04">
                April 2022
              </time>
            </div>
          </a>
        </li>

        <li>
          <button class="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  )
}

export default Projects
