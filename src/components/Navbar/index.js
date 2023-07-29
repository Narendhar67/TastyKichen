import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'

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
    Cookies.remove('tasty_user')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {menuOpened} = this.state
    const {home, cart, profile} = this.props

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
                <p className={home ? 'Highlight' : null}>Home</p>
              </Link>
            </li>
            <li key="cart" className="list-item">
              <Link className="link" to="/cart">
                <p className={cart ? 'Highlight' : null}>Cart</p>
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/profile">
                <BsPersonCircle
                  className={
                    profile ? 'profile-icon Highlight' : 'profile-icon'
                  }
                />
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
                  <p className={home ? 'Highlight' : null}>Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/cart">
                  <p className={cart ? 'Highlight' : null}>Cart</p>
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/profile">
                  <BsPersonCircle
                    className={
                      profile ? 'profile-icon Highlight' : 'profile-icon'
                    }
                  />
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
