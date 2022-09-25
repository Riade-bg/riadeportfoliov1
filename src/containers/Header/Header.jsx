import React from 'react'
import { motion } from 'framer-motion'
import {AppWrapper} from '../../wrapper'

const Header = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{duration: 0.5}}
        className="grid grid-cols-6 px-10 md:px-30"
      >
        <div className='flex flex-col items-start justify-center col-span-6 lg:col-span-3 h-full font-poppins'>
              <p className="text-base mb-1 text-gray-500">Hello, I'm</p>
              <h1 className="text-6xl md:text-8xl lg:text-7xl font-bold uppercase">Riade Boughaba</h1>
              <p className='text-xl text-slate-500'>Junior Front-end Web Developer</p>
        </div>

        <div className="hidden lg:flex flex-col col-span-6 md:col-span-3">
          <img className='w-full' src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcset="" />
          <label className='uppercase text-slate-400 text-sm'>Photo From Unsplash</label>
        </div>
      </motion.div>
    </>
  )
}

export default AppWrapper(Header, "Home", 'bg-slate-100 backdrop-blur relative flex items-center w-full h-screen px-5 py-6')