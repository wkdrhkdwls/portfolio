import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import useAboutDetail from "../../hooks/components/About/hook"

const About = () => {
  const { data, bannerUrl } = useAboutDetail()
  const settings = {
    autoPlay: false,
    interval: 3000,
    showArrows: true,
    showIndicators: false,
    infiniteLoop: false,
    showStatus: false,
    showThumbs: false,
    transitionTime: 500,
    centerSlidePercentage: true,
  }

  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img src={bannerUrl.allFile.edges[1].node.publicURL} alt="banner" />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">{data.title}</p>

        <h2 className="h3 section-title">
          {data.introduce.map((line, index) => (
            <div key={index}>
              {line}
              <br />
            </div>
          ))}
        </h2>

        <div className="section-text">
          <Carousel {...settings}>
            <div>
              <div className="career">
                <h2>{data.career.title}</h2>
                {Object.entries(data.career.about).map(
                  ([timePeriod, tasks], index) => (
                    <div key={index}>
                      <h3>{timePeriod}</h3>
                      <ul>
                        {tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              <div className="education">
                <h2>{data.education.title}</h2>
                <ul>
                  <li>{data.education.about}</li>
                </ul>
              </div>
              <div className="certificate">
                <h2>{data.certificate.title}</h2>
                <ul>
                  {Object.entries(data.certificate.about).map(
                    ([title, date], index) => (
                      <li key={index}>
                        {title} {date}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="other">
                <h2>{data.other.title}</h2>
                <ul>
                  {data.other.about.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default About
