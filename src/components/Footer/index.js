import {Component} from 'react'

import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import FooterLogo from '../../images/footer_logo.png'

import './index.css'

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-website-logo-container">
        <img
          src={FooterLogo}
          alt="website-footer-logo"
          className="website-footer-logo"
        />
        <p className="website-footer-Name">Tasty Kitchens</p>
      </div>
      <p className="website-footer-text">
        The only thing we are serious about is food. 
      </p>
      <p className="website-footer-text">Contact us on</p>
      <div className="social-media-links-container">
        <FaPinterestSquare className="social-media-icon" />
        <FaInstagram className="social-media-icon" />
        <FaTwitter className="social-media-icon" />
        <FaFacebookSquare className="social-media-icon" />
      </div>
    </div>
  )
}
