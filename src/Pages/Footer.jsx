import { CgMail } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-[#5f0bb8] text-neutral-content">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>
                        Portfolio designed by <b>Nilesh Dubey</b>. <br />
                        Taking reference from Figma Design:
                        <a href='https://www.figma.com/file/7sPazBjE206tyN8tVQM3QG/Personal-website-%7C-Portfolio-Landing-page-(Community)?type=design&node-id=1-2&mode=design&t=TUpsz6ZVdvD5STQf-0' className='text-blue-400' target="_blank">Click Here</a>
                    </p>

                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <h6 className="text-md font-bold">Contact: <a href="tel:916267751993">+91 6267751993</a></h6>
                    <h6 className="text-md font-bold">Gmail: <a href="mailto:nileshdubey060@gmail.com">nileshdubey060@gmail.com</a></h6>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                        <a href="mailto:nileshdubey060@gmail.com" target="_blank"><CgMail /></a>
                        <a href="https://www.instagram.com/nileshdubey.in?igsh=NTIwYTg0eGt2Ympq" target="_blank"><AiFillInstagram /></a>
                        <a href="https://wa.link/4kvkuh" target="_blank"><AiOutlineWhatsApp /></a>
                        <a href="https://www.linkedin.com/in/nilesh-dubey-ba4197222" target="_blank"><AiFillLinkedin /></a>
                        <a href="https://github.com/nileshdubey82" target="_blank"><AiFillGithub /></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
