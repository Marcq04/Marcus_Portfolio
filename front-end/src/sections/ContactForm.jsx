import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [result, setResult] = useState({ message: '', success: null }); // Store message and success status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_1hytcph',
        'template_065nssi',
        e.target,
        'wMasmC2ml7_eGxIuQ'
      )
      .then(
        (result) => {
          setResult({
            message: 'Message sent successfully!',
            success: true
          });
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
          setTimeout(() => setResult({ message: '', success: null }), 5000); // Clear the result message after 5 seconds
        },
        (error) => {
          setResult({
            message: 'Failed to send message, please try again.',
            success: false
          });
          setTimeout(() => setResult({ message: '', success: null }), 5000); // Clear the result message after 5 seconds
        }
      );
  };

  return (
    <div className="contact">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      
      {result.message && (
        <p style={{ color: result.success ? 'green' : 'red', marginTop: '10px' }}>
          {result.message}
        </p>
      )}

      <div className="contact-info">
        <FaPhone size={20} />
        <p>(647) 771-2984</p>
      </div>
      <div className="contact-info">
        <FaEnvelope size={20} />
        <p>quitiquit@gmail.com</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/Marcq04" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="black" />
        </a>
        <a href="https://www.linkedin.com/in/marcus-quitiquit/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="black" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
