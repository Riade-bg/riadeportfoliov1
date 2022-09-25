import React from 'react'
import {  BsLinkedin, BsTwitter, BsInstagram, BsGithub  } from 'react-icons/bs'
import { motion } from 'framer-motion'
const SocialMedia = () => {
  return (
   <div className='hidden md:flex'> 
      <motion.div 
        whileHover={{color: "rgba(99, 102, 120)"}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        className='absolute left-3 top-1/2 text-xl cursor-pointer text-gray-400 rounded-md'>
        <BsLinkedin className='mb-3' />
        <BsTwitter className='mb-3' />
        <BsInstagram className='mb-3' />
        <BsGithub className='mb-3' />
      </motion.div>
    </div>
  )
}

export default SocialMedia