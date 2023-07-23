import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {numberOfItems: 1}

  componentDidMount() {
    this.updateNumberOfItems()
  }

  updateNumberOfItems = () => {
    const {id} = this.props
    let Data = localStorage.getItem('cartData')
    if (Data !== null) {
      Data = JSON.parse(Data)
      const itemData = Data.filter(each => each.id === id)
      this.setState({numberOfItems: itemData[0].quantity})
    }
  }

  updateCartData = () => {
    const {numberOfItems} = this.state
    const {id, getCartData, disableCounter} = this.props
    let Data = localStorage.getItem('cartData')

    if (Data !== null) {
      Data = JSON.parse(Data)

      let updatedCartData
      if (numberOfItems < 1) {
        // if number of Items less than 1, then it removes that item
        updatedCartData = Data.filter(each => each.id !== id)
        if (disableCounter !== undefined) {
          disableCounter() // it will disable counter and adds enable button
        }
      } else {
        const itemData = Data.filter(each => each.id === id) // getting Item Data
        const updatedItemData = {...itemData[0], quantity: numberOfItems} // updating Item data

        // updating Item data in the Cart
        updatedCartData = Data.map(each => {
          if (each.id === id) {
            return updatedItemData
          }
          return each
        })
      }

      localStorage.setItem('cartData', JSON.stringify(updatedCartData))
      if (getCartData !== undefined) {
        getCartData()
      }
    }
  }

  onDecrement = () => {
    const {numberOfItems} = this.state
    if (numberOfItems)
      this.setState(
        prevState => ({numberOfItems: prevState.numberOfItems - 1}),
        this.updateCartData,
      )
  }

  onIncrement = () => {
    this.setState(
      prevState => ({numberOfItems: prevState.numberOfItems + 1}),
      this.updateCartData,
    )
  }

  render() {
    const {numberOfItems} = this.state

    return (
      <div className="Counter-container">
        {/* testid="decrement-count" */}
        <button
          className="quantityButtons"
          type="button"
          onClick={this.onDecrement}
          testid="decrement-count"
        >
          -
        </button>

        {/* testid="active-count" */}
        <p testid="active-count">{numberOfItems}</p>
        {/* testid="increment-count" */}
        <button
          className="quantityButtons plusButton"
          type="button"
          onClick={this.onIncrement}
          testid="increment-count"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
