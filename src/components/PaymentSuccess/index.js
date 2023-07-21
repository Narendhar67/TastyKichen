import {withRouter} from 'react-router-dom'

import CheckCircle from '../../images/check-circle.png'

import './index.css'

const PaymentSuccess = props => {
  const RedirectToHome = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="payment-container">
      <img src={CheckCircle} alt="empty cart" className="check-circle-image" />
      <h1 className="no-orders-text">Payment Successful</h1>
      <p className="no-orders-subText">
        Thank you for ordering Your payment is successfully completed.
      </p>
      <button
        className="order-now-button"
        type="button"
        onClick={RedirectToHome}
      >
        Go To Home Page
      </button>
    </div>
  )
}

export default withRouter(PaymentSuccess)
