import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
 import CreatBlog from './components/CreatBlog'
 import Blogpage from './components/BlogPage'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creatblog" element={<CreatBlog />} />
          <Route path="/blogpage" element={<Blogpage />} />
        </Routes>


    </BrowserRouter>
      
     
    </>
  )
}

export default App
