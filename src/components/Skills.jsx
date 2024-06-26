import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'
import Redux from '../assets/redux.png'
import Vuejs from '../assets/vuejs.png'
import NodeJS from '../assets/node.png'
import MongoDB from '../assets/mongodb.png'
import Github from '../assets/github.png'
import Git from '../assets/git.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen'>
        {/* Container */}
        <div className='dark:text-white max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Javascript} alt="JS icon" />
                    <p>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={ReactJS} alt="ReactJS icon" />
                    <p>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Redux} alt="ReactJS icon" />
                    <p>Redux</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Vuejs} alt="NodeJS icon" />
                    <p>VueJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={NodeJS} alt="NodeJS icon" />
                    <p>NodeJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={MongoDB} alt="Github icon" />
                    <p>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Git} alt="Github icon" />
                    <p>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] dark:shadow-white hover:scale-110 duration-500 py-4'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills