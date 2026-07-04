import React from 'react'
import { HeroBG } from '@/assets'
const Home = () => {
  return (
    <div className="w-full h-screen pt-24 relative outer-gradient">
        <div className="radial-bg"></div>
        <div className="bottom-left-gradient"></div>
        <div className="bottom-right-gradient"></div>

        {/*Image - Hero */}
        <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">

          <img alt="Naja Design"
          src={HeroBG}
          className='w-[320]px sm:w-[300px] md:w-[420px] lg:w-[780px] greyscale contrast-125 brightness-110 object-contain object-bottom' image-mask/>
          
        </div>

        {/* */}
        <div className='relative flex flex-col items-center justify-between text-center pointer-events-none h-full'>
          <h2 className='text-neutral-700 font-normal font-serif italic text-5xl md:text-6xl lg:text-8xl tracking-widest'>Welcome!</h2>

          <div className='w-full flex items-center justify-between px-12'>
            <div className=' p-2 rounded-full bg-white shadow-sm flex items-center gap-2'>
              <div className='w-6 h-6 bg-red-100 rounded-full flex items-center justify-center animate-pulse'>
                <div className='w-3 h-3 bg-red-400 rounded-full'></div>
              </div>

              <span className='text-xs text-nuetral-700'>Tailoring spaces for the best living experience.</span>
            </div>

            {/* specialized */}
            <p className="w-44 text-left text-xs tracking-wider text-neutral-700">
              Specialized in Interior and Home Renovation
              </p>
          </div>

          <div className='w-full flex items-center justify-between px-12 z-50'>
            <h1 className='text-4xl md:text-6xl lg:text-8xl text-left font-bold font-sans text-neutral-800 tracking-widest uppercase'>NAJA <br />DESIGN</h1>

            <h2 className='text-2xl md:text-4xl text-left font-bold text-neutral-800 tracking-wider uppercase'>Interior and Home <br />Designer</h2>
          </div>
        </div>
    </div>
  )
}

export default Home