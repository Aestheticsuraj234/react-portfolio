import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
    return (
        <section id="projects" className='w-full py-12 md:py-24 lg:py-32 bg-muted'>

            <div className='container px-4 md:px-6'>

                <div className="flex flex-col items-center justify-center space-y-4 text-center">

                    <div className="space-y-2">
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            Features Projects.
                        </h2>

                        <p className="max-w-[900ox]
            text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed
            ">
                            Check out some of my recent web development projects.

                        </p>
                    </div>
                </div>

                <div className='mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-10'>

                    <ProjectCard
                        imageUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4c0b775c-bafa-47f5-9df7-a43ff714b83a-2xy2q2.png&w=1920&q=75"
                        title="Project-1"
                        description=" A modern web application built with React, Node.js, and MongoDB"
                    />
                    <ProjectCard
                        imageUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4c0b775c-bafa-47f5-9df7-a43ff714b83a-2xy2q2.png&w=1920&q=75"
                        title="Project-1"
                        description=" A modern web application built with React, Node.js, and MongoDB"
                    />
                    <ProjectCard
                        imageUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4c0b775c-bafa-47f5-9df7-a43ff714b83a-2xy2q2.png&w=1920&q=75"
                        title="Project-1"
                        description=" A modern web application built with React, Node.js, and MongoDB"
                    />

                </div>


            </div>

        </section>
    )
}

export default ProjectSection