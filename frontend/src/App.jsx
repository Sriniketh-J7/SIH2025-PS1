import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/DashBoard'
import { SignIn } from './pages/SignIn'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes >
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path='/login' element = {<SignIn></SignIn>}></Route>
        
      </Routes>
     
     </BrowserRouter>
    </>
  )
}