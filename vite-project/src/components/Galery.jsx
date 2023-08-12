import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Photos from './Photos'
import "./Gallery.css"


function Galery() {

   // const [gallery, setGalery] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const [galleryList, setGaleryLIst] = useState([])

   async function dowloadImage() {
      // const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos")
      const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
      console.log(response.data);
      console.log(response);
      const galeryResult = response.data.photos
      // console.log(galeryResult);
      // const galeryResultPromise  = galeryResult.map((photo)=> axios.get(photo.url))
      // const GaleryData = await axios.all(galeryResultPromise)

      // console.log(GaleryData)
      // const glda  = GaleryData.photos

      const res = galeryResult.map((glryData) => {
         const photo = glryData
         // console.log(photo);

         // const res = galeryResult.map((glryData)=> {
         //    const photo = glryData.data

         return ({
            url: photo.url,
            title: photo.title,
            id: photo.id

         }
         )

      })
      // console.log(res);
      setGaleryLIst(res)
      setIsLoading(false)


   }

   useEffect(() => {
      dowloadImage()
   }, [])



   return (
      <div className='galery'>
         <div className='heading-wrapper'>
         <h1 className='heading'>Gallery</h1>

         </div>
         <div className='gallery-item'>
         {
            (isLoading) ? "Loading..." :

               galleryList.map((image) => <Photos title={image.title} url={image.url} key={image.id} />
               )

         }

</div>
      </div>
   )
}


export default Galery
