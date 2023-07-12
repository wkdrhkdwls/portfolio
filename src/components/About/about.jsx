import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section class="about" id="about">
      <figure class="about-banner">
        <StaticImage src="../../../contents/images/banner.jpg" alt="banner" />
      </figure>

      <div class="about-content section-content">
        <p class="section-subtitle">About me</p>

        <h2 class="h3 section-title">
          안녕하세요
          <br /> 발전하는
          <br /> 프론트엔드 개발자
          <br /> 장광진입니다.
        </h2>

        <p class="section-text">
          <div class="career">
            <ul>
              <h2>경력</h2>
              <li>didi</li>
              <li>dd</li>
            </ul>
          </div>
          <div class="education">
            <ul>
              <h2>학력</h2>
              <li>가톨릭대학교 미디어공학/컴퓨터공학</li>
            </ul>
          </div>
          <div class="certificate">
            <div>
              <h2>자격증</h2>
              <div>
                <p>Opic Ix 2023.8</p>
              </div>
              <div>
                <p>TOEIC xxx 2023.8</p>
              </div>
              <div>
                <p> GTQ 2급</p>
              </div>
            </div>
          </div>
          <div class="other">
            <ul>
              <h2>기타</h2>
              <li>가톨릭대학교 미디어기술콘텐츠학과 학생회장</li>
            </ul>
          </div>
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
