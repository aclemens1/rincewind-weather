const Card = ({ city, weather }) => {

  return (
    weather && (
      <>
        <p>Current weather for {city}</p>
        <ul>
          <li>Summary: {weather.currently.summary}</li>
          <li>Icon: {weather.currently.icon}</li>
          <li>Precipation Intensity: {weather.currently.precipIntensity}</li>
          <li>Precipation Type: {weather.currently.precipType}</li>
          <li>Temperature: {weather.currently.temperature}</li>
          <li>Apparent Temperature: {weather.currently.apparentTemperature}</li>
          <li>Dew Point: {weather.currently.dewPoint}</li>
          <li>Pressure: {weather.currently.pressure}</li>
          <li>Wind Speed: {weather.currently.windSpeed}</li>
          <li>Wind Bearing: {weather.currently.windBearing}</li>
          <li>Cloud Cover: {weather.currently.cloudCover}</li>
        </ul>
      </>
    )
  )
  
}

export default Card
