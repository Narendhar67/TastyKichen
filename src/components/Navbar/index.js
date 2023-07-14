import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import NavBarLogo from './Logo.svg'
import './index.css'

class Navbar extends Component {
  state = {selectedTab: ''}

  onLogout = () => {
    Cookies.remove('jwtToken')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div className="Navbar-container">
        <Link to="/" className="link">
          <div className="logo_and_name">
            <img src={NavBarLogo} alt="Navbar-logo" className="Navbar-logo" />
            <p className="Title">Tasty Kitchens</p>
          </div>
        </Link>
        <div className="nav-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/cart">
            Cart
          </Link>
          <button
            onClick={this.onLogout}
            type="button"
            className="logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
