import React from 'react'
import { AboutImg} from '@/assets';

const About = () => {
  return (
    <section id='about' className='w-full h-screen pt-24 mx-auto px-6 relative space-y-12'>
            <h2 className='text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase'>
                The People Behind Our Mission
            </h2>
            
            <h3 className='text-2xl md:text-4xl text-center font-normal font-serif text-neutral-600'>Creating Personally Tailored Living Arrangements since 
                <span className='font-sans font-semibold text-neutral-400'> 2010</span>
                </h3>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
               {/* left */} 
                    <div className='w-full space-y-6'>
                        <div className='aspect-video rounded-lg border-2 border-neutral-200'>
                            <img src={AboutImg} className='w-full h-full object-contain'/>
                        </div>
                    </div>
                    
                   
               {/* right */} 
               <div className='w-full space-y-6'>
                <p className='text-base tracking-wider text-neutral-500'>
                Pratt‑educated and shaped by more than two decades immersed in the architecture and interiors of New York, I approach each project with the sensibility of a storyteller—one who understands that true luxury is found not in excess, but in the quiet precision of a space that reflects the life lived within it. My work is defined by a refined material palette, bespoke furnishings, and a choreography of light, texture, and proportion that elevates the everyday into something artful. Yet the heart of my practice is transparency: an open, highly communicative process that invites clients into the evolution of their home. Each phase is articulated with clarity and intention, ensuring they feel supported, informed, and deeply connected to the design unfolding around them.

                At Naja Design Studio, scale is never the measure of significance. A single room can hold the same transformative potential as a full‑scale renovation. What matters is the experience—how a space shapes the way you wake, gather, unwind, and move through your day. We believe that thoughtful design, delivered with honesty and care, has the power to redefine the rhythms of home. Every project becomes an intimate collaboration, resulting in interiors that feel both exquisitely curated and unmistakably personal.

                </p>
               </div>
            </div>
        </section>
  )
}

export default About