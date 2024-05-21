import React ,{useEffect}from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
export default function Achivements() {

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
    const Achive = [

        {
            id: 1,
            Name: "Smart India Hackathon 2022 Winner 🏆",
            Theme: "Software And Iot",
            Project: "National School Water Monitoring System (PS CODE: AK1093)",
            image: "/Achive/SIH2022.jpg",
        }
        ,
        {
            id: 2,
            Name: "Aviskar 2023 Winner 🏆",
            Theme: "Software",
            Project: "College Canteen Management System (Mobile Application)",
            image: "/Achive/AVI2023.jpg",
        }
        ,
        {
            id: 3,
            Name: "Smart India Hackathon 2023 Runner-Up 🥈",
            Theme: "Software And Iot",
            Project: "Water and Electricity Tracking App (PS CODE: SIH1393)",
            image: "/Achive/SIH2023.jpg",
        }
        ,
        {
            id: 4,
            Name: "Aviskar 2024 Winner 🏆",
            Theme: "Software And Iot",
            Project: "Thief Detection System. (Device and Mobile App)",
            image: "/Achive/AVI2024.jpg",
        }
    ]

    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={controls}
    ref={ref} className="container mx-auto w-full overflow-hidden relative p-5 mt-4">
          

            <h1 className='text-center text-4xl font-bold dark:text-white text-black'>Achivements</h1>
            <div className="flex  justify-center flex-wrap">


                {Achive.map((i,index) => {
                    return (

                        <div 
                         key={i.id || index}
                        className=" flex items-center flex-col relative bg-white dark:bg-[#FAFAFA] mx-5 my-5 px-4 py-3 rounded-lg shadow-lg " style={{ width: '270px' }}>
                            <img src={`${i.image}`} />
                            <span className="text-[#5f0bb8] font-bold text-lg mb-3 text-center mt-4 ">{i.Name}</span>
                            <div className="mt-1 text-gray-600 text-center">
                                <p>Theme:<b> {i.Theme}</b></p>
                                <p>Project: <b>{i.Project}</b></p>
                            </div>
                        </div>
                    )

                })}



                {/* Add more carousel-focus divs here */}

            </div>
        </motion.div>
    );
}
