import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'

import NavBarLogo from './Logo.svg'

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
    Cookies.remove('jwtToken')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {menuOpened} = this.state

    return (
      <>
        <nav className="Navbar-container">
          <Link to="/" className="link">
            <div className="logo_and_name">
              <img src={NavBarLogo} alt="Navbar-logo" className="Navbar-logo" />
              <p className="Title">Tasty Kitchens</p>
            </div>
          </Link>
          <ul className="nav-links">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/cart">
                Cart
              </Link>
            </li>
            <li>
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
        </nav>
        {/* mobile menu */}
        {menuOpened && (
          <div className="mobile-menu">
            <ul className="nav-links-mobile">
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/cart">
                  Cart
                </Link>
              </li>
              <li>
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
              onClick={this.onMenuClose}
              type="button"
              className="close-icon"
            >
              <AiFillCloseCircle />
            </button>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Navbar)
