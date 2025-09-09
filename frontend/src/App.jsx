import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/DashBoard'
import { SignIn } from './pages/SignIn'



export default function App() {

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