import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">The hottest Tees in the bay</span>
    </div>
  </div>
)

export default withRouter(MenuItem)