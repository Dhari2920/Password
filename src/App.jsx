import React from 'react'
import { BrowserRouter, Routes, Route, Navigate }  from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
// Update the import statement to match the file name
import ForgotPswd from './components/Forgotpswd';


function App() {
  return <>
  <div id='wrapper'>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Create />}/>
      <Route path='/login' element={<SignIn />}/>
      <Route path='/forgotpassword' element={<ForgotPswd />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  </BrowserRouter>

  </div>
  </>
}

export default App