import React from 'react'
import NavBar from './components/navbar/Nav'
import MainPage from './components/main_page/MainPage'
import './App.css'

function App() {
  return (
    <div id="app" className="overflow-x-hidden">
      <NavBar />
      <MainPage />
    </div>
  )
}

export default App
