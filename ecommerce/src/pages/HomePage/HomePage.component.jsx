import React from 'react'
import './HomePage.styles.scss'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item>">
        <div className="content">
          <h1 className="title">TEES</h1>
          <span className="subtitle">The hottest Tees in the bay</span>
        </div>
      </div>
      <div className="menu-item>">
        <div className="content">
          <h1 className="title">PANTS</h1>
          <span className="subtitle">Pants to make you scream </span>
        </div>
      </div>
      <div className="menu-item>">
        <div className="content">
          <h1 className="title">HOODIES</h1>
          <span className="subtitle">
            bring the stray back with these beautiful sweaters
          </span>
        </div>
      </div>
      <div className="menu-item>">
        <div className="content">
          <h1 className="title">BEANIES</h1>
          <span className="subtitle">Bad hair day? we can fix that😏</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage
