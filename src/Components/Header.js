/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {RiGithubLine} from 'react-icons/ri';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-between py-4 px-4 lg:px-10 sm:fixed top-0 w-screen z-20'>
        <Link to='/' className='text-white text-lg font-semibold z-10'>GEO WEATHER</Link>
        <div className='flex items-center text-white z-10'>
            <a href="https://www.instagram.com/zohaib_billa_420/" target="_blank" rel="noopener noreferrer" className='p-2 mx-2 border border-white rounded-full hover:bg-white hover:text-black transition'><BsInstagram className=''/></a>
            <a href="mailto:zohaibkhan1162002@gmail.com" target="_blank" rel="noopener noreferrer"className='p-2 mx-2 border border-white rounded-full hover:bg-white hover:text-black transition'><HiOutlineMail className=''/></a>
            <a href="https://github.com/napstar-420/" target="_blank" rel="noopener noreferrer" className='p-2 mx-2 border border-white rounded-full hover:bg-white hover:text-black transition'><RiGithubLine className=''/></a>
        </div>
    </div>
  )
}

export default Header