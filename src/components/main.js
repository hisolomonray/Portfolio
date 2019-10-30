import React from "react"
import { FaTwitter, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa"
function main() {
  return (
    <main id="HOUSE">
      <h1 className="lg-heading">
        Solomon <span className="text-Secondary"> Ray</span>
      </h1>

      <h2 className="sm-heading"> Web Developer, Programmer, Designer</h2>
      <div className="icons">
        <a href="#!">
          <FaTwitter size="2em" />
        </a>
        <a href="#!">
          <FaFacebook size="2em" />
        </a>
        <a href="#!">
          <FaLinkedinIn size="2em" />
        </a>
        <a href="#!">
          <FaGithub size="2em" />
        </a>
      </div>
    </main>
  )
}

export default main
