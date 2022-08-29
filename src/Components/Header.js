/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {FaLinkedinIn} from 'react-icons/fa';


const Header = () => {
  return (
    <div className='flex justify-between py-4 px-10 fixed top-0 w-screen z-20'>
        <h3 className='text-white text-lg font-semibold z-10'>GEO WEATHER</h3>
        <div className='flex items-center text-white z-10'>
            <a href="#" target="_blank" rel="noopener noreferrer" className='p-2 mx-2 border border-white rounded-full hover:bg-white hover:text-black transition'><BsInstagram className='text-'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"className='p-2 mx-2 border border-white rounded-full hover:bg-white hover:text-black transition'><HiOutlineMail className='text-'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='p-2 mx-2 border border-white rounded-full hover:bg-white hover:text-black transition'><FaLinkedinIn className='text-'/></a>
        </div>
    </div>
  )
}

export default Header