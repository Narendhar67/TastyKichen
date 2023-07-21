import {Component} from 'react'

import {FaRupeeSign} from 'react-icons/fa'

import Navbar from '../Navbar'
import Footer from '../Footer'
import EmptyCart from '../EmptyCart'
import PaymentSuccess from '../PaymentSuccess'

import CartItem from '../CartItem'

import './index.css'

class Cart extends Component {
  state = {CartData: [], totalPrice: 0, paymentCompleted: false}

  componentDidMount() {
    this.getCartData()
  }

  getCartData = () => {
    const data = localStorage.getItem('cartData')
    if (data !== null) {
      const Data = JSON.parse(data)

      let totalPrice = 0
      Data.forEach(each => {
        totalPrice += each.cost * each.quantity
      })

      this.setState({CartData: Data, totalPrice})
    }
  }

  onPaymentSuccess = () => {
    localStorage.removeItem('cartData')
    this.setState({paymentCompleted: true})
  }

  renderCartData = () => {
    const {CartData, totalPrice} = this.state

    return (
      <>
        <ul className="CartItems-list-container">
          <div className="cart-item-headings">
            <p className="heading-name heading-item-name">Item</p>
            <p className="heading-name heading-item-quantity">Quantity</p>
            <p className="heading-name heading-item-price">Price</p>
          </div>
          {CartData.map(each => (
            <CartItem
              key={each.id}
              data={each}
              getCartData={this.getCartData}
            />
          ))}
          <hr className="horizontal-line" />
          <div className="total-order-container">
            <p className="total-order">Order Total :</p>
            <div className="total-order-price-container">
              <p className="total-price">
                <FaRupeeSign />
                <span>{`${totalPrice}.00`}</span>
              </p>
              <div>
                <button
                  onClick={this.onPaymentSuccess}
                  type="button"
                  className="Place-order-button"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </ul>
        <Footer />
      </>
    )
  }

  renderFinalPage = () => {
    const {paymentCompleted, CartData} = this.state
    if (paymentCompleted) {
      return <PaymentSuccess />
    }
    return CartData.length === 0 ? <EmptyCart /> : this.renderCartData()
  }

  render() {
    return (
      <>
        <Navbar cart />
        {this.renderFinalPage()}
      </>
    )
  }
}

export default Cart
