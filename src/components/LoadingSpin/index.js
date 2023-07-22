import Loader from 'react-loader-spinner'

import './index.css'

const LoadingSpin = () => (
  <div className="spin-container">
    <Loader type="TailSpin" color="#F7931E" height={80} width={80} />
  </div>
)

export default LoadingSpin
