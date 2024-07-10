import React from "react"
import "../../styles/style.css"
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
        <img src={bannerUrl.allFile.edges[0].node.publicURL} alt="banner" />
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
              <div className="done-project">
                <h2>{data.project.title}</h2>
                {Object.entries(data.project.about).map(
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
                  <li>
                    <strong>고등학교</strong>
                    <ul>
                      <li>학교명: {data.education.about.고등학교.학교명}</li>
                      <li>기간: {data.education.about.고등학교.기간}</li>
                    </ul>
                  </li>
                  <li>
                    <strong>대학교</strong>
                    <ul>
                      <li>학교명: {data.education.about.대학교.학교명}</li>
                      <li>기간: {data.education.about.대학교.기간}</li>
                      <li>전체학점: {data.education.about.대학교.전체학점}</li>
                      <li>
                        전공: {data.education.about.대학교.전공.전공명} (
                        {data.education.about.대학교.전공.학점})
                      </li>
                      <li>
                        복수전공: {data.education.about.대학교.복수전공.전공명}{" "}
                        ({data.education.about.대학교.복수전공.학점})
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="competition">
                <h2>{data.competition.title}</h2>
                <ul>
                  {Object.entries(data.competition.about).map(
                    ([title, details], index) => (
                      <div key={index}>
                        <h3>
                          {index + 1}. {title}
                        </h3>
                        <span>수상일시: {details.수상일시}</span>
                        <span>수상기관: {details.수상기관}</span>
                      </div>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div>
              <div className="certificate">
                <h2>{data.certificate.title}</h2>
                <ul>
                  {Object.entries(data.certificate.about).map(
                    ([title, date], index) => (
                      <div key={index}>
                        {index + 1}. {title} {date}
                      </div>
                    )
                  )}
                </ul>
              </div>
              <div className="language">
                <h2>{data.language.title}</h2>
                <ul>
                  {Object.entries(data.language.about).map(
                    ([title, date], index) => (
                      <div key={index}>
                        {index + 1}. {title} {date}
                      </div>
                    )
                  )}
                </ul>
              </div>
              <div className="other">
                <h2>{data.other.title}</h2>
                <ul>
                  {data.other.about.map((item, index) => (
                    <div key={index}>
                      {index + 1}. {item}
                    </div>
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
