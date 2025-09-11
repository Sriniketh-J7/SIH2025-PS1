import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { TechDashboard } from './pages/TechDashBoard'
import { SignIn } from './pages/SignIn'
import { DeptTechnician } from './pages/DeptTechnician'
import { DeptDashboard } from './pages/DeptDashboard'
import { DeptReports } from './pages/DeptReports'


export default function App() {

  return (
    <>
     <BrowserRouter>
      <Routes >
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/TechDashboard' element = {<TechDashboard></TechDashboard>}></Route>
        <Route path='/DeptTechnician' element = {<DeptTechnician></DeptTechnician>}></Route>
        <Route path='/DeptDashboard' element = {<DeptDashboard></DeptDashboard>}></Route>
        <Route path='/DeptReports' element = {<DeptReports></DeptReports>}></Route>
        
        <Route path='/login' element = {<SignIn></SignIn>}></Route>

      </Routes>
     
     </BrowserRouter>
    </>
  )
}