import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'typed.js'

const Home = () => {

  const el = React.useRef(null)
  
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'React Developer', 'Fullstack Developer'],
      typeSpeed: 100,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div name="home" className='w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='font-bold dark:font-normal dark:text-white'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl dark:text-white'>Ralph Cadeliña</h1>
            <h2 className='text-4xl sm:text-7xl dark:text-white'>I'm a <span className='text-purple-600 font-bold' ref={el}></span></h2>
            <p className='dark:text-white py-4 max-w-[700px]'>A passionate Front-end React Developer based in Surigao City, Philippines.</p>
            <div>
                <button className='dark:text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600 hover:text-white'>View Work<HiArrowNarrowRight className='ml-3' /></button>
            </div>
        </div>
    </div>
  )
}

export default Home

 