import React, { useState } from 'react'
import Logo from '../assets/Bound2Bless-media/logo.png'
import { motion } from 'framer-motion'
import { MdAdd, MdLogout } from 'react-icons/md'
import { BsBasket } from 'react-icons/bs'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import Avatar from '../assets/avatar.png'
import { Link } from 'react-router-dom'
import { async } from '@firebase/util';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {


    //initialize firebase app
    const firebaseAuth = getAuth(app);

    //new user from Google
    const provider = new GoogleAuthProvider();

    //set user and dispatch variables from State
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    //create a state value
    const [isMenu, setIsMenu] = useState(false)

    //on login, set user to the provided data and dispatch it to 
    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    }

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }


    return (
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-amber-50'>
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-12 object-cover' alt='logo' />
                    <p className='text-headingColor text-x1 font-bold'>Bound to Bless</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{ opactiy: 0, x: 200 }}
                        animate={{ opactiy: 1, x: 0 }}
                        exit={{ opactiy: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <Link to={'/'}>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        </Link>
                        <Link to={'/bibles'}>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Bibles</li>
                        </Link>
                        <Link to={'/about'}>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About</li>
                        </Link>
                        <Link to={'/contact'}>
                            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Contact</li>
                        </Link>
                    </motion.ul>

                    <div className='relative flex items-center justify-center' onClick={showCart}>
                        <BsBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                        {cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-0.5 -right-5 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className='text-sm text-white font-semibod'>{cartItems.length}</p>
                            </div>
                        )}
                    </div>

                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className='w-10 min-w-[40px] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full' alt="user profile"
                            onClick={login}
                        />
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-gray-50 showdow-xl rounded-lg flex flex-col absolute top-12 right-0'
                            >
                                {user && user.email === "davis.dyer10@gmail.com" && (
                                    <Link to={'/createItem'}>
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                            onClick={() => setIsMenu(false)}
                                        >New Item <MdAdd /></p>
                                    </Link>
                                )}
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout /></p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full '>

                <div className='hidden lg:w-auto relative flex items-center justify-center' onClick={showCart}>
                    <BsBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    {cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-0.5 -right-5 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className='text-sm text-white font-semibod'>{cartItems.length}</p>
                            </div>
                        )}
                </div>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} className='w-12 object-cover' alt='logo' />
                    <p className='text-headingColor text-x1 font-bold'>Bound to Bless</p>
                </Link>

                <div className='relative'>
                    <motion.img whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className='w-10 min-w-[40px] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full' alt="user profile"
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className='w-40 bg-gray-50 showdow-xl rounded-lg flex flex-col absolute top-12 right-0'
                        >
                            {user && user.email === "davis.dyer10@gmail.com" && (
                                <Link to={'/createItem'}>
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                                </Link>
                            )}

                            <ul className='flex flex-col'>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >Home</li>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >Menu</li>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >About</li>
                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                    onClick={() => setIsMenu(false)}
                                >Service</li>
                            </ul>
                            <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={logout}
                            >Logout <MdLogout /></p>
                        </motion.div>
                    )}
                </div>
            </div>

        </header>
    )
}

export default Header