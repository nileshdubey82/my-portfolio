import React from "react";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Projects from './Projects'
import { CgMail } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Achivements from "./Achivements";
export default function HomePage() {
  return (
    <>
      <section
        id="hero-section"
        className="bg-gradient-to-r from-[#5f0bb8] via-purple-500 to-[#5f0bb8] flex flex-cols justify-center lg:bg-cover  bg-no-repeat lg:h-[700px] lg:bg-top bg-cover  bg-top lg:p-20 p-5 h-[500px] relative rounded-xl mt-8 drop-shadow-md"
      >
        <img
          src="/Images/bubble1.png"
          className="absolute w-[50px] lg:w-[167px]  lg:left-[300px] lg:top-44 left-[100px] top-28  "
        />
        <img
          src="/Images/bubble1.png"
          className="absolute  w-[50px] lg:left-[10px] lg:w-[167px] lg:bottom-0  left-[30px] bottom-[200px]"
        />
        <img
          src="/Images/full-stack.png"
          className="  w-[50px] absolute lg:right-[300px] lg:w-[167px]  lg:top-60 right-[50px] top-[100px] z-10"
        />
        <img
          src="/Images/2exp.png"
          className="  w-[50px] absolute lg:left-[200px] lg:w-[167px] lg:bottom-20 left-[50px] bottom-[250px] z-10"
        />
        <img
          src="/Images/profilepick-done1.png"
          className="   absolute lg:left-auto  lg:bottom-0 left-auto bottom-0 z-10 w-72 lg:w-96"
        />

        <h1 className="absolute lg:top-80 left-auto lg:left-auto top-40 lg:text-[100px] text-[25px] z-[-0] text-[#ffffff18]">
          FULL-STACK DEVELOPER
        </h1>

        <div>
          <h1 className="text-white lg:text-[70px] text-[30px] font-bold">
            Hi I &#39;M <span className="text-[#FFD700]">Nilesh Dubey</span>
          </h1>
          <div className="flex justify-center items-center gap-3 lg:text-3xl text-white text-xl">
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
      </section>
      {/* For services */}
      <Services />
      {/* For About Me */}
      <AboutUs />
      {/* For Projects */}
      <Projects/>
        {/* For achivements */}
        <Achivements/>


      {/* Contact Us */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </>
  );
}
