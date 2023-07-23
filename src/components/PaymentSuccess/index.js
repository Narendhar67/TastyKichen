import {Link} from 'react-router-dom'

import CheckCircle from '../../images/check-circle.png'

import './index.css'

const PaymentSuccess = () => (
  <div className="payment-container">
    <img src={CheckCircle} alt="empty cart" className="check-circle-image" />
    <h1 className="no-orders-text">Payment Successful</h1>
    <p className="no-orders-subText">
      Thank you for ordering Your payment is successfully completed.
    </p>
    <Link to="/">
      <button className="order-now-button" type="button">
        Go To Home Page
      </button>
    </Link>
  </div>
)

export default PaymentSuccess
