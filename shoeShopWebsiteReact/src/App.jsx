import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Basket from './pages/Basket'
import Questions from './pages/ReleatedQuestions'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/questions' element={<Questions />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}