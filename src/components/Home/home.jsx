import React from "react"
import { FaInstagram, FaBlogger, FaGithub, FaLinkedin } from "react-icons/fa"
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
          <a
            href="https://github.com/wkdrhkdwls"
            class="hero-social-link"
            target="_blank"
          >
            <FaGithub />

            <div class="tooltip">Github</div>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/jang_pang9/"
            class="hero-social-link"
            target="_blank"
          >
            <FaInstagram />

            <div class="tooltip">Instagram</div>
          </a>
        </li>

        <li>
          <a
            href="https://velog.io/@pangs_boy/posts"
            class="hero-social-link"
            target="_blank"
          >
            <FaBlogger />

            <div class="tooltip">Blog</div>
          </a>
        </li>

        <li>
          <a
            href="https://www.notion.so/bf200af2a1d94d0994c6a257ba88af12?pvs=4"
            class="hero-social-link"
            target="_blank"
          >
            <RiNotionFill />

            <div class="tooltip">Notion</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jangpang9/"
            class="hero-social-link"
            target="_blank"
          >
            <FaLinkedin />

            <div class="tooltip">LinkedIn</div>
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
