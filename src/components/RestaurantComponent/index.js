import {Component} from 'react'

import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import Footer from '../Footer'
import RestaurantBanner from '../RestaurantBanner'

class RestaurantComponent extends Component {
  state = {restaurantData: {}, foodItems: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {restrauntId} = params
    const url = `https://apis.ccbp.in/restaurants-list/${restrauntId}`
    const JwtToken = Cookies.get('jwtToken')
    const options = {
      headers: {Authorization: `bearer ${JwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <>
        <Navbar />
        <RestaurantBanner />

        <Footer />
      </>
    )
  }
}

export default RestaurantComponent
