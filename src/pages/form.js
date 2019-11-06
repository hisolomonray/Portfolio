import React from "react"

function form() {
  return (
    <div>
      <form
        action="/thank/"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            <input type="text" name="name" placeholder="Name" />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
        </p>
        <p>
          <textarea type="text" name="text" placeholder="Message"></textarea>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default form
