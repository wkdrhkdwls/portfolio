import React, { useEffect, useState } from "react"
import "../../styles/style.css"
import { FaAngleRight } from "react-icons/fa"
import useStatsDetail from "../../hooks/components/Stats/hook"

const Stats = () => {
  const { data } = useStatsDetail()

  return (
    <section class="stats" id="stats">
      <ul class="stats-list">
        {data.map((item, index) => (
          <li key={index}>
            <a href="#" className="stats-card">
              <div className="card-icon">{item.icon}</div>
              <h2 className="h2 card-title">
                {item.title}
                <strong>{item.description}</strong>
              </h2>
              <FaAngleRight color="black" size={20} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stats
