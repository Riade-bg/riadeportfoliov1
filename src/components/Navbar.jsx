import React, { useState } from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion, AnimatePresence} from 'framer-motion'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='w-full flex justify-between items-center py-2 px-5 backdrop-blur bg-slate-100/80 fixed top-0 z-10'>
        <a  
            href='/'
            className='p-3 uppercase cursor-pointer font-works font-bold text-slate-500'
        >
            RIADE
        </a>
        <ul className="flex-1 flex items-center justify-end font-works text-base">
            {["Home", "About", "Work", "Skills", "Contact"].map((item, index)=>(
                <li key={`link-${item}`} className="mx-4 cursor-pointer hidden md:flex">
                    <motion.a 
                        whileHover={{color: "rgba(99, 102, 120)"}}
                        transition= {{duration: 0.1}}
                        href={`#${item}`} 
                        className="text-slate-500 font-bold capitalize font-normal transition ease-in-out"
                    >
                        {item}
                    </motion.a> 
                </li>
            ))}
            <li className="flex md:hidden rounded-md text-white bg-indigo-600 p-2 px-3 text-sm items-center justify-center cursor-pointer" onClick={() => setToggleMenu(true)}>
                Menu <HiMenuAlt4 className="text-base ml-1" />
            </li>
        </ul>
            <AnimatePresence>
                {toggleMenu && (
                    <motion.div
                        className='fixed right-0 bottom-0 top-0 w-9/12 h-screen flex justify-end items-end flex-col p-5 drop-shadow-md bg-white'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3, ease:"easeInOut"}}
                    >
                        <motion.span 
                            whileHover={{scale: 0.9, transition:{duration: 0.3}}}
                            className='flex rounded-md text-black bg-gray-100 p-2 px-3 text-sm items-center justify-center cursor-pointer' onClick={() => setToggleMenu(false)}>
                            Close <HiX className="ml-2 text-lg" />
                        </motion.span>
                        <ul className="w-full h-full flex flex-col items-center justify-center font-work">
                        {["Home", "About", "Work", "Skills", "Contact"].map((item)=>(
                            <li key={`link-${item}`} className="text-lg text-3xl mb-5 cursor-pointer" onClick={() => setToggleMenu(false)}>
                                <a href={`#${item}`} className="text-black uppercase transition ease-in-out flex-col hover:text-gray-500">
                                    {item}
                                </a> 
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
    </nav>
  )
}

export default Navbar