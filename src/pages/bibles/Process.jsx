import React from 'react'
import Process1 from '../../assets/Bound2Bless-media/process1.JPG'
import Before1 from '../../assets/Bound2Bless-media/before.png'

const Process = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
        <div className="w-auto h-auto flex items-center justify-center">
            <img src={Process1} alt="" />
            <p className=''>
                The process begins...
            </p>
        </div>
        <div className="w-auto h-auto flex items-center justify-center">
            <img src={Process1} alt="" />
            <p className=''>
                The process begins...
            </p>
        </div>
    </section>
  )
}

export default Process