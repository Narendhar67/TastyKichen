import {withRouter} from 'react-router-dom'

import Image from '../../images/No_orders.png'

import './index.css'

const EmptyCart = props => {
  const RedirectToHome = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="empty-cart-container">
      <img src={Image} alt="empty cart" className="no-orders-image" />
      <h1 className="no-orders-text">No Orders Yet!</h1>
      <p className="no-orders-subText">
        Your cart is empty. Add something from the menu.
      </p>
      <button
        className="order-now-button"
        type="button"
        onClick={RedirectToHome}
      >
        Order Now
      </button>
    </div>
  )
}

export default withRouter(EmptyCart)
