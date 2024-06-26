import React from 'react'
import image from '../../Images/undraw-contact.svg'
import './Form.css'
import emailJs from 'emailjs-com'

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    emailJs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID,
      )
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  return (
    <div className="contact">
      <div className="row">
        <div className="col-1">
          <h3>Let's talk about everything!</h3>
          <p></p>
          <p>
            <img src={image} alt="Image" className="img" />
          </p>
        </div>
        <div className="col-2">
          <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols={30}
                  rows={7}
                  placeholder="Write your message"
                  defaultValue={''}
                  style={{ height: 'auto' }}
                />
              </div>
            </div>
            <div className="btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
