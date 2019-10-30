import React from "react"

function header() {
  return (
    <header>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>

        <div className="btn-line"></div>
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item current">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="./pages/about" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="work.html" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              How To Reach Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
