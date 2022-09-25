import { motion } from 'framer-motion'
import React from 'react'

const NavDots = ({ active }) => {
  return (
    <div className='hidden md:flex'>
    <div
      className='absolute top-1/2 right-3 flex flex-col cursor-pointer'>
        {["Home", "About", "Work", "Skills", "Contact"].map((item, index)=>(
            <motion.a 
              whileHover={{scale: 1.3, transition:{duration: 0.1}}} 
              href={`#${item}`}
              key={item + index}
              className={`text-black uppercase transition ease-in-out flex-col rounded-md h-3 w-3 mb-3 ${ active === item ? 'bg-indigo-500' : 'bg-gray-300' }`}
            >{}</motion.a> 
        ))}
    </div>
    </div>
  )
}

export default NavDots