import React from "react"
import { MdPerson, MdEmail, MdKeyboardHide } from "react-icons/md"
function form() {
  return (
    <div>
      <form
        action="/thank/"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            <MdPerson size="2rem" />{" "}
            <input type="text" name="name" placeholder="Name" />
          </label>
        </p>

        <p>
          <label>
            <MdEmail size="2rem" />
            <input type="email" name="email" placeholder="Email" />
          </label>
        </p>
        <p>
          <MdKeyboardHide size="2rem" />
          <textarea type="text" name="text" placeholder="Message"></textarea>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default form
