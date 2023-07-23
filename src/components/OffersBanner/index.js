import './index.css'

const OffersBanner = props => {
  const {data} = props

  return (
    <li className="banner-container">
      <img src={data} alt="offer" className="banner-image" />
    </li>
  )
}

export default OffersBanner
