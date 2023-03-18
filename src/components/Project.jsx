import React from 'react'
import WorkImage1 from '../assets/works/mkdph-front.png'
import WorkImage2 from '../assets/works/kodegomonitoringsystem-mp2.png'
import WorkImage3 from '../assets/works/moveme-mp1.png'
import WorkImg from '../assets/works/workimg.jpeg'

const Project = () => {
  return (
    <div name="project" className='w-full md:h-screen dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Projects</p>
          <p className='py-6'>Check out some of my recent projects.</p>  
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white dark:text-black'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white dark:text-black'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white dark:text-black'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white dark:text-black'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white dark:text-black'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white dark:text-black'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project