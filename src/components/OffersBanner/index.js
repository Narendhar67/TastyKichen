import './index.css'

const OffersBanner = props => {
  const {data} = props

  return (
    <div className="banner-container">
      <img src={data} alt="banner" className="banner-image" />
    </div>
  )
}

export default OffersBanner
