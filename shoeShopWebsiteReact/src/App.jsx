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
import ForgotPassword from './pages/ForgotPassword'
import UserMenu from './pages/UserMenu'
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
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/user-menu' element={<UserMenu />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}