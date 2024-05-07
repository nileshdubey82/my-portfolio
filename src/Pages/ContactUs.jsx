import { HiLocationMarker } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vrn2cur",
        "template_dlr0jh5",
        e.target,
        "orQIlmBfwzy8uR3pP"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry, something went wrong. Please try again later.");
        }
      );
  };

  return (
<<<<<<< HEAD
    <section className='bg-[#F5F2F9] p-5 my-10' id='contactme'>
      <div className="max-w-md mx-auto mt-10 bg-[#F5F2F9]">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="mb-6 text-center">Please fill out the form below to get in touch with me.</p>
        <form onSubmit={sendEmail} className="space-y-6">  
          {/* Personal Information Section */}
=======
    <motion.section
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  
      className="bg-white   flex flex-wrap justify-center lg:px-20  lg:py-10 gap-10 w-[100%]"
      id="contactme"
    >
      <div className="bg-white  lg:my-10 flex flex-wrap justify-center  rounded-md drop-shadow-2xl lg:w-[100%] lg:p-4">
        <div className="bg-[#530C9F] py-10 rounded-md lg:px-10 px-5 flex flex-col justify-between relative lg:w-[40%]">
          <img
            src="/Images/circlecon.png"
            className="absolute right-0 bottom-0 w-24 lg:w-36"
          />
>>>>>>> faf897bac00ba6d2e163ebe341016d09a63f0188
          <div>
            <h1 className="text-left text-white lg:text-4xl text-2xl font-bold">
              Contact Information
            </h1>
            <p className="text-left text-white">
              Say something to start a live chat!
            </p>
          </div>

          <div className="text-white mt-10 lg:mt-0">
            <p className="flex items-center gap-5 lg:text-xl text-md">
              <AiFillPhone /> :<a href="tel:916267751993">+91 6267751993</a>{" "}
            </p>
            <p className="flex items-center gap-5 text-xl lg:mt-10">
              <CgMail /> :{" "}
              <a href="mailto:nileshdubey060@gmail.com">
                nileshdubey060@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-5 text-xl lg:mt-10">
              <HiLocationMarker /> : <a> Bhilai Chhattishgarh.</a>
            </p>
          </div>
          <div className="mt-20 lg:mt-0">
            <div className="flex flex-wrap gap-4 text-4xl text-white">
              <a href="mailto:nileshdubey060@gmail.com" target="_blank">
                <CgMail />
              </a>
              <a
                href="https://www.instagram.com/nileshdubey.in?igsh=NTIwYTg0eGt2Ympq"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
              <a href="https://wa.link/4kvkuh" target="_blank">
                <AiOutlineWhatsApp />
              </a>
              <a
                href="https://www.linkedin.com/in/nilesh-dubey-ba4197222"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/nileshdubey82" target="_blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 lg:w-[60%] h-[647px] relative py-10">
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Personal Information</h3> */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>
            {/* Contact Information Section */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Contact Information</h3> */}
              <div>
                <label htmlFor="phone" className="block font-semibold">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            {/* Inquiry Section */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Inquiry</h3> */}
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#5f0bb8] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5f0bb860] focus:outline-none focus:bg-[#5f0bb860]"
              >
                Send Message
              </button>
            </div>
          </form>
          <img
            src="/Images/letter_send.png"
            className="absolute bottom-0 right-5"
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.section>
  );
}
