import React from "react"
import "../../styles/style.css"
import { StaticImage } from "gatsby-plugin-image"
import { FaAngleRight } from "react-icons/fa"

const Stats = () => {
  return (
    <section class="stats" id="stats">
      <ul class="stats-list">
        <li>
          <a href="#" class="stats-card">
            <div class="card-icon">
              <StaticImage
                src="../../../contents/images/stats-card_icon-1.png"
                alt="Badge icon"
              />
            </div>

            <h2 class="h2 card-title">
              12+ <strong>Years of Experience</strong>
            </h2>

            <FaAngleRight color="black" size={20} />
          </a>
        </li>

        <li>
          <a href="#" class="stats-card">
            <div class="card-icon">
              <StaticImage
                src="../../../contents/images/stats-card_icon-2.png"
                alt="Checkmark icon"
              />
            </div>

            <h2 class="h2 card-title">
              230+ <strong>Completed Projects</strong>
            </h2>

            <FaAngleRight color="black" size={20} />
          </a>
        </li>

        <li>
          <a href="#" class="stats-card">
            <div class="card-icon">
              <StaticImage
                src="../../../contents/images/stats-card_icon-3.png"
                alt="Peoples rating icon"
              />
            </div>

            <h2 class="h2 card-title">
              95+ <strong>Happy Clients</strong>
            </h2>

            <FaAngleRight color="black" size={20} />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Stats
