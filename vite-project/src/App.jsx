import { useState } from 'react'

import './App.css'
import Galery from './components/Galery'
import GalleryDetails from './components/GalleryDetails'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Galery/>}/>
      <Route path="/details/:id"  element={<GalleryDetails/>}/>

     </Routes>
    </BrowserRouter>
     
    
    </>
        
 )   
}

export default App
