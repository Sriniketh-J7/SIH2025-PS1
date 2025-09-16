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
import { FormTwo } from "./pages/FormTwo";
import { ReportDetail } from "./pages/ReportDetail";
import Profile from "./Components/UserDashboards/Profile" ;
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
            <Route path="/" element={<UserHomePage />} />
            <Route path="/userReportsPage" element={<UserReportsPage />} />
            <Route path="/reportIssue" element={<UserNewReport />} />
            <Route path="/form2" element={<FormTwo />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/" element={<TestImageClassify />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}