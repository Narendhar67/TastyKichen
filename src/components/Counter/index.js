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
    const {id} = this.props
    let Data = localStorage.getItem('cartData')
    if (Data !== null) {
      Data = JSON.parse(Data)
      const itemData = Data.filter(each => each.id === id) // getting Item Data
      const updatedItemData = {...itemData[0], quantity: numberOfItems} // updating Item data

      // updating Item data in the Cart
      const updatedCartData = Data.map(each => {
        if (each.id === id) {
          return updatedItemData
        }
        return each
      })

      localStorage.setItem('cartData', JSON.stringify(updatedCartData))
    }
  }

  onDecrement = () => {
    const {numberOfItems} = this.state
    if (numberOfItems > 1) {
      this.setState(
        prevState => ({numberOfItems: prevState.numberOfItems - 1}),
        this.updateCartData,
      )
    }
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
        <button
          className="quantityButtons"
          type="button"
          onClick={this.onDecrement}
        >
          -
        </button>
        <p>{numberOfItems}</p>
        <button
          className="quantityButtons plusButton"
          type="button"
          onClick={this.onIncrement}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
