import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NewsTable from './pages/Home/NewsAndExams/NewsTable/NewsTable'
import ExamTable from './pages/Home/NewsAndExams/NewsTable/ExamTable'
import Clubs from './pages/Clubs/Clubs'
import AstroClub from './pages/AllClubs/AstroClub'
import GDSC from './pages/AllClubs/GDSC'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/noticetable" element={<NewsTable/>}/>
    <Route path="/examtable" element={<ExamTable/>}/>
    <Route path="/clubs" element={<Clubs/>}/>
    <Route path="/astroclub" element={<AstroClub/>}/>
    <Route path="/gdsc" element={<GDSC/>}/>
    <Route path="/login" element={<h1>Login</h1>}/>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
