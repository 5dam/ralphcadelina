import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-600 font-bold dark:font-normal'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold dark:text-white'>Ralph Cadeliña</h1>
            <h2 className='text-4xl sm:text-7xl font bold dark:text-white'>I'm a Frontend Developer.</h2>
            <p className='dark:text-white py-4 max-w-[700px]'>A passionate Front-end React Developer based in Surigao City, Philippines.</p>
            <div>
                <button className='dark:text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600 hover:text-white'>View Work<HiArrowNarrowRight className='ml-3' /></button>
            </div>
        </div>
    </div>
  )
}

export default Home

 