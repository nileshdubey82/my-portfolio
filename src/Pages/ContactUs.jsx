import { BsVoicemail } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
        },
      });
    }
  }, [controls, inView]);
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
    <motion.section
      // initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}

      className="bg-white   flex flex-wrap justify-center lg:px-20  lg:py-10 p-5 gap-10 w-[100%]"
      id="contactme"
    >
      <div className="bg-white  lg:my-10 flex flex-wrap justify-center  rounded-md drop-shadow-2xl w-[90%] lg:w-[100%] lg:p-4">
        <div className="bg-[#530C9F] py-10 rounded-md lg:px-10  flex flex-col justify-between relative lg:w-[40%]">
          <img
            src="/Images/circlecon.png"
            className="absolute right-0 bottom-0 w-24 lg:w-36"
          />
          <div>
            <h1 className="text-left text-white lg:text-4xl text-2xl font-bold px-4">
              Contact Information
            </h1>
            <p className="text-left text-white px-4">
              Say something to start a live chat!
            </p>
          </div>

          <div className="text-white mt-10 lg:mt-0 px-4">
            <p className="flex items-center gap-5 lg:text-xl text-md">
              <AiFillPhone /> :<a href="tel:916267751993">+91 6267751993</a>{" "}
            </p>
            <p className="flex items-center gap-5 lg:text-xl text-md lg:mt-10">
              <CgMail /> :{" "}
              <a href="mailto:nileshdubey060@gmail.com">
                nileshdubey060@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-5 lg:text-xl text-md lg:mt-10">
              <HiLocationMarker /> : <a> Bhilai Chhattishgarh.</a>
            </p>
          </div>
          <div className="mt-20 lg:mt-0 px-4">
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
              <a href="https://wa.link/4kvkuh" target="_blank" className="relative z-1">
                <AiOutlineWhatsApp />
              </a>
              <a
                href="https://www.linkedin.com/in/nilesh-dubey-ba4197222"
                target="_blank"
                className="relative z-1"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/nileshdubey82" target="_blank" className="relative z-1">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 lg:w-[60%] lg:h-[647px] relative py-10 w-[100%]">
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Personal Information</h3> */}
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
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
            </div>
            {/* Contact Information Section */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Contact Information</h3> */}
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
            className="absolute bottom-0 right-5 hidden lg:block"
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.section>
  );
}
