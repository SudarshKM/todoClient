
import './App.css'

import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Authentication from '../pages/Authentication'
import Dashboard from '../pages/Dashboard'

function App() {



  return (
    <>
   


    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Authentication login/>}/>
      <Route path='/register' element={<Authentication register/>}/>

      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
