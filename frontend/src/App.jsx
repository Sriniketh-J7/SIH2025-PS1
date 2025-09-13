import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { TechDashboard } from './pages/TechDashBoard'
import { SignIn } from './pages/SignIn'
import { DeptTechnician } from './pages/DeptTechnician'
import { DeptDashboard } from './pages/DeptDashboard'
import { DeptReports } from './pages/DeptReports'
import { UserHomePage } from './pages/UserHomePage'
import {UserReportsPage} from './pages/UserReportsPage'
import {UserNewReport} from './pages/UserNewReport'
import {ReportNewIssue} from './pages/ReportNewIssue'
import {ReportDetails} from './pages/UserReportDetail'



export default function App() {

  return (
    <>
     <BrowserRouter>
      <Routes >
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element = {<SignIn></SignIn>}></Route>
        <Route path='/TechDashboard' element = {<TechDashboard></TechDashboard>}></Route>


        <Route path='/DeptTechnicians' element = {<DeptTechnician></DeptTechnician>}></Route>
        <Route path='/DeptOverview' element = {<DeptDashboard></DeptDashboard>}></Route>
        <Route path='/DeptReports' element = {<DeptReports></DeptReports>}></Route>

                                        
        <Route path='/UserHomePage' element = {<UserHomePage></UserHomePage>}></Route>  
        <Route path='/UserReportsPage' element = {<UserReportsPage></UserReportsPage>}></Route>
        <Route path='/UserNewReport' element = {<UserNewReport></UserNewReport>}></Route>
        <Route path='/UserReportDetail' element = {<ReportDetails></ReportDetails>}></Route>
        <Route path='/ReportNewIssue' element = {<ReportNewIssue></ReportNewIssue>}></Route>


      </Routes>
     
     </BrowserRouter>
    </>
  )
}