import React from "react"
import emailjs from '@emailjs/browser';
import FormPopup from '../components/FormPopup'
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const [formData, setFormData] = React.useState({ Name: "", Email: "", Subject: "", Message: "" })
  const [ popup, setPopup ] = React.useState({ show: false, type: "", text:"" })

  function closePopup() {
    setPopup(prevData => ({
      ...prevData,
      ['show']: false
    }))
   }

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

    // Sending Mail
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      // Cleaning Form
      setFormData({ Name: "", Email: "", Subject: "", Message: "" })
      // Success Alert
      setPopup({ show: true, type: 'success', text: <p>Merci pour votre message !</p> })
    }, function(error) {
      // Fail Alert
      setPopup({ show: true, type: 'danger', text: <p>Oops ! Votre message n&apos;a pas été envoyé.<br /> Merci de réessayer</p> })
      console.log('FAILED...', error);
    });
  }

  return (
    <div className="page-contact">
      <div className="container my-5">
        <Fade direction="down">
          <div className="text-center">
              <div className="badge badge-subhead mb-3 mt-5">Contact</div>
          </div>
          <h1 className="text-center fw-normal">Me contacter</h1>
        </Fade>
        <div className="row d-flex justify-content-center pt-3">
          <div className="col-lg-5">
            <Fade direction="up">
              <form className="vg-contact-form" onSubmit={handleSubmit} ref={form}>
                <div className="form-row justify-content-center">
                  <FormPopup data={popup} close={closePopup} />
                  <div className="col-6 mt-3">
                    <input className="form-control" type="text" name="Name" placeholder="Nom"
                      onChange={handleChange} value={formData.Name} required />
                  </div>
                  <div className="col-6 mt-3">
                    <input className="form-control" type="text" name="Email" placeholder="Email"
                      onChange={handleChange} value={formData.Email} required />
                  </div>
                  <div className="col-12 mt-3">
                    <input className="form-control" type="text" name="Subject" placeholder="Objet"
                      onChange={handleChange} value={formData.Subject} required />
                  </div>
                  <div className="col-12 mt-3">
                    <textarea className="form-control" name="Message" rows="6" placeholder="Votre message.."
                      onChange={handleChange} value={formData.Message} required ></textarea>
                  </div>
                  <button type="submit" className="btn btn-theme mt-3 ml-1">Envoyer</button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
