import React from 'react'
import WorkImage1 from '../assets/works/mkdph-front.png'
import WorkImage2 from '../assets/works/kodegomonitoringsystem-mp2.png'
import WorkImage3 from '../assets/works/moveme-mp1.png'
import WorkImg from '../assets/works/workimg.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen dark:text-white'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p> 
            </div>

        

        </div>
    </div>
  )
}

export default Work