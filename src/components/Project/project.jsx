import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Projects = () => {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">Projects</h2>
            <p className="section-text">프로젝트 목록</p>
          </div>
        </li>

        <li>
          <Link href="/projects/gganbu" className="project-card">
            <figure className="card-banner">
              <StaticImage
                src="../../../contents/images/gganbu/gganbuTitle.png"
                className="project-image"
                alt="A macintosh on a yellow background."
              />
            </figure>

            <div className="card-content">
              <h3 className="h4 card-title">깐부GG</h3>
              <time className="publish-date" dateTime="2023-01">
                2023.01
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/tmtp" className="project-card">
            <figure className="card-banner">
              <StaticImage
                src="../../../contents/images/tmtp/tmtp.jpg"
                className="project-image"
                alt="A Cassette tape on a mellow apricot background."
              />
            </figure>

            <div className="card-content">
              <h3 className="h4 card-title">TMTP</h3>
              <time className="publish-date" dateTime="2022-04">
                2023.05
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/qrunch" className="project-card">
            <figure className="card-banner">
              <StaticImage
                src="../../../contents/images/qrunch/Qrunch.png"
                className="project-image"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div className="card-content">
              <h3 className="h4 card-title">Qrunch</h3>
              <time className="publish-date" dateTime="2023-09">
                2023.09
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/mylist" className="project-card">
            <figure className="card-banner">
              <StaticImage
                src="../../../contents/images/mylist/mylist.png"
                className="project-image"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div className="card-content">
              <h3 className="h4 card-title">My List</h3>
              <time className="publish-date" dateTime="2023-12">
                2023.12
              </time>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/projects/metlife" className="project-card">
            <figure className="card-banner">
              <StaticImage
                src="../../../contents/images/metlife/metlife.jpg"
                className="project-image"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div className="card-content">
              <h3 className="h4 card-title">Metlife 해커톤</h3>
              <time className="publish-date" dateTime="2024-03">
                2024.03
              </time>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects/duett" className="project-card">
            <figure className="card-banner">
              <StaticImage
                src="../../../contents/images/duett/duett.png"
                className="project-image"
                alt="Blue digital watch on a dark liver background."
              />
            </figure>

            <div className="card-content">
              <h3 className="h4 card-title">Duett</h3>
              <time className="publish-date" dateTime="2024-06">
                2024.06
              </time>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Projects
