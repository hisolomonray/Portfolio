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
            <p>
              Solomon, also called Jedidiah, was, according to the Hebrew Bible,
              Old Testament, Quran, and Hadiths, a fabulously wealthy and wise
              king of the United Kingdom of Israel who succeeded his father,
              King DavidSolomon, also called Jedidiah, was, according to the
              Hebrew Bible, Old Testament, Quran, and Hadiths, a fabulously
              wealthy and wise king of the United Kingdom of Israel who
              succeeded his father, King David{" "}
            </p>
          </div>
          <div className="job job-1">
            <h3> 123 Web Shop</h3>
            <h6>Full Stact Developer</h6>
            <p>
              {" "}
              Solomon, also called Jedidiah, was, according to the Hebrew Bible,
              Old Testament, Quran, and Hadiths, a fabulously wealthy and wise
              king of the United Kingdom of Israel who succeeded his father,
              King DavidSolomon, also called Jedidiah, was, according to the
              Hebrew
            </p>
          </div>
          <div className="job job-2">
            <h3> Designsers ABC</h3>
            <h6>Front End Developer</h6>
            <p>
              {" "}
              Solomon, also called Jedidiah, was, according to the Hebrew Bible,
              Old Testament, Quran, and Hadiths, a fabulously wealthy and wise
              king of the United Kingdom of Israel who succeeded his father,
              King DavidSolomon, also called Jedidiah, was, according to the
              Hebrew
            </p>
          </div>
          <div className="job job-3">
            <h3> Web Works</h3>
            <h6>Graphic Designer</h6>
            <p>
              {" "}
              Solomon, also called Jedidiah, was, according to the Hebrew Bible,
              Old Testament, Quran, and Hadiths, a fabulously wealthy and wise
              king of the United Kingdom of Israel who succeeded his father,
              King DavidSolomon, also called Jedidiah, was, according to the
              Hebrew
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default about
