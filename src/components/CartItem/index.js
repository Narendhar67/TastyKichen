import {FaRupeeSign} from 'react-icons/fa'

import CartCounter from '../CartCounter'

import './index.css'

const CartItem = props => {
  const {data, getCartData} = props
  const {cost, id, imageUrl, name, quantity} = data

  /* testid="cartItem" */

  return (
    <li>
      <div className="cart-item-container">
        <img src={imageUrl} alt="cart-food-item" className="cart-food-image" />
        <div className="cart-item-details-container">
          <h1 className="cart-item-name">{name}</h1>
          <div className="counter-container">
            <CartCounter
              id={id}
              quantity={quantity}
              getCartData={getCartData}
            />
          </div>
          <p className="cart-item-price">
            <FaRupeeSign />
            <span>{` ${cost * quantity}.00`}</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default CartItem
