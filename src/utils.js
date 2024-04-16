export const getIconUrl = (icon) => {
  return `/rincewind-weather/icons/${icon}.svg`
}

export const toCelsius = (temp) => {
  return Math.round(((temp-32)*5)/9)
}

export const toLocalTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000)

  return ("0" + date.getHours()).slice(-2)
}

export const toLocalDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000)

  return date.toLocaleDateString('en-AU', { weekday: 'long' })
}
