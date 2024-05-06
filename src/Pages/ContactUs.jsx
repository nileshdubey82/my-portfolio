import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vrn2cur', 'template_dlr0jh5', e.target, 'orQIlmBfwzy8uR3pP')
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        toast.error("Sorry, something went wrong. Please try again later.");
      });
  };

  return (
    <section className='bg-[#F5F2F9] p-5 my-10'>
      <div className="max-w-md mx-auto mt-10 bg-[#F5F2F9]">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="mb-6 text-center">Please fill out the form below to get in touch with me.</p>
        <form onSubmit={sendEmail} className="space-y-6">  
          {/* Personal Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
            </div>
          </div>
          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div>
              <label htmlFor="phone" className="block font-semibold">Contact Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
            </div>
          </div>
          {/* Inquiry Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Inquiry</h3>
            <div>
              <label htmlFor="message" className="block font-semibold">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <button type="submit" className="bg-[#5f0bb8] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5f0bb860] focus:outline-none focus:bg-[#5f0bb860]">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
}
