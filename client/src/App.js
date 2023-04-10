import React from 'react'
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Survey from './Pages/Survey';
import Thanking from './Pages/Thanking';
import Welcome from './Pages/Welcome';
import './App.css'

function App() {



  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/thanking" element={<Thanking/>}/>
         
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App