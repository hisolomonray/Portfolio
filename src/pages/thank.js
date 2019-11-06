import React from "react"
import { Link } from "gatsby"
function thank() {
  return (
    <div>
      <h1> Your Messege is Sent!</h1>
      <h2> Well get back to You as soon as Possible!</h2>

      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default thank
