import React, { useState ,useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("reactjs");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
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
  const projects = {
    reactjs: [
      {
        name: "Netflix clone UI",
        description:
          "Replica of Netflix UI built with React and Tailwind CSS. Currently in progress.",
        image: "/Images/Projects/netflix.jpg",
        link: "#",
        repo: "https://github.com/nileshdubey82/netflix-clone-reactJs-with-tailwind",
      },
      {
        name: "HRMS UI",
        description:
          "User interface for Human Resource Management System. Currently in progress.",
        image: "/Images/Projects/hrsms.jpg",
        link: "#",
        repo: "https://github.com/nileshdubey82/hrms-application",
      },
      {
        name: "Self Portfolio",
        description:
          "My personal portfolio website showcasing projects, skills, and experiences. Live site.",
        image: "/Images/Projects/portfolio.jpg",
        link: "https://nileshdubey.vercel.app/",
        repo: "https://github.com/nileshdubey82/my-portfolio",
      },
    ],
    reactnative: [
      {
        name: "Govt Inspection App",
        description: "App for government inspections",
        image: "/Images/Projects/gpins.jpg",
        link: "#",
        repo: "#",
      },
      {
        name: "Water & Electricity Tracking",
        description: "Track water and electricity usage",
        image: "/Images/Projects/waterele.jpg",
        link: "#",
        repo: "https://github.com/nileshdubey82/water-electricity-tracking-app-react-native",
      },
      {
        name: "Student Management App",
        description: "App for managing student records",
        image: "/Images/Projects/student.jpg",
        link: "#",
        repo: "https://github.com/nileshdubey82/my-portfolio",
      },
      {
        name: "Thief Detection App",
        description: "App to detect intruders",
        image: "/Images/Projects/thief.jpg",
        link: "#",
        repo: "https://github.com/nileshdubey82/thief-detection-react-native",
      },
      {
        name: "Attendance Fetching App",
        description: "App for fetching attendance records",
        image: "/Images/Projects/atted.png",
        link: "#",
        repo: "https://github.com/nileshdubey82/attendance-fetching-app-react-native",
      },
      {
        name: "Home Automation App",
        description: "Control home devices remotely",
        image: "/Images/Projects/homeauto.jpg",
        link: "#",
        repo: "https://github.com/nileshdubey82/home-automation-react-native",
      },
    ],
    wordpress: [
      {
        name: "Woocommerce",
        description: "E-commerce website with Wordpress",
        image: "/Images/Projects/luckygirl.png",
      },
      {
        name: "Landing Pages",
        description: "Customized landing pages",
        image: "/Images/Projects/landing.png",
      },
    ],
  };


  return (
    <motion.section id="projects" initial={{ opacity: 0, y: 20 }}
    animate={controls}
ref={ref}>
      <h1 className="text-center text-3xl font-bold dark:text-white text-black">Projects</h1>
      <p className="text-center text-gray-500 mt-4 dark:text-white">
        I develop web & mobile apps with ReactJS, React Native, & WordPress,
        focusing on user experience & efficient functionality
      </p>
      <div className="flex justify-center lg:gap-5 gap-1 mt-10">
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "reactjs"
              ? "bg-[#5f0bb8] dark:bg-white dark:text-black text-white"
              : "bg-gray-400 text-white"
          } rounded-md text-[15px] lg:text-md`}
          onClick={() => handleTabClick("reactjs")}
        >
          ReactJS
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "reactnative"
            ? "bg-[#5f0bb8] dark:bg-white dark:text-black text-white"
            : "bg-gray-400 text-white"
          } rounded-md text-[15px] lg:text-md `}
          onClick={() => handleTabClick("reactnative")}
        >
          React Native
        </div>
        <div
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "wordpress"
            ? "bg-[#5f0bb8] dark:bg-white dark:text-black text-white"
            : "bg-gray-400 text-white"
          } rounded-md text-[15px] lg:text-md`}
          onClick={() => handleTabClick("wordpress")}
        >
          Wordpress
        </div>
      </div>
      <div className="flex flex-wrap gap-5 p-4 justify-center">
        {projects[activeTab].map((project, index) => (
          <div key={index}>
          <div  className="relative dark:bg-[#263238] bg-[#d6d2df] rounded-md">
            <img
              className="w-[400px] h-[250px] lg:object-cover object-contain rounded-lg cursor-pointer"
              src={project.image}
              alt={project.name}
            />
            
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75 text-white flex justify-center items-center flex-col rounded-md">
              <div className="text-center">
                <p className="px-5">{project.description}</p>
              </div>
              <div className="flex mt-4">
                <a
                  href={project.link}
                  className="px-4 py-2 text-sm text-white cursor-pointer hover:text-white bg-[#5f0bb8] hover:bg-[#4c0898] transition-colors duration-300 rounded-md mr-2 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                  target="_blank"
                >
                  View Project
                </a>
                <a
                  href={project.repo}
                  className="px-4 py-2 text-sm text-white cursor-pointer hover:text-white bg-[#5f0bb8] hover:bg-[#4c0898] transition-colors duration-300 rounded-md dark:bg-white dark:text-black dark:hover:bg-gray-300"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </div>
              
            </div>
            
            </div>
            <h2 className="text-lg font-semibold text-center dark:text-white text-black ">
                  {project.name}
                </h2>
          </div>
          
        ))}
      </div>
    </motion.section>
  );
}
