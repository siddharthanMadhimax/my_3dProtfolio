import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  // template_l09f6x1   service_h0jg9m5   CzFq3obUArQoCTReK
  var formRef=useRef()
  var [loadig,setLoading]=useState(false)
  var [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  var handleChange=(e)=>{
    var {name,value}=(e.target)
    setForm({...form,[name]:value})
  }
  var handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true);
    emailjs.send('service_h0jg9m5',
      'template_l09f6x1',
      {
        from_name:form.name,
        to_name:'siddharth',
        from_email:form.email,
        to_email:'siddharthan.madhiyalagan@gmail.com',
        message:form.message

      },
      'CzFq3obUArQoCTReK'


    ).then(()=>{ 
      setLoading(false)
      // alert('thank you')
      setForm({
        name:'',
        email:'',
        message:''
      })
    }).catch((err)=>{
      console.log(err)
      alert('oops somethng went wrong...',err)
    })

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-20 overflow-hidden'>
      
      <motion.div 
      variants={slideIn('left','tween',0.1,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <div className='bg-black h-[20px] w-100 mt-0 mb-[10px]'></div>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>

          {/* for name */}
          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name:</span>
            <input required type='text' 
            value={form.name}
            name='name'
            onChange={handleChange}
            placeholder='Whats your name'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium'/>
          </label>
         
          {/* for email id */}

          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email:</span>
            <input type='text' required
            value={form.email}
            name='email'
            onChange={handleChange}
            placeholder='whats your Email?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium'/>
          </label>
          {/* for message */}

          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message:</span>
            <textarea required type='text'
            value={form.message}
            name='message'
            onChange={handleChange}
            placeholder='what you want to sat'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white 
            rounded-lg outlined-none border-none font-medium'/>
          </label>
          <button type='submit' className='bg-tertiary
          py-3 px-8 outlined-none w-fit text-white font-bold shawdow-md shadow-primary'>
            {loadig ? 'sending...':'Send' } 
           
          </button>

        </form>
        
      </motion.div>
      <motion.div
        variants={slideIn('right','tween',0.1,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px]
        h-[350px]'>
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')