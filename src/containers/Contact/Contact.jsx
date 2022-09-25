import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AppWrapper, MotionWrapper } from '../../wrapper'
import { client } from '../client'

const Contact = () => {

    const [formdetails, setFormdetails] = useState({name: "", message: "", email: ""})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const {name, email, message} = formdetails;

    const handleFormData = (e) => {
        const {name, value} = e.target
        setFormdetails({...formdetails, [name]: value})
    }

    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: "contact",
            name: name,
            email: email,
            message: message
        }

        client.create(contact).then(()=>{setLoading(false); setIsFormSubmitted(true)})
    }
  return (
    <>
        <h2 className='w-full text-center text-4xl font-bold'>
            Let's Have A 
            <span className='text-purple-500'> Chat</span>
        </h2>
        {!isFormSubmitted ? (
            <div className='px-5 my-5 w-full flex flex-col w-full md:w-6/12'>
                <input type="text" className='bg-slate-100 px-4 py-2 rounded-md' placeholder='Your Name' name='name' value={name} onChange={handleFormData} />
                <input type="email" className='my-4 bg-slate-100 px-4 py-2 rounded-md' placeholder='E-mail' name='email' value={email} onChange={handleFormData} />
                <textarea name="message" cols="30" rows="5" placeholder="Your Message" className='bg-slate-100 px-4 py-2 rounded-md' onChange={handleFormData}></textarea>
                <motion.button 
                    whileHover={{ backgroundColor: "rgba(99, 102, 241)", color: "#fff" }}
                    onClick={handleSubmit} 
                    className="px-3 py-2 text-black bg-slate-200 rounded-md my-3 drop-shadow">{loading ? "Sending.." : "Send"}
                </motion.button>
            </div>
            ) : (
            <h3 className='capilatize bg-green-100 text-green-700 rounded-md px-6 py-2 mt-5 text-sm'>Done! Your Message Was Sended</h3>
        )}
    </>
  )
}

export default AppWrapper(MotionWrapper(Contact, "h-full flex flex-col justify-center items-center"), "Contact", 'relative bg-white flex-1 w-full h-screen flex-row px-5 py-6')