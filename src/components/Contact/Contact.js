import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        // Here you can add your email sending logic
        // For example, using emailjs or a backend API
        window.location.href = `mailto:${contact.email}?subject=Contact from ${formData.name}&body=${formData.message}`
        setFormData({ name: '', email: '', message: '' })
      } catch (error) {
        console.error('Failed to send email:', error)
      }
    }
  }

  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='section__subtitle'>
        <center>
          I am available for freelance work and open to new opportunities.<br />Feel free to reach out to me via email.<br />
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type='text'
                className='input'
                placeholder='Your Name'
                aria-label='Your Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className='error'>{errors.name}</div>}
            </div>

            <div className="input-container">
              <input
                type='email'
                className='input'
                placeholder='Your Email'
                aria-label='Your Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className='error'>{errors.email}</div>}
            </div>

            <div className="input-container">
              <textarea
                className='input'
                placeholder='Your Message'
                aria-label='Your Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='4'
                style={{ resize: 'vertical' }}
              />
              {errors.message && <div className='error'>{errors.message}</div>}
            </div>

            <button type='submit' className='btn btn--outline'>Send</button>
          </form>
        </center>
      </p>
    </section>
  )
}

export default Contact
