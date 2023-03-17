import React, { useEffect, useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill, BsSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import Logo from "../assets/logo1.png"
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [theme, setTheme] = useState("dark")
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    })

    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const isDark = theme === 'dark'

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4">
        <div>
            <img src={Logo} alt="Logo Img" style={{width: '50px'}} />
        </div>  

        {/* menu */}
       
            <ul className='hidden md:flex dark:text-white'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                     <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li><button onClick={switchTheme}>{isDark ? <BsSunFill /> : <MdDarkMode />}</button></li>
            </ul>
       

        {/* hamburger */}
        <div onClick={handleClick} className='dark:text-white dark:bg-black md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'dark:bg-white bg-white absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">Linkedin <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">Github <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    
    </div>
  )
}

export default Navbar