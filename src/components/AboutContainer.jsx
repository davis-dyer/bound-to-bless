import React from 'react'
import BibleJuOutside from '../assets/Bound2Bless-media/bible-ju-outside.JPG'

const AboutContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
        <div className="w-auto h-auto flex flex-col items-center justify-center">
            <img src={BibleJuOutside} alt="" />
        </div>
        <div className="w-auto h-auto flex flex-col items-center">
            <p className="text-[2.0rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor my-3">Hi, I'm Julia!</p>
            <p className="text-base text-textColor text-center md:text-left md:w-[80%]">I started bound to bless when I was in college...</p>
        </div>
    </section>
  )
}

export default AboutContainer