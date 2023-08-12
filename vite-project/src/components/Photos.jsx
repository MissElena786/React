import React from 'react'
// import { Link } from 'react-router-dom'
import './Gallery.css'

function Photos({title , url, id}) {
  return (
    <div className='image'>
    {/* <div>{title}</div> */}
    {/* <div>{id}</div> */}
    <img  src={url}/>
     
    </div>
  )
}

export default Photos
