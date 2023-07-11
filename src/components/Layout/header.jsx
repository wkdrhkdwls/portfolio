import React from "react"
import { Link } from "gatsby"
import "../../styles/style.css"

const Header = ({ siteTitle }) => (
  <div>
    <header className="header" data-header>
      <div className="container">
        <h1 className="h1 logo">
          <Link to="/">{siteTitle}</Link>
        </h1>

        <div className="navbar-actions">
          <button
            className="theme-btn"
            aria-label="Change Theme"
            title="Change Theme"
            data-theme-btn
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle Menu"
          title="Toggle Menu"
          data-nav-toggle-btn
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home.
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link">
                About.
              </a>
            </li>

            <li>
              <a href="#skills" className="navbar-link">
                Skills.
              </a>
            </li>

            <li>
              <a href="#portfolio" className="navbar-link">
                Portfolio.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
)

export default Header
