import React from 'react'
import HomePage from './pages/HomePage/HomePage.component'
import './App.css'
import { Switch, Route } from 'react-router-dom'

const hatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </div>
  )
}

export default App
