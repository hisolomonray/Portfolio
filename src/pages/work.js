import React from "react"
import Menu from "../components/toggle"
import { FaEye, FaGithub } from "react-icons/fa"
import Footer from "../components/footer"

function work() {
  return (
    <div className="cover1">
      <Menu />

      <div id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading"> Check out My Projects</h2>

        <div className="projects">
          <div className="item">
            <a href="#!">
              <img
                className="img"
                src="https://source.unsplash.com/500x500/?mural/"
                alt="projects"
              />
            </a>
            <div className="btn">
              <a href="#" className="btn-light">
                <FaEye size="2em" /> Projects
              </a>

              <a href="#" className="btn-dark">
                <FaGithub size="2em" /> Github
              </a>
            </div>
          </div>
          <div className="item">
            <a href="#!">
              <img
                className="img"
                src="https://source.unsplash.com/500x500/?flowers"
                alt="projects"
              />
            </a>
            <div className="btn">
              <a href="#" className="btn-light">
                <FaEye size="2em" /> Projects
              </a>

              <a href="#" className="btn-dark">
                <FaGithub size="2em" /> Github
              </a>
            </div>
          </div>
          <div className="item">
            <a href="#!">
              <img
                className="img"
                src="https://source.unsplash.com/500x500/?india/"
                alt="projects"
              />
            </a>
            <div className="btn">
              <a href="#" className="btn-light">
                <FaEye size="2em" /> Projects
              </a>

              <a href="#" className="btn-dark">
                <FaGithub size="2em" /> Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default work
