import {Component} from 'react'
import Cookies from 'js-cookie'

import Slider from 'react-slick'

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import TastyContext from '../../context/TastyContext'
import Navbar from '../Navbar'
import OffersBanner from '../OffersBanner'
import RestaurantThumbnail from '../RestaurantThumbnail'
import Footer from '../Footer'
import LoadingSpin from '../LoadingSpin'

import sortByOptionsLogo from '../../images/sort.png'

import './index.css'

const renderStage = {
  loading: 'Loading',
  home: 'Home',
}

const convertData = d => ({
  name: d.name,
  cuisine: d.cuisine,
  rating: d.user_rating.rating,
  totalRatings: d.user_rating.total_reviews,
  imageUrl: d.image_url,
  id: d.id,
})

class Home extends Component {
  state = {
    OffersData: [],
    sortBy: 'Lowest',
    RestaurantsData: [],
    activePage: 1,
    totalPages: 0,
    renderingStage: renderStage.loading,
  }

  componentDidMount() {
    this.getData()
    this.getRestaurantsData()
  }

  getData = async () => {
    const JwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {Authorization: `bearer ${JwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()

    this.setState({OffersData: data.offers})
  }

  getRestaurantsData = async () => {
    const {activePage, sortBy} = this.state
    const limit = 9

    const JwtToken = Cookies.get('jwt_token')

    const offset = (activePage - 1) * limit

    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortBy}`
    const options = {
      headers: {Authorization: `bearer ${JwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data !== undefined) {
      const updatedData = data.restaurants.map(each => convertData(each))

      const totalPages = Math.ceil(data.total / 9) // finding total pages count
      if (response.ok === true) {
        this.setState({
          RestaurantsData: updatedData,
          totalPages,
          renderingStage: renderStage.home,
        })
        // console.log(data)
      }
    }
  }

  selectedSorting = e => {
    const SelectedValue = e.target.value
    this.setState({sortBy: SelectedValue}, this.getRestaurantsData)
  }

  onRightArrowClick = () => {
    const {activePage, totalPages} = this.state
    if (activePage < totalPages) {
      this.setState(
        prevState => ({activePage: prevState.activePage + 1}),
        this.getRestaurantsData,
      )
    }
  }

  onLeftArrowClick = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({activePage: prevState.activePage - 1}),
        this.getRestaurantsData,
      )
    }
  }

  renderBanner = () => {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {OffersData} = this.state

    return (
      <div className="Banner">
        <Slider {...settings}>
          {OffersData.map(each => (
            <OffersBanner key={each.id} data={each.image_url} />
          ))}
        </Slider>
      </div>
    )
  }

  renderPopularRestaurants = () => {
    const {RestaurantsData, activePage, totalPages} = this.state

    return (
      <TastyContext.Consumer>
        {value => {
          const {sortByOptions} = value
          return (
            <>
              {/* Popular Restaurants */}
              <div className="popular-restaurants">
                <div className="popular-restaurants-header">
                  <h1 className="popular-restaurants-heading">
                    Popular Restaurants
                  </h1>
                  <div className="popular-restaurants-details">
                    <p className="popular-restaurants-paragraph">
                      Select Your favourite restaurant special dish and make
                      your day happy...
                    </p>

                    <div className="sort-Container">
                      <img
                        alt="logo"
                        src={sortByOptionsLogo}
                        className="sortByOptionsLogo"
                      />
                      <p className="sortByOptions">Sort by</p>
                      <select
                        className="sortByOptions"
                        onChange={this.selectedSorting}
                      >
                        {sortByOptions.map(each => (
                          <option value={each.value} key={each.id}>
                            {each.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <hr className="h-Line" />
                {/* List of Restaurants */}
                <ul className="RestaurantsList">
                  {RestaurantsData.map(each => (
                    <RestaurantThumbnail key={each.id} data={each} />
                  ))}
                </ul>
                {/* Active Page selection */}
                <div className="page-selection">
                  <button
                    onClick={this.onLeftArrowClick}
                    type="button"
                    className="arrow-button"
                  >
                    <AiOutlineLeft />
                  </button>
                  <p className="PageNumbers">
                    <span>{activePage}</span> of {totalPages}
                  </p>
                  <button
                    onClick={this.onRightArrowClick}
                    type="button"
                    className="arrow-button"
                  >
                    <AiOutlineRight />
                  </button>
                </div>
              </div>
              <Footer />
            </>
          )
        }}
      </TastyContext.Consumer>
    )
  }

  renderFinal = () => {
    const {renderingStage} = this.state

    switch (renderingStage) {
      case renderStage.loading:
        return <LoadingSpin />
      case renderStage.home:
        return this.renderPopularRestaurants()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar home />
        {/* Offers Banner */}
        {this.renderBanner()}
        {this.renderFinal()}
      </>
    )
  }
}

export default Home
