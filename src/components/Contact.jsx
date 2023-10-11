import React from "react"
import emailjs from '@emailjs/browser';
import FormPopup from './FormPopup'

export default function Contact() {
  const [formData, setFormData] = React.useState({ Name: "", Email: "", Subject: "", Message: "" })
  const [popup, setPopup] = React.useState({ show: false })

  function closePopup() { setPopup({ show: false }) }

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
    // Cleaning Form
    setFormData({ Name: "", Email: "", Subject: "", Message: "" })
    setPopup({ show: true, color: '.bg-success-subtle', text: 'Email envoyé !' })

    // Sending Mail
    // emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   form.current,
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    // .then(function(response) {
    //   console.log('SUCCESS!', response.status, response.text);

    // }, function(error) {

    //   console.log('FAILED...', error);
    // });
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
                    onChange={handleChange} value={formData.Name} />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Email" placeholder="Email Address"
                    onChange={handleChange} value={formData.Email} />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <input className="form-control" type="text" name="Subject" placeholder="Subject"
                    onChange={handleChange} value={formData.Subject} />
                </div>

<FormPopup data={popup} />

                <div className="col-12 mt-3 wow fadeInUp">
                  <textarea className="form-control" name="Message" rows="6" placeholder="Enter message here.."
                    onChange={handleChange} value={formData.Message} ></textarea>
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
