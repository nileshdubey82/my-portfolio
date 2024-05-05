import { BiCloudDownload } from "react-icons/bi";
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function AboutUs() {
  return (
    <section id='aboutme' className='lg:p-20 sm:0-5'>
      <div className='bg-[#5f0bb8] p-5 rounded-xl'>
        <div className='bg-white rounded-xl px-5 pt-5'>
          <h1 className='text-black text-4xl text-center'>
            About Me
          </h1>
          <p className='text-center mt-3'>Tech-savvy individual with a passion for innovation, a knack for problem-solving, and a love for creative expression through design.</p>
          <div className="lg:flex mt-10 flex-wrap">
            <div className="flex-1 flex justify-center"> <img src='/Images/mypick33.png' className='image-full' /></div>
            <div className="flex-1 items-center flex align-middle justify-center ">
              <div className="lg:px-10 mt-10 lg:mt-0 ">
                <p className="text-justify text-[#959595]">
                  Welcome to my portfolio page! I'm a dedicated developer with expertise in a range of technologies, including ReactJS, ReactNative, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, MySQL, PHP, Git, and GitHub. My journey in the tech world has equipped me with a deep understanding of frontend and backend development. While ReactJS and ReactNative are my forte, I'm also adept at crafting responsive and visually appealing web interfaces with HTML, CSS, and modern CSS frameworks like Bootstrap and Tailwind CSS. I'm well-versed in JavaScript for dynamic client-side scripting and have a solid grasp of database management with MySQL and MongoDB. Proficient in version control with Git and collaborative coding on GitHub, I ensure smooth project workflows. While I'm continuously expanding my skill set, I also have a foundational understanding of Node.js, Next.js, TypeScript, and PHP. Let's collaborate and bring your ideas to life with cutting-edge technology and seamless user experiences!
                </p>
                <a className="btn btn-md my-4 hover:bg-[#5D0DB3] hover:scale-[1.1] sm:btn-sm md:btn-md lg:btn-lg text-xl bg-[#5D0DB3] text-white" href="/Images/nilesh_Resume_final.pdf" target="_blank" download> <BiCloudDownload />Download CV</a>
              </div></div>
          </div>
        </div>

        <div className="flex py-5 gap-9 justify-center flex-wrap">
          <div className="bg-white lg:p-8 p-5 rounded-md ">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 70 }} role="progressbar">70%</div>
            <h1 className="font-bold text-center">React JS</h1>
          </div>
          <div className="bg-white lg:p-8 p-5  rounded-md">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 75 }} role="progressbar">75%</div>
            <h1 className="font-bold text-center">React Native</h1>
          </div>
          <div className="bg-white lg:p-8 p-5  rounded-md">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 95 }} role="progressbar">95%</div>
            <h1 className="font-bold text-center">HTML/CSS</h1>
          </div>
          <div className="bg-white lg:p-8 p-5  rounded-md">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 80 }} role="progressbar">80%</div>
            <h1 className="font-bold text-center">Tailwind</h1>
          </div>
          <div className="bg-white lg:p-8 p-5  rounded-md">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 40 }} role="progressbar">40%</div>
            <h1 className="font-bold text-center">Node/NextJs</h1>
          </div>
          <div className="bg-white lg:p-8 p-5  rounded-md">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 50 }} role="progressbar">50%</div>
            <h1 className="font-bold text-center">MySql</h1>
          </div>
          <div className="bg-white lg:p-8 p-5  rounded-md">
            <div className="radial-progress text-[#6E0FD4]" style={{ "--value": 50 }} role="progressbar">50%</div>
            <h1 className="font-bold text-center">Git&Github</h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs
