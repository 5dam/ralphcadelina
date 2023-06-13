import React from 'react'
import WorkImage1 from '../assets/works/mkdph-front.png'
import WorkImage2 from '../assets/works/kodegomonitoringsystem-mp2.png'
import WorkImage3 from '../assets/works/moveme-mp1.png'
import WorkImage4 from '../assets/works/smithfields.png'
import WorkImage5 from '../assets/works/portfoliopic.png'

const Project = () => {
  return (
    <div name="project" className='w-full md:h-screen dark:text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Projects</p>
          <p className='py-6'>Check out some of my projects from my Fullstack Web Development Bootcamp in KodeGo</p>  
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${WorkImage4})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-xl font-bold text-white tracking-wider'>
                 A Fullstack web application intended for mobile users. Built using MERN stack.
              </span>
              <div className='pt-8 text-center'>
                <a href="https://robinhoodai.shop/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
                <a href="https://github.com/5dam/robinhoodx" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImage5})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 p-6">
              <span className='text-xl font-bold text-white tracking-wider'>
                 My Website Portfolio built using reactjs + tailwindcss 
              </span>
              <div className='pt-8 text-center'>
                <a href="https://ralphcadelina.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
                <a href="https://github.com/5dam/ralphcadelina" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Code</button>
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
                 A Fullstack Web Application built in Laravel. View code for reference
              </span>
              <div className='pt-8 text-center'>
                <a href="https://kokusai-demo-5v7e.vercel.app/index.html" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
                <a href="https://github.com/tsujintsujin/KokusaiDaigaku" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImage2})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-xl font-bold text-white tracking-wider'>
                Attendance Monitoring System using ReactJS, material UI, and Firebase
              </span>
              <div className='pt-8 text-center'>
                <a href="https://kodego-attendance.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
                <a href="https://github.com/PrgDominique/kodegoattendance" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImage3})` }}
            className="shadow-lg shadow-[#040c16] dark:shadow-white group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div">
            
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className='text-xl font-bold text-white tracking-wider'>
                A static website only project using bootstrap.
              </span>
              <div className='pt-8 text-center'>
                <a href="https://majorproject1-moveme.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Demo</button>
                </a>
                <a href="https://github.com/5dam/majorproject1-moveme" target="_blank" rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-110 dark:text-black'>Code</button>
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