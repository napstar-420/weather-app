import React from 'react'
import Header from './Header.js'
import web_bg from '../Images/web_bg.jpg'

const Home = () => {
  return (
    <div className="w-screen h-screen after:w-[100%] after:h-[100%] after:bg-black after:content-['*'] after:absolute after:top-0 after:opacity-50" style={{backgroundImage: `url(${web_bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <Header className=""/>
    </div>
  )
}

export default Home