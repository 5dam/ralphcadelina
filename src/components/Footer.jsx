import React from 'react'
import {FaLinkedin, FaFacebookF, FaGithub} from 'react-icons/fa'
import {TfiEmail} from 'react-icons/tfi'

const Footer = () => {
  return (
    <div>
        <footer className='border-t-2 dark:border-opacity-50 border-purple-100 dark:border-purple-400'>
            <div class="w-full mx-auto container py-2 md:flex md:items-center md:justify-between items-center">
            <span class="text-sm sm:text-center dark:text-white">© 2023 All Rights Reserved.</span>
            <ul class="flex flex-wrap items-center mt-3 text-sm dark:text-white sm:mt-0">
                <li className='mt-4'>
                    <a href="https://www.facebook.com/1234567890stragedy" target="_blank" class="mr-4 hover:underline md:mr-6" rel="noreferrer"><FaFacebookF size={20}/></a>
                </li>
                <li className='mt-4'>
                    <a href="https://www.linkedin.com/in/ralphcadelina/" target="_blank" class="mr-4 hover:underline md:mr-6" rel="noreferrer"><FaLinkedin size={20}/></a>
                </li>
                <li className='mt-4'>
                    <a href="https://github.com/ralphjasoncadelina" target="_blank" class="mr-4 hover:underline md:mr-6" rel="noreferrer"><FaGithub size={20}/></a>
                </li>
                <li onClick={() => window.location = 'mailto:ralphjasoncadelina@gmail.com'}>
                    <TfiEmail size={20} />
                </li>
            </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer