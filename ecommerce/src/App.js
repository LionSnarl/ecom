import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx'

const hatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  )
}

export default App
