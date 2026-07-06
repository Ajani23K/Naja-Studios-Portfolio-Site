import React from 'react'
import { ProjectsData } from '@/utlis/helper'
import { Badge } from '@/components/ui/badge'

const Works = () => {
  return (
    <section id='works' className='w-full h-screen pt-24 mx-auto px-6 relative space-y-12'>
        <h2 className='text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase'>
            Recent Projects
        </h2>
        
        <div className='w-full grid grid-cols-1 md:grid-cols2 gap-4'>
            {ProjectsData.map(project =>(
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </section>
  )
}

const ProjectCard = ({project}) => {
    return (
        <div className='w-full flex flex-col items-start justify-start gap-2'>
            <div className='aspect-video rounded-md overflow-hidden flex items-center justify-center'>
                <img src={project.image}
                 alt={project.title} 
                 className='w-full h-full object-cover hover:scale-110 grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out'/>
            </div>
            <div className='w-full flex items-center justify-between'>
                <p className='font-semibold text-sm text-neutral-600'>{project.title}</p>
            </div>

            <div className='flex items-center justify-center gap-2'>
                {project.renovated.slice(0,3).map((renovated, index) =>(
                    <Badge key={index}>{renovated}</Badge>
                ))}
            </div>
        </div>
    )
}
export default Works