import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function GalleryDetails() {
   // const [image, setImage]  = useState({})
   const[imgDetails, setImgDetails] = useState({})
   const {id} = useParams()
   async function dowloadImage(){
      try {
         let response ;
      response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
    
        console.log(response);
   setImgDetails(response.data.photo);
   console.log(imgDetails);
      

     
         
      } catch (e) {
         console.log(e);
      }
   }

   useEffect(()=>{
   dowloadImage()
   },[])
  return (
    <div className='image-wrapper'>
      <div className='inner-image'>
         <img src={imgDetails.url} alt="" />
         <div className='details'>
            <h1> {imgDetails.title}</h1> 
            <p> {imgDetails.description}
</p>
         user : {imgDetails.user}
         </div>
         </div>
    </div>
  )
}

export default GalleryDetails
 