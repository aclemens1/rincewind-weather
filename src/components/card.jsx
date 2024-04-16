import { getIconUrl } from '../utils'

const Card = ({ weather }) => {
  return (
    weather && (
      <>
        <div><img src={getIconUrl(weather.icon)}/></div>
        <div>{Math.round(weather.temperature)}&deg;</div>
      </>
    )
  )
  
}

export default Card
