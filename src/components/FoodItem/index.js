import {Component} from 'react'

import {FaRupeeSign} from 'react-icons/fa'

import Counter from '../Counter'

import RatingStar from '../../images/RatingStar.png'

import './index.css'

class FoodItem extends Component {
  state = {enableCounter: false, thisItemData: {}}

  componentDidMount() {
    this.checkingPreviousCartData()
  }

  checkingPreviousCartData = () => {
    let previousData = localStorage.getItem('cartData')

    if (previousData !== null) {
      previousData = JSON.parse(previousData)
      const {data} = this.props
      const {id} = data
      const thisItemData = previousData.filter(each => each.id === id)
      if (thisItemData.length !== 0) {
        this.setState({
          enableCounter: true,
          thisItemData: thisItemData[0],
        })
      }
    }
  }

  onAdd = () => {
    this.setState({enableCounter: true})
    const {data} = this.props
    const {name, cost, id} = data
    const quantity = 1
    const CartData = {
      cost,
      quantity,
      id,
      imageUrl: data.image_url,
      name,
    }

    let previousData = localStorage.getItem('cartData')
    previousData = JSON.parse(previousData)
    const updatedData =
      previousData === null ? [CartData] : [...previousData, CartData]
    localStorage.setItem('cartData', JSON.stringify(updatedData))
  }

  render() {
    const {data} = this.props
    const {name, rating, cost, id} = data
    const imageUrl = data.image_url
    const {enableCounter, thisItemData} = this.state

    return (
      <li>
        <div className="food-item-container">
          <img src={imageUrl} alt="food-logo" className="food-image" />

          <div className="food-details-container">
            <p className="restaurant-name">{name}</p>
            <div className="price-container">
              <FaRupeeSign className="price" />
              <span className="price">{cost}</span>
            </div>
            <div>
              <img src={RatingStar} alt="star" />{' '}
              <span className="rating-thumb">{rating}</span>
            </div>
            {enableCounter ? (
              <Counter id={id} />
            ) : (
              <div>
                <button
                  onClick={this.onAdd}
                  className="Add-button"
                  type="button"
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        </div>
      </li>
    )
  }
}

export default FoodItem
