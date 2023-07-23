import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import mobileFoodImage from '../../images/mobile_food_img.png'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    LoginError: false,
    errorMsg: '',
  }

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
    //  console.log(data)

    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      this.setState({LoginError: false})
      history.replace('/')
    } else {
      this.setState({LoginError: true, errorMsg: data.error_msg})
    }
  }

  updateUsername = e => {
    this.setState({username: e.target.value})
  }

  updatePassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {username, password, LoginError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-container">
        <div className="Login-container">
          {/* Input Form */}
          <form className="Login-box" onSubmit={this.getData}>
            {/* mobile logo */}
            <div className="mobile-logo">
              <img src="mobileFoodImage" alt="mobile login" />
            </div>

            <img
              src="img/MyProject_images/Frame 274logo.svg"
              alt="website logo"
              className="logo"
            />
            <h1 className="login-logo">Tasty Kitchens</h1>
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
            {LoginError && <p className="error_msg">{errorMsg}</p>}
          </form>
        </div>
        <div className="Image">
          <img
            className="website-login-image-lg"
            src="img/MyProject_images/Rectangle 1456login_image.png"
            alt="website login"
          />
        </div>
      </div>
    )
  }
}

export default Login
