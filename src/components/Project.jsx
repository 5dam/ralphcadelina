import React from 'react'
import WorkImage1 from '../assets/works/mkdph-front.png'
import weatherapp from '../assets/works/weather-app.png'
import quotegenerator from '../assets/works/quote-generator.png'
import epa from '../assets/works/EPA.png'

const Project = () => {
  return (
    <div name="project" className='w-full md:h-screen dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Projects</p>
          <p className='py-6'>Check out some of my projects.</p>  
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Grid item */}  

          <div
            style={{ backgroundImage: `url(${epa})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 p-6">
              <span className='text-xl font-bold text-white tracking-wider'>
                  EPA is a e-commerce website built using MERN stack.
              </span>
              <div className='pt-8 text-center'>
                <a href="https://epabusiness.com/login" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
              </div>
            </div>
          </div>    
 
          <div
            style={{ backgroundImage: `url(${WorkImage1})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-xl font-bold text-white tracking-wider'>
                 School Website built using laravel. 
              </span>
              <div className='pt-8 text-center'>
                <a href="https://kokusai-demo-5v7e.vercel.app/index.html" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-xl font-bold text-white tracking-wider'>
                 Weather app. Real-time weather updates and forecasts.
              </span>
              <div className='pt-8 text-center'>
                <a href="https://weather5dam.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${quotegenerator})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-xl font-bold text-white tracking-wider'>
                Random quotes using HTML, CSS & JavaScript.
              </span>
              <div className='pt-8 text-center'>
                <a href="https://quote-generator5dam.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
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