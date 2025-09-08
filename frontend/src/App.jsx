import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/DashBoard'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes >
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
