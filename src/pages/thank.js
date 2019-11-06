import React from "react"
import { Jumbotron, Container } from "reactstrap"
import Menu from "../components/toggle"

const Example = props => {
  return (
    <div>
      <Menu />
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3"> Thank You!</h1>
          <p className="lead">You'r Message is Sent!</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Example
