import { getIconUrl, toLocalDate } from '../utils'

const Daily = ({ weather }) => {
  return (
    weather && (
      <>
        <table>
          <tbody>
            {
              weather.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {toLocalDate(value.time)}
                    </td>
                    <td>
                      <img src={getIconUrl(value.icon)}/>
                    </td>
                    <td>
                      {Math.round(value.temperatureLow)}&deg;
                    </td>
                    <td>
                      -
                    </td>
                    <td>
                      {Math.round(value.temperatureHigh)}&deg;
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
  )
}

export default Daily
