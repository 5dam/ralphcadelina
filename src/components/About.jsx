import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen dark:text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-600'>About</p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Ralph nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>With a bachelor’s degree holder in
                        Information Technology with
                        experience in the IT Industry particularly
                        in Web Development. I venture in
                        securing a position in a company where
                        I can apply my experience that would
                        best fit my qualifications. I aim to
                        further enhance my values toward any
                        responsibility that I will undertake.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About