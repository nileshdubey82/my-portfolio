function Services() {
    return (
        <section id='services' className='bg-transparent relative mt-[-60px] '>
            <h1 className='
                        text-center
                        text-4xl
                        font-bold
                ' >
                Services
            </h1>
            <p className='text-center text-gray-400 mt-10' >
                Full stack developer crafting responsive interfaces, robust backends, API integrations, and efficient deployments. Maintenance and support provided.
            </p>
            <div className='flex justify-center gap-8 mt-9 flex-wrap'>
                <div className='text-center w-[300px] p-5 flex flex-col justify-center'>
                    <div className='flex justify-center'>  <img src='/Images/Website-Design.png' width={70} className='align-center text-center' /></div>
                    <h1 className='font-bold text-xl'>Web Site Design</h1>
                    <p className='text-[#8E8E8E]'>
                        Crafting visually stunning websites with user-centric design, intuitive navigation, and seamless functionality. Responsive, scalable, and tailored to your brand.
                    </p>
                </div>
                <div className='text-center w-[300px] bg-[#530C9F] p-5  rounded-xl drop-shadow-md flex flex-col justify-center'>
                    <div className='flex justify-center'>  <img src='/Images/App.png' width={70} className='align-center text-center' /></div>
                    <h1 className='font-bold text-xl text-white'>App Design</h1>
                    <p className='text-[#B3B3B3]'>
                        Creating captivating apps with sleek interfaces, seamless navigation, and optimized performance for a superior user experience, leveraging React Native.
                    </p>
                </div>
                <div className='text-center w-[300px] p-5 flex flex-col justify-center'>
                    <div className='flex justify-center'>  <img src='/Images/Wireframe.png' width={70} className='align-center text-center' /></div>
                    <h1 className='font-bold text-xl'>Wireframe Design</h1>
                    <p className='text-[#8E8E8E]'>
                        Crafting wireframe designs that serve as blueprints for intuitive user interfaces, ensuring seamless navigation and optimal user experience.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
