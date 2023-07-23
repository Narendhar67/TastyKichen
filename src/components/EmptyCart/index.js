import {Link} from 'react-router-dom'

import Image from '../../images/No_orders.png'

import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-container">
    <img src={Image} alt="empty cart" className="no-orders-image" />
    <h1 className="no-orders-text">No Order Yet!</h1>
    <p className="no-orders-subText">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button className="order-now-button" type="button">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCart
