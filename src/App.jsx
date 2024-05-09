import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Blog from './pages/Blog'

const App=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/blog' element={<Blog/>}/>
    </Route>
  )
)

export default App