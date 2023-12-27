import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_yt0fpha';
    const templateId = 'template_299syog';
    const userId = 'Sd7wWWvcrFX0MViOl';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto p-4 mt-20 mb-20 flex flex-col items-center justify-center md:scale-[1.2]" id='contact'>
      <h2 className="text-2xl font-bold mb-4 text-primary typoRounded">Want to get in touch with me?</h2>
      <h3 className="text-primary text-xl text-center typoRounded mt-[-20px] mb-5">Hit me up with a message!</h3>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-primary mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-primary mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-primary mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none"
            required
          />
        </div>

        <button type="submit" className="bg-[#68A3BB] text-primary px-4 py-2 rounded-xl hover:scale-[1.03] duration-300 transition-all ease-in-out w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
