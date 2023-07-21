import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', LoginError: false}

  getData = async e => {
    e.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userData = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      Cookies.set('jwtToken', data.jwt_token, {expires: 1})
      this.setState({LoginError: false})
      history.push('/')
    } else {
      this.setState({LoginError: true})
    }
  }

  updateUsername = e => {
    this.setState({username: e.target.value})
  }

  updatePassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {username, password, LoginError} = this.state
    return (
      <div className="bg-container">
        <div className="Login-container">
          {/* mobile logo */}
          <div className="mobile-logo">
            <h1 className="login-heading-mobile">Login</h1>
          </div>

          {/* Input Form */}
          <form className="Login-box" onSubmit={this.getData}>
            <img
              src="img/MyProject_images/Frame 274logo.svg"
              alt="logo"
              className="logo"
            />
            <h1 className="login-heading">Login</h1>

            <div className="input-box">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="input-space"
                type="text"
                id="username"
                value={username}
                onChange={this.updateUsername}
              />
            </div>
            <div className="input-box">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input-space"
                type="password"
                id="password"
                value={password}
                onChange={this.updatePassword}
              />
            </div>
            <div className="login-container">
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
            {LoginError && (
              <p className="error_msg">
                Please enter a valid Username & Password
              </p>
            )}
          </form>
        </div>
        <div className="Image">
          <img
            className="login-image"
            src="img/MyProject_images/Rectangle 1456login_image.png"
            alt="food"
          />
        </div>
      </div>
    )
  }
}

export default Login
