import React from 'react'
import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../pictures/cart-icon.svg'

const cartIcon = () => (
  <div classnName="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"></span>
  </div>
)
export default cartIcon
