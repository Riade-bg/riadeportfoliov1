import React, { useState, useEffect } from 'react'
import {  motion  } from 'framer-motion'
import { client, urlFor } from '../client'
import { AppWrapper, MotionWrapper } from '../../wrapper'

const About = () => {

    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query).then((data) => {setAbouts(data)})
    }, [])
    

  return (
    <div className="w-screen bg-white">
        <h2 className='text-center w-full text-3xl md:text-4xl font-poppins font-bold'>
            I know that
            <span className='text-indigo-600 font-work'> Good Website</span>
            <br />
            means
            <span className='text-indigo-600 font-work'> Good Business</span>
        </h2>

        <div className='w-full px-10 my-10 grid grid-cols-3 gap-5'>
            {abouts.map((item, index) => (
                <div key={index} className='col-span-3 md:col-span-1 text-xl'>
                    <img src={urlFor(item.imgUrl)} alt={item.title} className="max-w-full rounded-md " />
                    <h3 className='capitalize font-bold text-xl text-center w-full mt-3'> {item.title} </h3>
                </div>
            ))}
        </div>

        {/* <div className='w-full px-10 py-5 grid grid-cols-3 gap-4'>
            {[{title: "A",}, {title: "B"}, {title: "C"}].map((item, index) => (
                <motion.div
                    key={item.title + index}
                    whileHover={{backgroundColor: "rgb(148 163 184)", transition:{duration: 0.3}}}
                    className='col-span-1 bg-slate-200 rounded-md h-48 flex items-center justify-center text-xl'>
                        {item.title}
                </motion.div>
            ))}
        </div> */}
    </div>
  )
}

export default AppWrapper(
    MotionWrapper(About, "bg-white"), "About", 'relative flex items-center justify-center w-full md:h-screen px-5 py-6')