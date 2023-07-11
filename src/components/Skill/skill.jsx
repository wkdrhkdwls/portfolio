import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"

const Skill = () => {
  return (
    <section class="skills" id="skills">
      <div class="skills-content section-content">
        <p class="section-subtitle">My skills</p>

        <h2 class="h3 section-title">What My Programming Skills Included?</h2>

        <p class="section-text">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
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
                  src="../../../contents/images/html5.png"
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
                  src="../../../contents/images/css3.png"
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
                  src="../../../contents/images/javascript.png"
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
                  src="../../../contents/images/typescript.png"
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
                  src="../../../contents/images/jquery.png"
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
                  src="../../../contents/images/bootstrap.png"
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
                  src="../../../contents/images/react.png"
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
                  src="../../../contents/images/webpack.png"
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
                  src="../../../contents/images/git.png"
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
                  src="../../../contents/images/npm.png"
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
                  src="../../../contents/images/command.png"
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
                  src="../../../contents/images/vs-code.png"
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
                  src="../../../contents/images/trello.png"
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
                  src="../../../contents/images/slack.png"
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
                  src="../../../contents/images/photoshop.png"
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
                  src="../../../contents/images/adobe-xd.png"
                  alt="Adobe XD logo"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skill
