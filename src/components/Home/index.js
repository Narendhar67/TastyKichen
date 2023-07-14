import {Component} from 'react'
import Cookies from 'js-cookie'

import Slider from 'react-slick'

import Navbar from '../Navbar'
import OffersBanner from '../OffersBanner'

import './index.css'

class Home extends Component {
  state = {OffersData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const JwtToken = Cookies.get('jwtToken')
    console.log(JwtToken)
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {Authorization: `bearer ${JwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({OffersData: data.offers})
    console.log(data)
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {OffersData} = this.state

    return (
      <>
        <Navbar />
        {/* Offers Banner */}
        <div className="Banner">
          <Slider {...settings}>
            {OffersData.map(each => (
              <OffersBanner key={each.id} data={each.image_url} />
            ))}
          </Slider>
        </div>
      </>
    )
  }
}

export default Home
