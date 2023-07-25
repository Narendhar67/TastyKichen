import {Component} from 'react'

import {FaRupeeSign} from 'react-icons/fa'

import Counter from '../Counter'

import RatingStar from '../../images/RatingStar.png'

import './index.css'

class FoodItem extends Component {
  state = {enableCounter: false}

  componentDidMount() {
    this.checkingPreviousCartData()
  }

  disableCounter = () => {
    this.setState({enableCounter: false})
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
    const {enableCounter} = this.state

    return (
      <li>
        {/* testid="foodItem" */}
        <div className="food-item-container">
          <img src={imageUrl} alt="food-logo" className="food-item-image" />
          <div className="food-details-container">
            <h1 className="restaurant-name">{name}</h1>
            <div className="price-container">
              <FaRupeeSign className="price" />
              <p className="price">{cost}</p>
            </div>
            <div>
              <img src={RatingStar} alt="star" />{' '}
              <p className="rating-thumb">{rating}</p>
            </div>
            {enableCounter ? (
              <Counter id={id} disableCounter={this.disableCounter} />
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
