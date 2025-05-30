import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className='w-full lg:w-1/4 mb-6'
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex justify-center'
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  className='rounded cursor-pointer'
                  alt={project.title}
                />
              </motion.div>
            </a>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

