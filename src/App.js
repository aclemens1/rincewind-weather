import { useState } from "react"
import Card from "./components/card"
import Filter from "./components/filter"

function App() {

  const mapsCoAPIKey = "66133c6b97c68881283499kcn082424"
  const pirateWeatherAPIKey = "gH9MnPxi72TolKeaAv0DxZhWVmzRqSV7"

  const [weather, setWeather] = useState(null)
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const getData = async (address) => {
    setLoading(true)
    setError("")
    fetch("https://geocode.maps.co/search?q=" + address + "&api_key=" + mapsCoAPIKey)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0 && data[0].lat && data[0].lon) {
          fetch("https://api.pirateweather.net/forecast/" + pirateWeatherAPIKey + "/" + data[0].lat + "," + data[0].lon)
            .then((response) =>  response.json())
            .then((data) => {
              setWeather(data)
              setLoading(false)
            }).catch(function(error) {
              setError('Request failed: ' + error.message);
              setLoading(false)
            })
        }
      }).catch(function(error) {
        setError('Request failed:\n\n' + error.message);
        setLoading(false)
      })
  }

  const handleClick = () => {
    if (address && address.length > 0) {
      getData(address)
    }
  }

  return (
    <>
      <Filter placeholder="Enter your location" value={address} setValue={setAddress} />
      <button onClick={handleClick} disabled={loading}>What's the weather today?</button>
      <br />
      {loading && <div>loading...</div>}
      {!loading && <Card weather={weather} />}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  )

}

export default App
