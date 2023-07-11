import React from "react"
import { FaInstagram, FaBlogger } from "react-icons/fa"
import { RiNotionFill } from "react-icons/ri"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import useHomeDetail from "../../hooks/components/Home/hook"

const Home = () => {
  const { data } = useHomeDetail()
  return (
    <section class="hero" id="home">
      <div>
        <figure class="hero-banner">
          <StaticImage
            src="../../../contents/images/banner.jpg"
            alt={data.bannerAlt}
          />
        </figure>
      </div>
      <div class="hero-content">
        <h2 class="h2 hero-title">{data.title}</h2>

        <a href="#about" class="btn btn-primary">
          {data.button}
        </a>
      </div>

      <ul class="hero-social-list">
        <li>
          <a href="#" class="hero-social-link">
            <FaInstagram />

            <div class="tooltip">Instagram</div>
          </a>
        </li>

        <li>
          <a href="#" class="hero-social-link">
            <FaBlogger />

            <div class="tooltip">Blog</div>
          </a>
        </li>

        <li>
          <a href="#" class="hero-social-link">
            <RiNotionFill />

            <div class="tooltip">Notion</div>
          </a>
        </li>
      </ul>

      <a href="#stats" class="scroll-down">
        Scroll
      </a>
    </section>
  )
}

export default Home
