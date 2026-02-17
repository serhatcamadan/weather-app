const API_KEY = 'W96PUX6TDZ4M6AGRVXJEHEBZA';
const GIPHY_KEY = 'OERUjBEQ2N5EnYWyOvdipHQ82IF8cZYj';

export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`City not found: ${location}`);
    }

    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}

export async function getGiphy(condition) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_KEY}&s=${condition}`,
      { mode: 'cors' }
    );
    const giphyData = await response.json();
    return giphyData.data.images.original.url;
  } catch (error) {
    console.error('Giphy error:', error);
    return null;
  }
}
