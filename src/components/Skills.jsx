import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'
import NodeJS from '../assets/node.png'
import Github from '../assets/github.png'
import Laravel from '../assets/laravel.svg'
import PHP from '../assets/php.png'
import MySQL from '../assets/mysql.png'
import Firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div name='skills'>
        {/* Container */}
        <div className='dark:text-white max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Javascript} alt="JS icon" />
                    <p>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={ReactJS} alt="ReactJS icon" />
                    <p>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={NodeJS} alt="NodeJS icon" />
                    <p>NodeJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p>Github</p>
                </div>
            </div>
            <div>
                <p>Least experienced with back-end technologies</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto my-5' src={PHP} alt="PHP icon" />
                    <p>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Laravel} alt="Laravel icon" />
                    <p>Laravel</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto my-5' src={MySQL} alt="MySQL icon" />
                    <p>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
                    <p>Firebase</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills