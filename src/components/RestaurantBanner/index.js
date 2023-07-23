import {FaRupeeSign} from 'react-icons/fa'

import './index.css'
import star from '../../images/white_star.png'

const RestaurantBanner = props => {
  const {restaurantData} = props
  const {
    imageUrl,
    name,
    costForTwo,
    cuisine,
    location,
    reviewsCount,
    rating,
  } = restaurantData

  let Count = reviewsCount

  if (reviewsCount > 100) {
    const count = Math.round(reviewsCount / 100)
    Count = `${count * 100}+`
  }

  return (
    <div className="Restaurant-Banner">
      <div className="Restaurant-details">
        <div className="image-container">
          <img
            src={imageUrl}
            alt="restaurant"
            className="Restaurant-banner-image"
          />
        </div>
        <div className="Restaurant-name-details">
          <h1 className="Restaurant-heading">{name}</h1>
          <p className="Restaurant-cuisine">{cuisine}</p>
          <p className="Restaurant-cuisine">{location}</p>
          <div className="rating-and-price">
            <div className="restaurant-rating">
              <div className="small-box">
                <img src={star} alt="star" className="star" />
                <p className="rating-text">{rating}</p>
              </div>
              <div className="reviews-count-container">
                <p className="reviewsCount">{reviewsCount}</p>
                <p className="reviewsCount"> Ratings</p>
              </div>
            </div>
            <div className="restaurant-rating border-left">
              <div className="small-box">
                <FaRupeeSign className="star" />
                <p className="rating-text">{costForTwo}</p>
              </div>
              <p className="reviewsCount">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantBanner
