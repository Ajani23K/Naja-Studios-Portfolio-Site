import React from 'react'
import { AboutImg} from '@/assets';

const About = () => {
  return (
    <section id='about' className='w-full h-screen pt-24 mx-auto px-6 relative space-y-12'>
            <h2 className='text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase'>
                The People Behind Our Mission
            </h2>
            
            <h3 className='text-2xl md:text-4xl text-center font-normal font-serif text-neutral-600'>Creating Personally Tailored Living Arrangements since 2010
                </h3>

            <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[450px_1fr] gap-16 items-start">
               {/* left */} 
                    <div className="w-full max-w-[320px] mx-auto">
                     <img className='w-full rounded-xl shadow-lg object-cover'
                         src={AboutImg}
                         alt="About"
                        
                        />

                        <div className="mt-6 text-center">
                            <h4 className="text-2xl font-serif text-neutral-800">
                                Anna Marie King
                            </h4>

                            <p className="mt-1 uppercase tracking-[0.2em] text-sm text-neutral-500">
                                Founder & Principal Designer
                            </p>
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