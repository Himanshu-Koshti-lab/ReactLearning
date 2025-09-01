import React from 'react'
import "./Banner.css"

export default function Banner() {
  return (
    <div className='Banner'>
      <img src="https://picsum.photos/1200/400" alt="Image"  className='Banner-Image'/>
      <div className="banner-text">
        <h2>My First Banner</h2>
        <p>How it is ?</p></div> 
    </div>
  )
}
