import React from 'react'

const Contact = () => {
  return (
     <section id='contact' className='w-full h-screen pt-24 mx-auto px-6 relative space-y-12 flex flex-col items-center'>
        <h2 className='text-xl md:text-2xl text-center font-serif italic text-neutral-800 uppercase'>
            Contact Us!
        </h2>

        <form className='w-full md:w-1/2 border rounded-xl p-4 border-gray-200 space-y-6 flex flex-col'>

        <input type='text' placeholder='Full Name' className='w-full border-none outline-none p-2.5 text-lg text-neutral-700 bg-gray-100 rounded-md'/>

        <input type='email' placeholder='Email' className='w-full border-none outline-none p-2.5 text-lg text-neutral-700 bg-gray-100 rounded-md'/>

        <textarea placeholder='Message' rows={12} className='w-full border-none outline-none p-2.5 text-lg text-neutral-700 bg-gray-100 rounded-md'/>

        <div className='w-full flex justify-end'>
            <button type='submit' className='bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition'>
                Send
            </button>
        </div>
        </form>

        
     </section>
  )
}

export default Contact