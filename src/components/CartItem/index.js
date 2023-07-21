import {FaRupeeSign} from 'react-icons/fa'

import Counter from '../Counter'

import './index.css'

const CartItem = props => {
  const {data, getCartData} = props
  const {cost, id, imageUrl, name, quantity} = data

  return (
    <li>
      <div className="cart-item-container">
        <img src={imageUrl} alt="cart-food-item" className="cart-food-image" />
        <div className="cart-item-details-container">
          <p className="cart-item-name">{name}</p>
          <div className="counter-container">
            <Counter id={id} getCartData={getCartData} />
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
