import {FaRupeeSign} from 'react-icons/fa'

import RatingStar from '../../images/RatingStar.png'

import './index.css'

const FoodItem = props => {
  const {data} = props
  const {name, totalRatings, rating, cost, id} = data

  return (
    <li className="list-item">
      <div className="food-item-container">
        <img src={data.image_url} alt="food-logo" className="food-image" />
        <div className="restaurant-details-container">
          <p className="restaurant-name">{name}</p>
          <div className="price-container">
            <FaRupeeSign className="price" />
            <span className="price">{cost}</span>
          </div>
          <div>
            <img src={RatingStar} alt="star" />{' '}
            <span className="rating-thumb">{rating}</span>{' '}
            <span className="total-ratings">({totalRatings} ratings)</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default FoodItem
