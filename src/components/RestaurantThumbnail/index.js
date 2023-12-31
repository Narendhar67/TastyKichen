import {Link} from 'react-router-dom'

import RatingStar from '../../images/RatingStar.png'

import './index.css'

const RestaurantThumbnail = props => {
  const {data} = props
  const {name, totalRatings, rating, cuisine, imageUrl, id} = data

  return (
    <li>
      {/* testid="restaurant-item" */}
      <Link to={`./restaurant/${id}`} className="link">
        <div className="Restaurant-thumb-container">
          <img src={imageUrl} alt="restaurant" className="restaurant-image" />
          <div className="restaurant-details-container">
            <h1 className="restaurant-name">{name}</h1>
            <p className="restaurant-cuisine">{cuisine}</p>
            <div>
              <img src={RatingStar} alt="star" />{' '}
              <span className="rating-thumb">{rating}</span>{' '}
              <span className="total-ratings">({totalRatings} ratings)</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default RestaurantThumbnail
