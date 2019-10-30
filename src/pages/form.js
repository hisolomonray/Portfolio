import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

export default class Example extends React.Component {
  render() {
    return (
      <div id="form">
        <Form action="POST" data-netlify="true">
          <FormGroup>
            <Input type="name" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email"></Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <Label for="message"></Label>
            <Input
              type="textarea"
              name="text"
              id="message"
              placeholder="Message "
            />
          </FormGroup>
          <div ClassName="field">
            <div data-netlify-recaptcha="true"></div>
          </div>
          <div className="btn">
            <Button>Submit</Button>
          </div>
        </Form>
      </div>
    )
  }
}
