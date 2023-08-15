import React from 'react'
// import { Link } from 'react-router-dom'
import './Gallery.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import GalleryDetails from './GalleryDetails'
function Photos({title , url, id}) {
  // const {id} = useParams()

  return (
    <div className='image'>
 
    <Link to={`/details/${id}`} >
       <img  className='img'  src={url}/>

    </Link>   
     
    </div>
  )
}

export default Photos
