import React, {useState} from 'react'
import { firestore } from '../../firebase.config'

const ContactForm = () => {

  const [name, setName] = useState()

  return (
    <form className=' flex flex-col items-center justify-start'>
        <p className='text-[2.5rem] m-10'>Get in Touch</p>
 
        <label className='text-left'>Name</label>
        <input placeholder='name' type="text" className='w-1/2 p-3 rounded-xl mb-20 border-lightgray bg-white text-textColor text-base' />

        <label>Email</label>
        <input placeholder='email' type="text" className='w-1/2 p-3 rounded-xl mb-20 border-lightgray bg-white text-textColor text-base' />

        <label>Message</label>
        <textarea placeholder='Message' type="text" className='w-1/2 h-20 p-3 rounded-xl mb-20 border-lightgray bg-white text-textColor text-base'/>

        <button className='p-2 bg-slate-500 font-bold text-[1.0rem] rounded-xl text-white cursor-pointer transition-all duration-75 ease-in-out -mt-3'>Submit</button>
    </form>
  )
}

export default ContactForm