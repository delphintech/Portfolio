import React from "react"
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = React.useState({ Name: "", Email: "", Subject: "", Message: ""})

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const form = React.useRef();

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="page-contact">
      <div className="container my-5">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead mb-3 mt-5">Contact</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
        <div className="row d-flex justify-content-center pt-3">
          <div className="col-lg-5">
            <form className="vg-contact-form" onSubmit={handleSubmit} ref={form}>
              <div className="form-row justify-content-center">
                <div className="col-6 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Name" placeholder="Your Name"
                    onChange={handleChange} value={FormData.Name} />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Email" placeholder="Email Address"
                    onChange={handleChange} value={FormData.Email} />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Subject" placeholder="Subject"
                    onChange={handleChange} value={FormData.Subject} />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <textarea className="form-control" name="Message" rows="6" placeholder="Enter message here.."
                    onChange={handleChange} value={FormData.Message} ></textarea>
                </div>
                <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
