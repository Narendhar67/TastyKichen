import {withRouter} from 'react-router-dom'

import NotFoundImage from '../../images/Not_Found.png'

import './index.css'

const NotFound = props => {
  const RedirectToHome = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="not-fond-container">
      <img src={NotFoundImage} alt="not found" className="not-found-image" />
      <h1 className="not-found-text">Page Not Found</h1>
      <p className="payment-subText">
        We are sorry, the page you requested could not be found. Please go back
        to the homepage
      </p>
      <button
        className="order-now-button"
        type="button"
        onClick={RedirectToHome}
      >
        Home Page
      </button>
    </div>
  )
}

export default withRouter(NotFound)
