import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import AboutContainer from './AboutContainer'
import SocialContainer from './SocialContainer'
import CartContainer from './CartContainer'

const MainContainer = () => {
  const [{bibleItems, cartShow}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className='w-full my-6'>
        <div className="w-full h-full flex items-center justify-between my-6">
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-amber-400 to-amber-600 transition-all ease-in-out duration-100'>
            See what Bibles we offer
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-amber-300 hover:bg-amber-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-amber-300 hover:bg-amber-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={bibleItems}
        />
      </section>
      <section className='w-full my-6'>
        <div className="w-full h-full flex items-center justify-between my-6">
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-amber-400 to-amber-600 transition-all ease-in-out duration-100'>
            About
          </p>
        </div>
        <AboutContainer />
      </section>

      <section>
        <SocialContainer />
      </section>
      {cartShow && 
        <CartContainer />
      }
    </div>
  )
}

export default MainContainer