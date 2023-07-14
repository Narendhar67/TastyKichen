import {Component} from 'react'

import Navbar from '../Navbar'

class Home extends Component {
  state = {selectedTab: ''}

  render() {
    return (
      <>
        <Navbar />
        <div>Home</div>
      </>
    )
  }
}

export default Home
