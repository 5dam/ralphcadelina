import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 dark:text-white'>
        <form method="POST" action="https://getform.io/f/6bf7bd9c-0dd4-4ed0-9152-be9878f54949" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-4'>Submit the form below or shoot me an email - ralphcadelina5@gmail.com</p>
            </div>
            <input className='bg-gray-300 dark:bg-white dark:text-black p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-gray-300 dark:bg-white dark:text-black my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 dark:bg-white dark:text-black p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact