import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

export default class Example extends React.Component {
  render() {
    return (
      <div id="form">
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <FormGroup>
            <Input type="name" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email"></Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <Label for="text"></Label>
            <Input
              type="textarea"
              name="text"
              id="text"
              placeholder="Message "
            />
          </FormGroup>
        </Form>
        <div className="btn">
          <div ClassName="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <Button>Submit</Button>
        </div>
      </div>
    )
  }
}
