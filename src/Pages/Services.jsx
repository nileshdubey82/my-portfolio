import { SiRobotframework } from "react-icons/si";
import { GiWireframeGlobe } from "react-icons/gi";
import { BiMobileAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';
function Services() {
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
  return (
    <motion.section id="services" className="bg-transparent relative mt-10" initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={ref}>
      <h1
        className="
                        text-center
                        text-4xl
                        font-bold
                        dark:text-white
                        text-black
                "
      >
        Services
      </h1>
      <p className="text-center text-gray-400 mt-5 dark:text-white px-[0px] lg:px-[285px] ">
        Full stack developer crafting responsive interfaces, robust backends,
        API integrations, and efficient deployments. Maintenance and support
        provided.
      </p>
      <div className="flex justify-center gap-8 mt-9 flex-wrap dark:text-white ">
        <div className="group text-center w-[300px] p-5 flex flex-col justify-center dark:hover:bg-slate-500 transition-all delay-75 scroll-smooth hover:rounded-lg  hover:bg-[#5f0bb8] ">
          <div className="flex justify-center text-7xl dark:text-[#ffffff] text-[#5f0bb8] group-hover:text-[#fff]">
            <CgWebsite />
          </div>
          <h1 className="font-bold text-xl group-hover:text-[#fff] text-black dark:text-white">Web Site Design</h1>
          <p className="text-[#4d4d4d] dark:text-[#b8b6b6] dark:group-hover:text-[#dad8d8] transition-colors group-hover:text-[#fff]">
            Crafting visually stunning websites with user-centric design,
            intuitive navigation, and seamless functionality. Responsive,
            scalable, and tailored to your brand.
          </p>
        </div>

        <div className=" group  dark:hover:bg-slate-500 transition-all delay-75  text-center w-[300px]  p-5  rounded-xl drop-shadow-md flex flex-col justify-cente hover:bg-[#5f0bb8]">
          <div className="flex justify-center text-7xl dark:text-[#ffffff] text-[#5f0bb8] group-hover:text-[#fff] ">
            <BiMobileAlt />
          </div>

          <h1 className="font-bold text-xl group-hover:text-[#fff] text-black dark:text-white">App Design</h1>
          <p className="text-[#4d4d4d] dark:group-hover:text-[#dad8d8] transition-all delay-75 group-hover:text-[#fff] dark:text-[#b8b6b6]">
            Creating captivating apps with sleek interfaces, seamless
            navigation, and optimized performance for a superior user
            experience, leveraging React Native.
          </p>
        </div>
        <div className="group  dark:hover:bg-slate-500 transition-all delay-75  text-center w-[300px] p-5 flex flex-col justify-center rounded-lg hover:bg-[#5f0bb8]">
          <div className="flex justify-center text-7xl dark:text-[#ffffff] text-[#5f0bb8] group-hover:text-[#fff]">
            <SiRobotframework />
          </div>
          <h1 className="font-bold text-xl group-hover:text-[#fff] text-black dark:text-white">Wireframe Design</h1>
          <p className="text-[#4d4d4d] dark:group-hover:text-[#dad8d8] transition-all delay-75 group-hover:text-[#fff] dark:text-[#b8b6b6]">
            Crafting wireframe designs that serve as blueprints for intuitive
            user interfaces, ensuring seamless navigation and optimal user
            experience.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
