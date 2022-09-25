import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppWrapper } from '../../wrapper'
import { client, urlFor } from '../client'
import { BsEyeFill, BsCode } from 'react-icons/bs'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWorks, setFilterWorks] = useState([])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity: 0}])

    setTimeout(()=>{
      setAnimateCard([{y: 0, opacity: 1}])

      if(item === "All"){
        setFilterWorks(works)
      }else{
        setFilterWorks(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }
  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query).then((data) => {setWorks(data); setFilterWorks(data)})
  }, [])
  
  return (
    <div className="w-screen my-10">
      <h2 className='font-poppins text-center w-full text-4xl font-bold'>
          Take A Look At My
          <span className='text-indigo-600'> Work</span>
      </h2>
      <div className='flex items-center justify-center w-full my-4'>
        {["All", "Ux", "Design", "ReactJs"].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => handleWorkFilter(item)}
              className={`font-work mx-2 hover:bg-indigo-500 transition duration-200 hover:text-white text-sm font-medium px-4 py-2 rounded-md border border-gray-300 cursor-pointer 
              ${activeFilter === item ? "bg-indigo-500 text-white drop-shadow-md" : "bg-white text-black drop-shadow "}`}
            >
              {item}
            </div>
          ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className={"grid grid-cols-3 gap-6 px-10 py-5"}
      >
        {filterWorks.map((item, index) => (
          <div key={index} className="rounded-md flex flex-col items-start justify-center col-span-3 md:col-span-1 ">
            <img src={urlFor(item.imgUrl)} className="w-full" alt={item.title}/>
            <p className='rounded-md text-sm uppercase my-3 px-3 py-2 text-white bg-indigo-500'>
                {item.tags[0]}
            </p>

              <h4 className='font-bold text-lg font-poppins'>
                {item.title}
              </h4>
              <p className='font-medium my-1'>
                {item.description}
              </p>

          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrapper(Work, "Work", 'relative bg-slate-100 flex items-center justify-center w-full px-5 py-6')