import { BsFiletypePhp } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { BiCloudDownload } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
function AboutUs() {
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
  const Skills = [
    {
      id: 1,
      Name: "React Js",
      Icon: <DiReact />
    },
    {
      id: 2,
      Name: "React Native",
      Icon: <TbBrandReactNative />
    }
    ,
    {
      id: 3,
      Name: "NextJs",
      Icon: <TbBrandNextjs />
    }
    ,
    {
      id: 4,
      Name: "Tailwind/Bootstrap",
      Icon: <SiTailwindcss />
    }
    ,
    {
      id: 5,
      Name: "Git & GitHub",
      Icon: <BsFiletypeHtml />
    }
    ,
    {
      id: 5,
      Name: "Mysql",
      Icon: <SiMysql />
    }
    ,
    {
      id: 5,
      Name: "Php",
      Icon: <BsFiletypePhp />
    }
  ]

  return (
    <motion.section id="aboutme" className="lg:py-10 sm:0-5 py-10" initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={ref}>
      <div className="bg-[#f9f8fb] p-3 lg:p-5 rounded-xl">
        <div className="bg-white rounded-xl p-5 ">
          <h1 className="text-black text-4xl text-center">About Me</h1>
          <p className="text-center mt-3">
            Tech-savvy individual with a passion for innovation, a knack for
            problem-solving, and a love for creative expression through design.
          </p>
          <div className="lg:flex mt-10 flex-wrap">
            <div className="flex-1 flex justify-center p-2">
              {" "}
              <img src="/Images/about-pick.png" className="image-full" />
            </div>
            <div className="flex-1 items-center flex align-middle justify-center ">
              <div className="lg:px-10 mt-10 lg:mt-0 ">
                <p className="text-justify text-[#959595]">
                  Welcome to my portfolio page! I'm a dedicated developer with
                  expertise in a range of technologies, including ReactJS,
                  ReactNative, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript,
                  MySQL, PHP, Git, and GitHub. My journey in the tech world has
                  equipped me with a deep understanding of frontend and backend
                  development. While ReactJS and ReactNative are my forte, I'm
                  also adept at crafting responsive and visually appealing web
                  interfaces with HTML, CSS, and modern CSS frameworks like
                  Bootstrap and Tailwind CSS. I'm well-versed in JavaScript for
                  dynamic client-side scripting and have a solid grasp of
                  database management with MySQL and MongoDB. Proficient in
                  version control with Git and collaborative coding on GitHub, I
                  ensure smooth project workflows. While I'm continuously
                  expanding my skill set, I also have a foundational
                  understanding of Node.js, Next.js, TypeScript, and PHP. Let's
                  collaborate and bring your ideas to life with cutting-edge
                  technology and seamless user experiences!
                </p>
                <a
                  className="btn btn-md my-4 hover:bg-[#5D0DB3] hover:scale-[1.1] sm:btn-sm md:btn-md lg:btn-lg text-xl bg-[#5D0DB3] text-white"
                  href="/Images/nilesh_Resume_final.pdf"
                  target="_blank"
                  download
                >
                  {" "}
                  <BiCloudDownload />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl text-center mt-10 font-bold underline">Skills</h1>
        <motion.div className="flex py-5 gap-9 justify-center flex-wrap " initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={ref}>
          {Skills.map((i) => {
            return (<>
              <div className="bg-white lg:p-8 p-5 rounded-md gap-2 flex flex-col justify-center w-[200px]">
                <div
                  className="flex justify-center text-[#5d0db3] text-5xl "
                >
                  {i.Icon}
                </div>
                <h1 className="font-bold text-center">{i.Name}</h1>
              </div>
            </>)
          })}



        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
