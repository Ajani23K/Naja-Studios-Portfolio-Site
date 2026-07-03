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
        <div className='relative z=10 flex flex-col items-center text-center pt-3 pointer-events-none'>
          <h2 className='text-neutral-700 font-normal font-serif italic text-6xl md:text-7xl lg:text-8xl'>Welcome!</h2>
        </div>
    </div>
  )
}

export default Home