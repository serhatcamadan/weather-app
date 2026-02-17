export default function processWeatherData(rawData) {
  const { resolvedAddress, currentConditions, description } = rawData;
  const tempF = currentConditions.temp;
  const tempC = (tempF - 32) * (5 / 9);

  return {
    location: resolvedAddress,
    condition: currentConditions.conditions,
    description,
    tempF: Math.round(tempF),
    tempC: Math.round(tempC),
    humidity: currentConditions.humidity,
    windspeed: currentConditions.windspeed,
    icon: currentConditions.icon,
  };
}
