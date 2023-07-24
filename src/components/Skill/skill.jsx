import React from "react"
import "../../styles/style.css"
import useSkillDetail from "../../hooks/components/Skill/hook"

const Skill = () => {
  const { skillURL, toolURL, titleData } = useSkillDetail()

  const CapitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <section class="skills" id="skills">
      <div class="skills-content section-content">
        <p class="section-subtitle">{titleData.title}</p>

        <h2 class="h3 section-title">{titleData.head}</h2>

        <p class="section-text">{titleData.description}</p>

        <div class="skills-toggle" data-toggle-box>
          <button class="toggle-btn active" data-toggle-btn>
            {titleData.skillButton}
          </button>

          <button class="toggle-btn" data-toggle-btn>
            {titleData.toolButton}
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          {skillURL.map(node => (
            <li key={node.publicURL}>
              <div className="skill-card">
                <div className="tooltip">
                  {CapitalizeFirstLetter(node.name)}
                </div>
                <div className="card-icon">
                  <img src={node.publicURL} alt={node.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="tools-list">
          {toolURL.map(node => (
            <li key={node.publicURL}>
              <div className="skill-card">
                <div className="tooltip">
                  {CapitalizeFirstLetter(node.name)}
                </div>
                <div className="card-icon">
                  <img src={node.publicURL} alt={node.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skill
