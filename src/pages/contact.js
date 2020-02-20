import React from "react"
import Menu from "../components/toggle"
import Footer from "../components/footer"
import Form from "./form"

function contact() {
  return (
    <div id="cover2">
      <Menu />
      <div id="contact">
        <h1 className="lg-heading">
          Email
          <span className="text-secondary"> Me </span>
        </h1>
        <h2 calssName="sm-heading">  </h2>

        <Form />

        <Footer />
      </div>
    </div>
  )
}

export default contact
