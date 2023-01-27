import React, { useEffect, useState } from 'react'
import GraceBible from '../../assets/Bound2Bless-media/bible4.png'
import { actionType } from '../../context/reducer'
import { useStateValue } from '../../context/StateProvider'

const Grace = () => {

    const [items, setItems]= useState([])

    const [{cartItems}, dispatch] = useStateValue

    const addtocart = () => {
        dispatch({
            type : actionType.SET_CARTITEMS,
            cartItems : items
        });
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() => {
        addtocart()
    }, [items])

  return (
    <div className='w-full flex'>
        <div className='flex'>
            <img src={GraceBible} alt="" />
            <div>
                <p className="">Grace Bible</p>
                <button className='' /* onClick={() => setItems([...cartItems])} */>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Grace