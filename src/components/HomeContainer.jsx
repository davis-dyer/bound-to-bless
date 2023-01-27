import React from 'react'
import { heroData } from '../utils/data'

import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home">
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-4'>

        <p className='text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor'>
          New Beginnings for Your Most Precious
          <span className='text-amber-400 text-[2.5rem] lg:text-[3.5rem]'> Book</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          <i>A Bible that is falling apart means it is probably being used by someone who isn't</i> - Charles Spurgeon. 
          <br></br>
          <br></br>
          We want to help show off your relationship with Jesus in a way that is personal to you!
        </p>

        <button type='button' className='bg-gradient-to-br from-amber-400 to-yellow-amber md:w-auto w-full px-4 py-2 rounded-log hover:shadow-lg transtion eas duration-100'>Begin Here</button>
      </div>

      <Swiper
        className='w-full h-full absolute m-4 flex items-center justify-center lg:px-19 md:px-7.5 py-4 gap-8 flex-wrap'
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {heroData && heroData.map(n => (
          <SwiperSlide key={n.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-xl bg-slate-100'>
            <img src={n.imagesrc} className='w-45 lg:w-80' alt='ice cream' />
            <p className='m-auto text-base lg:text-xl font-semibold text-textColor text-center'>{n.name}</p>
            <p className='text-sm font-semibold text-headingColor'>{n.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HomeContainer