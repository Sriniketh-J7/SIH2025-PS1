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
import { ReportDetail } from "./pages/ReportDetail";
import Profile from "./Components/UserDashboards/Profile" ;
import CameraCapture from './lib/Camera'
import Test from "./pages/Test"
import { UserLayout } from './pages/UserLayout'



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn></SignIn>}></Route>

          <Route
            path="/TechDashboard"
            element={<TechDashboard></TechDashboard>}
          ></Route>
          <Route path="/report/:reportId" element={<ReportDetail />} />

          <Route
            path="/DeptTechnicians"
            element={<DeptTechnician></DeptTechnician>}
          ></Route>
          <Route
            path="/DeptOverview"
            element={<DeptDashboard></DeptDashboard>}
          ></Route>
          <Route
            path="/DeptReports"
            element={<DeptReports></DeptReports>}
          ></Route>

          {/* User routes wrapped with footer */}
          <Route element={<UserLayout />}>
            <Route path="/UserHomePage" element={<UserHomePage />} />
            <Route path="/UserReportsPage" element={<UserReportsPage />} />
            <Route path="/userNewReport" element={<UserNewReport />} />
            <Route path="/ReportNewIssue" element={<ReportNewIssue />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* <Route path='/test' element = {<Test></Test>}></Route>  
        <Route path='/UserHomePage' element = {<UserHomePage></UserHomePage>}></Route>  
        <Route path='/UserReportsPage' element = {<UserReportsPage></UserReportsPage>}></Route>
        <Route path='/' element = {<UserNewReport></UserNewReport>}></Route>
        <Route path='/ReportNewIssue' element = {<ReportNewIssue></ReportNewIssue>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}