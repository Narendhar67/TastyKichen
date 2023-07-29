import {Component} from 'react'
import Cookies from 'js-cookie'

import {BsPersonCircle} from 'react-icons/bs'

import Navbar from '../Navbar'

import './index.css'

class Profile extends Component {
  render() {
    const username = Cookies.get('tasty_user')
    return (
      <>
        <Navbar profile />
        <div className="content-container">
          <div className="profile-container">
            <BsPersonCircle className="profile-image" />
            <h1 className="username">{username.toUpperCase()}</h1>
          </div>
        </div>
      </>
    )
  }
}

export default Profile
