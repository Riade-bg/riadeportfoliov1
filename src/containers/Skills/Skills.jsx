import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppWrapper } from '../../wrapper'
import { client, urlFor } from '../client'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const query = '*[_type == "skills"]'
    const experiencesQuery = '*[_type == "experiences"]'

    client.fetch(query).then((data) => setSkills(data))

    client.fetch(experiencesQuery).then((data) => setExperiences(data))
  }, [])
  return (
    <div className="w-full">
       <h2 className='w-full text-xl text-center w-full text-4xl font-bold mb-5'>
          Skills &
          <span className='text-indigo-500'> Experiences</span>
      </h2>
      <div className='flex justify-center'>
        <motion.div
          className='w-full md:w-1/2 flex items-center justify-center flex-wrap mt-5'
        >
          {skills?.map((skill) => (
            <motion.div
              className='flex flex-col justify-center mr-5 items-center'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={skill.name}
            >
              <div className={`flex bg-[${skill.bgColor}] w-24 md:w-32 rounded-full p-5 drop-shadow`}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='text-sm uppercase mt-3 font-bold text-slate-700'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* <motion.div
          className='w-full md:w-1/3'
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.year}
            >
              {exp.year}
              <motion.div>
                {exp.works.map((work) => (
                  <motion.div
                    className=''
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h1>{work.name}</h1>
                    <p>{work.company}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          ))}
        </motion.div> */}
      </div>
    </div>
  )
}

export default AppWrapper(Skills, "Skills", 'relative bg-slate-50/80 flex items-center justify-center w-full md:h-screen px-5 py-6')