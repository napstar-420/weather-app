import React from 'react'
import Header from './Header.js'
import Hero from './Hero.js'
import web_bg from '../Images/web_bg.jpg'
import { useNavigate } from 'react-router-dom'

const Home = ({value, setValue, handleSearch, reply, setReply, weather}) => {
  const navigate = useNavigate()
  return (
      <div className="w-screen min-h-screen relative" style={{backgroundImage: `url(${web_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className='w-screen h-screen bg-black opacity-70 absolute z-0 left-0'/>
      <Header />
      <Hero value={value} setValue={setValue} handleSearch={handleSearch} reply={reply} setReply={setReply}/>
      {
        Object.keys(weather).length === 0 ? null : navigate('/weather') 
      }
      <p className='text-white lg:absolute bottom-3 text-center w-screen text-sm tracking-widest'>&copy; Copyright | Napstar 2022</p>
    </div>
  )
}

export default Home