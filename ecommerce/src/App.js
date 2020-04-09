import React from 'react'
import HomePage from './pages/HomePage/HomePage.component'
import './App.css'
import { Route } from 'react-router-dom'

const hatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  )
}

export default App
