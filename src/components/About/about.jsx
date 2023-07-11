import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section class="about" id="about">
      <figure class="about-banner">
        <StaticImage
          src="../../../contents/images/about-banner.png"
          alt="A man in a alice blue shirt with a thinking expression"
          class="w-100"
        />
      </figure>

      <div class="about-content section-content">
        <p class="section-subtitle">About me</p>

        <h2 class="h3 section-title">
          Need a Creative Product? I can Help You!
        </h2>

        <p class="section-text">
          Hi! I’m Jack Reacher, and I’m a developer who has passion for building
          clean web applications with intuitive functionalities. I enjoy the
          process of turning ideas into reality using creative solutions. I’m
          always curious about learning new skills, tools, and concepts. In
          addition to working on various solo full stack projects, I have worked
          with creative teams, which involves daily stand-ups and
          communications, source control, and project management.
        </p>

        <div class="btn-group">
          <button class="btn btn-secondary">Hire me</button>

          <button class="btn btn-primary">Download cv</button>
        </div>
      </div>
    </section>
  )
}

export default About
