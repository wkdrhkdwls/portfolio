import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const About = () => {
  const settings = {
    autoPlay: false,
    interval: 3000,
    showArrows: true,
    showIndicators: true,
    infiniteLoop: false,
    showStatus: false,
    showThumbs: false,
    transitionTime: 500,
    centerSlidePercentage: true,
  }
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <StaticImage src="../../../contents/images/banner.jpg" alt="banner" />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>

        <h2 className="h3 section-title">
          안녕하세요
          <br /> 발전하는
          <br /> Frontend Developer
          <br /> 장광진입니다.
        </h2>

        <div className="section-text">
          <Carousel {...settings}>
            <div>
              <div className="career">
                <h2>약력</h2>
                <ul>
                  <h3>DevRent 2022.08 ~ 2022.02</h3>
                  <p>롤토체스 더블업 모드 전용 통계 사이트</p>
                  <p>DevRent 웹 홈페이지 제작</p>
                </ul>
                <ul>
                  <h3>멋쟁이 사자처럼 2023.03 ~ 현재</h3>
                  <p>가톨릭대학교 축제 홍보 페이지 제작</p>
                  {/* <p>해커톤 참여</p> */}
                </ul>
              </div>
            </div>
            <div>
              <div className="education">
                <h2>학력</h2>
                <ul>
                  <li>가톨릭대학교 미디어공학/컴퓨터공학</li>
                </ul>
              </div>

              <div className="certificate">
                <div>
                  <h2>자격증</h2>
                  <div>
                    <p>Opic Ix 2023.8</p>
                  </div>
                  <div>
                    <p>TOEIC xxx 2023.8</p>
                  </div>
                  <div>
                    <p>GTQ Level 2</p>
                  </div>
                </div>
              </div>

              <div className="other">
                <h2>기타</h2>
                <ul>
                  <li>2022. 가톨릭대학교 미디어기술콘텐츠학과 학생회장</li>
                </ul>
              </div>
            </div>
          </Carousel>
        </div>

        {/* <div className="btn-group">
          <button className="btn btn-secondary">Hire me</button>

          <button className="btn btn-primary">Download cv</button>
        </div> */}
      </div>
    </section>
  )
}

export default About
