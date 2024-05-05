import React from 'react'
import Services from './Services'
import AboutUs from './AboutUs'
// import Projects from './Projects'
import { CgMail } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Footer from './Footer'
import ContactUs from './ContactUs'
export default function HomePage() {
    return (
        <>
            <section id='hero-section' className="bg-[url('/Images/hero-bg.png')]  flex flex-cols justify-center lg:bg-cover bg-center bg-no-repeat lg:h-[1300px] lg:bg-top sm:bg-cover sm:bg-top lg:p-20 sm:p-30 sm:h-[100px] relative">
                <img src='/Images/bubble1.png' width={166} height={153} className='absolute left-[300px] top-80' />
                <img src='/Images/bubble1.png' width={166} height={153} className='absolute left-[80px] bottom-72' />
                <img src='/Images/full-stack.png' width={166} height={153} className='absolute right-[300px] top-96' />
                <img src='/Images/2exp.png' width={166} height={153} className='absolute left-[200px] bottom-96' />
                <div>
                    <h1 className='text-white text-[70px] font-bold'>Hi I &#39;M <span className='text-[#FFD700]'>Nilesh Dubey</span></h1>
                    <div className='flex justify-center items-center gap-3 text-3xl text-white'>
                        <a href="mailto:nileshdubey060@gmail.com" target="_blank"><CgMail /></a>
                        <a href="https://www.instagram.com/nileshdubey.in?igsh=NTIwYTg0eGt2Ympq" target="_blank"><AiFillInstagram /></a>
                        <a href="https://wa.link/4kvkuh" target="_blank"><AiOutlineWhatsApp /></a>
                        <a href="https://www.linkedin.com/in/nilesh-dubey-ba4197222" target="_blank"><AiFillLinkedin /></a>
                        <a href="https://github.com/nileshdubey82" target="_blank"><AiFillGithub /></a>
                    </div>
                </div>
            </section>
            {/* For services */}
            <Services />
            {/* For About Me */}
            <AboutUs />
            {/* For Projects */}
            {/* <Projects/> */}

            {/* Contact Us */}
            <ContactUs />
            {/* Footer */}
            <Footer />
        </>
    )
}
