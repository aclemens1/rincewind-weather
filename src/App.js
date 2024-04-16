import { useState, useEffect } from "react"
import Card from "./components/card"
import Hourly from "./components/hourly"
import Daily from "./components/daily"

function App() {

  const pirateWeatherAPIKey = "gH9MnPxi72TolKeaAv0DxZhWVmzRqSV7"

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords), (error) => {
            reject(new Error(`${error.message}`))
          }
        })
      } else {
        reject(new Error('Geolocation is not supported by your browser.'))
      }
    })
  }

  const getWeatherData = (apiKey, latitude, longitude) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.pirateweather.net/forecast/${apiKey}/${latitude},${longitude}?units=si`)
        .then((response) =>  {
          if (!response.ok) {
            reject(new Error("Failed to fetch weather data. Please try again later."))
          }
          return response.json()
        })
        .then((data) => {
          resolve(data)
        })
    })
  }

  useEffect(() => {
    setLoading(true)
    getLocation()
      .then((coords) => {
        getWeatherData(
          pirateWeatherAPIKey,
          coords.latitude,
          coords.longitude
        )
        .then((data) => {
          setData(data)
          setLoading(false)
        })
      })
  }, [])

  return (
    <form>
      {loading && <div>loading...</div>}
      {!loading && data && (
        <>
          <h1>Weather</h1>
          <h2>Now</h2>
          <Card weather={data.currently} />
          <h2>Hourly</h2>
          <Hourly weather={data.hourly.data} />
          <h2>Daily</h2>
          <Daily weather={data.daily.data} />
        </>
      )}
    </form>
  )

}

export default App
