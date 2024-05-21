import { BsFiletypeCss } from "react-icons/bs";
import { BiDesktop } from "react-icons/bi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
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
import { useSelector } from "react-redux";
function AboutUs() {
  const theme = useSelector((state) => { return state.ThemeSlice });
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
      Name: "JavaScript",
      Icon: <IoLogoJavascript />
    }

    ,
    {
      id: 4,
      Name: "HTML",
      Icon: <BsFiletypeHtml />
    }
    ,
    {
      id: 5,
      Name: "CSS",
      Icon: <BsFiletypeCss />
    }
    ,

    {
      id: 6,
      Name: "Tailwind / Bootstrap",
      Icon: <SiTailwindcss />
    },
    {
      id: 7,
      Name: "Mysql",
      Icon: <SiMysql />
    }
    ,
    {
      id: 8,
      Name: "Php",
      Icon: <BsFiletypePhp />
    }
    ,
    {
      id: 9,
      Name: "Git & GitHub",
      Icon: <AiOutlineGithub />
    }
    ,
    {
      id: 10,
      Name: "System Designing",
      Icon: <MdSettingsSystemDaydream />
    }

    ,
    {
      id: 11,
      Name: "Basic Desktop Engineering",
      Icon: <BiDesktop />
    }
  ]

  return (
    <motion.section id="aboutme" className="lg:py-10 sm:0-5 py-10" initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={ref}>
      <div className="bg-[#f9f8fb] p-3 lg:p-5 rounded-xl dark:bg-[#212121]">
        <div className="bg-white rounded-xl p-5 dark:bg-[#263238]">
          <h1 className="text-black text-4xl text-center dark:text-[#fff]">About Me</h1>
          <p className="text-center mt-3 dark:text-[#fff]">
            Tech-savvy individual with a passion for innovation, a knack for
            problem-solving, and a love for creative expression through design.
          </p>
          <div className="lg:flex mt-10 flex-wrap">
            <div className="flex-1 flex justify-center p-2">
              {" "}
              <img src={
                theme ? '/Images/profilepick-done1.png' : "/Images/about-pick.png"
              }



                className="image-full " />
            </div>
            <div className="flex-1 items-center flex align-middle justify-center ">
              <div className="lg:px-10 mt-10 lg:mt-0 ">
                <p className="text-justify text-[#4e4e4e] dark:text-[#fff]">
                  Welcome to my portfolio page! I&apos;m a dedicated developer with
                  expertise in a range of technologies, including ReactJS,
                  ReactNative, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript,
                  MySQL, PHP, Git, and GitHub. My journey in the tech world has
                  equipped me with a deep understanding of frontend and backend
                  development. While ReactJS and ReactNative are my forte, I&apos;m
                  also adept at crafting responsive and visually appealing web
                  interfaces with HTML, CSS, and modern CSS frameworks like
                  Bootstrap and Tailwind CSS. I&apos;m well-versed in JavaScript for
                  dynamic client-side scripting and have a solid grasp of
                  database management with MySQL. Proficient in
                  version control with Git and collaborative coding on GitHub, I
                  ensure smooth project workflows. While I&apos;m continuously
                  expanding my skill set, I also have a foundational
                  understanding of Node.js, Next.js, TypeScript, MongoDB,and PHP. Let&apos;s
                  collaborate and bring your ideas to life with cutting-edge
                  technology and seamless user experiences!

                </p>
                <a
                  className="btn btn-md my-4 hover:bg-[#5D0DB3] dark:bg-white dark:text-[black] hover:scale-[1.1] sm:btn-sm md:btn-md lg:btn-lg text-xl bg-[#5D0DB3] text-white"
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

        <h1 className="text-4xl text-center mt-10 font-bold underline dark:text-white">Skills</h1>
        <motion.div className="flex py-5 gap-5 justify-center flex-wrap " initial={{ opacity: 0, y: 20 }}
          animate={controls}
          ref={ref}>
          {Skills.map((i, index) => {
            return (
              <div
                key={i.id || index}
                className="bg-white lg:p-8 p-5 rounded-md gap-2 flex flex-col justify-center w-[135px] lg:w-[200px] *:
      bg-gradient-to-r  dark:from-[#263238]  dark:via-[#3b4e57]  dark:to-[#263238] hover:scale-[1.1] transition-all delay-100
      
      "
              >
                <div className="flex justify-center text-[#5d0db3] text-5xl dark:text-white">
                  {i.Icon}
                </div>
                <h1 className="font-bold text-center text-sm lg:text-[16px] dark:text-white">
                  {i.Name}
                </h1>
              </div>
            );
          })}




        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
