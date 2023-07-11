import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout/layout"
import "../styles/custom"
import "../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import CustomScript from "../styles/custom"
import { FaInstagram, FaBlogger } from "react-icons/fa"
import { RiNotionFill } from "react-icons/ri"
import ArrowUp from "../utils/arrow"

const IndexPage = () => (
  <div>
    <Layout>
      <main>
        <article class="container">
          <section class="hero" id="home">
            <div class="hero-content">
              <h2 class="h2 hero-title">We Design & Build Creative Products</h2>

              <a href="#contact" class="btn btn-primary">
                Get in touch
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

          <section class="stats" id="stats">
            <ul class="stats-list">
              <li>
                <a href="#" class="stats-card">
                  <div class="card-icon">
                    <StaticImage
                      src="../../contents/images/stats-card_icon-1.png"
                      alt="Badge icon"
                    />
                  </div>

                  <h2 class="h2 card-title">
                    12+ <strong>Years of Experience</strong>
                  </h2>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="stats-card">
                  <div class="card-icon">
                    <StaticImage
                      src="../../contents/images/stats-card_icon-2.png"
                      alt="Checkmark icon"
                    />
                  </div>

                  <h2 class="h2 card-title">
                    230+ <strong>Completed Projects</strong>
                  </h2>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="stats-card">
                  <div class="card-icon">
                    <StaticImage
                      src="../../contents/images/stats-card_icon-3.png"
                      alt="Peoples rating icon"
                    />
                  </div>

                  <h2 class="h2 card-title">
                    95+ <strong>Happy Clients</strong>
                  </h2>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
            </ul>
          </section>

          <section class="about" id="about">
            <figure class="about-banner">
              <StaticImage
                src="../../contents/images/about-banner.png"
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
                Hi! I’m Jack Reacher, and I’m a developer who has passion for
                building clean web applications with intuitive functionalities.
                I enjoy the process of turning ideas into reality using creative
                solutions. I’m always curious about learning new skills, tools,
                and concepts. In addition to working on various solo full stack
                projects, I have worked with creative teams, which involves
                daily stand-ups and communications, source control, and project
                management.
              </p>

              <div class="btn-group">
                <button class="btn btn-secondary">Hire me</button>

                <button class="btn btn-primary">Download cv</button>
              </div>
            </div>
          </section>

          <section class="skills" id="skills">
            <div class="skills-content section-content">
              <p class="section-subtitle">My skills</p>

              <h2 class="h3 section-title">
                What My Programming Skills Included?
              </h2>

              <p class="section-text">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effort and time with those
                technologies.
              </p>

              <div class="skills-toggle" data-toggle-box>
                <button class="toggle-btn active" data-toggle-btn>
                  Skills
                </button>

                <button class="toggle-btn" data-toggle-btn>
                  Tools
                </button>
              </div>
            </div>

            <div class="skills-box" data-skills-box>
              <ul class="skills-list">
                <li>
                  <div class="skill-card">
                    <div class="tooltip">HTML5</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/html5.png"
                        alt="HTML5 logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">CSS3</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/css3.png"
                        alt="CSS3 logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">JavaScript</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/javascript.png"
                        alt="JavaScript logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">TypeScript</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/typescript.png"
                        alt="TypeScript logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">jQuery</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/jquery.png"
                        alt="jQuery logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Bootstrap</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/bootstrap.png"
                        alt="Bootstrap logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">React</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/react.png"
                        alt="React logo"
                      />
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="tools-list">
                <li>
                  <div class="skill-card">
                    <div class="tooltip">Webpack</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/webpack.png"
                        alt="Webpack logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Git</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/git.png"
                        alt="Git logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Npm</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/npm.png"
                        alt="Npm logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Command Line</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/command.png"
                        alt="Command Line logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">VS Code</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/vs-code.png"
                        alt="VS Code logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Trello</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/trello.png"
                        alt="Trello logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Slack</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/slack.png"
                        alt="Slack logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Photoshop</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/photoshop.png"
                        alt="Photoshop logo"
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="skill-card">
                    <div class="tooltip">Adobe XD</div>

                    <div class="card-icon">
                      <StaticImage
                        src="../../contents/images/adobe-xd.png"
                        alt="Adobe XD logo"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="project" id="portfolio">
            <ul class="project-list">
              <li>
                <div class="project-content section-content">
                  <p class="section-subtitle">My Works</p>

                  <h2 class="h3 section-title">
                    See My Works Which Will Amaze You!
                  </h2>

                  <p class="section-text">
                    We develop the best quality website that serves for the
                    long-term. Well-documented, clean, easy and elegant
                    interface helps any non-technical clients.
                  </p>
                </div>
              </li>

              <li>
                <a href="#" class="project-card">
                  <figure class="card-banner">
                    <StaticImage
                      src="../../contents/images/project-1.png"
                      class="w-100"
                      alt="A macintosh on a yellow background."
                    />
                  </figure>

                  <div class="card-content">
                    <h3 class="h4 card-title">Lorem Ipsum Dolor 01</h3>

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
                      src="../../contents/images/project-2.png"
                      class="w-100"
                      alt="On a Blue background, a Wacom and a mouse."
                    />
                  </figure>

                  <div class="card-content">
                    <h3 class="h4 card-title">Lorem Ipsum Dolor 02</h3>

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
                      src="../../contents/images/project-3.png"
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
                      src="../../contents/images/project-4.png"
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
                      src="../../contents/images/project-5.png"
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
                      src="../../contents/images/project-6.png"
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
                      src="../../contents/images/project-7.png"
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
        </article>
      </main>
    </Layout>
    <ArrowUp />
    <CustomScript />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
