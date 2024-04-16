import { getIconUrl, toLocalTime } from '../utils'

const Hourly = ({ weather }) => {
  return (
    weather && (
      <>
        <table>
          <tbody>
            <tr>
              {
                weather.map((value, index) => {
                  return (
                    <td key={index}>
                      <div>{toLocalTime(value.time)}</div>
                      <div><img src={getIconUrl(value.icon)}/></div>
                      <div>{Math.round(value.temperature)}&deg;</div>
                    </td>
                  )
                })
              }
            </tr>
          </tbody>
        </table>
      </>
    )
  )
}

export default Hourly
