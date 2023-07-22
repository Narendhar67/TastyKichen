import {Component} from 'react'

import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import Footer from '../Footer'
import RestaurantBanner from '../RestaurantBanner'
import FoodItem from '../FoodItem'
import LoadingSpin from '../LoadingSpin'

import './index.css'

const renderStage = {
  loading: 'Loading',
  home: 'Home',
}

const convertData = data => ({
  id: data.id,
  imageUrl: data.image_url,
  costForTwo: data.cost_for_two,
  cuisine: data.cuisine,
  location: data.location,
  reviewsCount: data.reviews_count,
  name: data.name,
  rating: data.rating,
})

class RestaurantComponent extends Component {
  state = {
    restaurantData: {},
    foodItems: [],
    renderingStage: renderStage.loading,
  }

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
    if (response.ok === true) {
      const foodData = data.food_items
      const RData = convertData(data)

      this.setState({
        restaurantData: RData,
        foodItems: foodData,
        renderingStage: renderStage.home,
      })
    }
  }

  renderRestaurantItems = () => {
    const {restaurantData, foodItems} = this.state

    return (
      <>
        <RestaurantBanner restaurantData={restaurantData} />
        <ul className="FoodList">
          {foodItems.map(each => (
            <FoodItem key={each.id} data={each} />
          ))}
        </ul>
        <Footer />
      </>
    )
  }

  renderFinal = () => {
    const {renderingStage} = this.state

    switch (renderingStage) {
      case renderStage.loading:
        return <LoadingSpin />
      case renderStage.home:
        return this.renderRestaurantItems()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        {this.renderFinal()}
      </>
    )
  }
}

export default RestaurantComponent
