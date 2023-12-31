import React from 'react'
import Navbar from './../../Componant/Navbar'
import Card from './../../Componant/card'
import "./../Home/Home.css"

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className='app-title'>What's on your mind?</h1>
        <Card/>
        <div className='add-contact-container'>
          <h2>Add contact</h2>
        </div>
      </div>
    
  )
}

export default Home