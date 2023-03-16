import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ralph Cadeliña</h1>
            <h2 className='text-4xl sm:text-7xl font bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis dignissimos alias excepturi, dolorum exercitationem hic nulla placeat itaque ipsum!</p>
            <div>
                <button>View Work <HiArrowNarrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Home