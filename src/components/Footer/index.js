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
        <h1 className="website-footer-Name">Tasty Kitchen</h1>
      </div>
      <p className="website-footer-text">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social-media-links-container">
        <FaPinterestSquare
          testid="pintrest-social-icon"
          className="social-media-icon"
        />
        <FaInstagram
          testid="instagram-social-icon"
          className="social-media-icon"
        />
        <FaTwitter testid="twitter-social-icon" className="social-media-icon" />
        <FaFacebookSquare
          testid="facebook-social-icon"
          className="social-media-icon"
        />
      </div>
    </div>
  )
}
