import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'

import NavBarLogo from '../../images/Logo.svg'

import './index.css'

class Navbar extends Component {
  state = {menuOpened: false}

  onMenuClick = () => {
    this.setState({menuOpened: true})
  }

  onMenuClose = () => {
    this.setState({menuOpened: false})
  }

  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {menuOpened} = this.state
    const {home, cart} = this.props

    return (
      <>
        <ul className="Navbar-container">
          <Link to="/" className="link">
            <li className="logo_and_name">
              <img
                src={NavBarLogo}
                alt="website logo"
                className="Navbar-logo"
              />
              <p className="Title">Tasty Kitchens</p>
            </li>
          </Link>
          <ul className="nav-links">
            <li key="home" className="list-item">
              <Link className="link" to="/">
                <p className={home ? 'link Highlight' : 'link'}>Home</p>
              </Link>
            </li>
            <li key="cart" className="list-item">
              <Link className="link" to="/cart">
                <p className={cart ? 'link Highlight' : 'link'}>Cart</p>
              </Link>
            </li>
            <li key="logout" className="list-item">
              <button
                onClick={this.onLogout}
                type="button"
                className="logout-button"
              >
                Logout
              </button>
            </li>
          </ul>
          <button
            onClick={this.onMenuClick}
            className="menu-icon"
            type="button"
          >
            <AiOutlineMenu />
          </button>
        </ul>
        {/* mobile menu */}
        {menuOpened && (
          <div className="mobile-menu">
            <ul className="nav-links-mobile">
              <li className="list-item">
                <Link className="link" to="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/cart">
                  <p>Cart</p>
                </Link>
              </li>
              <li className="list-item">
                <button
                  onClick={this.onLogout}
                  type="button"
                  className="logout-button"
                >
                  Logout
                </button>
              </li>
            </ul>
            <li className="list-item">
              <button
                onClick={this.onMenuClose}
                type="button"
                className="close-icon"
              >
                <AiFillCloseCircle />
              </button>
            </li>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Navbar)
