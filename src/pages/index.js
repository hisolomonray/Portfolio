import React from "react"
import "../style/style.scss"

import "bootstrap/dist/css/bootstrap.min.css"

import Main from "../components/main"
import Menu from "../components/toggle"

function index() {
  return (
    <div>
      <Menu />
      <Main />
    </div>
  )
}

export default index
