import React from "react"
import Menu from "../components/toggle"
import Footer from "../components/footer"
function about() {
  return (
    <div id="cover">
      <Menu />
      <div id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary"> Me </span>
        </h1>
        <h2 className="sm-heading"> Skillset & Interest </h2>

        <div className="about-info">
          <img
            className="bio-img"
            src="https://source.unsplash.com/500x300/?Himalayas"
            alt="Solomon Ray"
          />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p></p>
          </div>
          <div className="job job-1">
            <h3> 123 Web Shop</h3>
            <h6>Full Stact Developer</h6>
            <p>
              I'm Solomon Ray, a full stack web developer and designer .I live
              in San Luis Obispo moved from India. I
            </p>
          </div>
          <div className="job job-2">
            <h3> Front End Developer</h3>
            <h6> HTML,CSS,React,Gatsby,Bootstrap</h6>
            <p></p>
          </div>
          <div className="job job-3">
            <h3> Backend developer</h3>
            <h6>Node.js,Express,Graphql,MongoDB,</h6>
            <p></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default about
