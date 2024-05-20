import React from 'react';

export default function Achivements() {
    return (
        <div className="container mx-auto w-full overflow-hidden relative p-5">
            <div className="w-full h-full absolute">
                <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
            </div>

            <h1 className='text-center text-4xl font-bold'>Achivements</h1>
            <div className="carousel-items flex items-center justify-center" style={{ width: 'fit-content', animation: 'carouselAnim 10s infinite alternate linear' }}>

                <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '270px' }}>
                    <img src='/Achive/SIH2022.png' />
                    <span className="text-[#5f0bb8] font-bold text-xl mb-3">SIH 2022 (WINNER)</span>

                    <p className="mt-3 text-gray-600 text-center">

                        <p>Theme:<b> Software</b></p>
                        <p>Problem Statement: <b>Water Quality Monitoring System</b></p>
                    </p>

                </div>

                {/* Add more carousel-focus divs here */}

            </div>
        </div>
    );
}
