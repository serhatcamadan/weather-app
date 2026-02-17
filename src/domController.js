const elements = {
  location: document.querySelector('#location-name'),
  temp: document.querySelector('#temperature'),
  condition: document.querySelector('#condition'),
  humidity: document.querySelector('#humidity'),
  wind: document.querySelector('#wind-speed'),
  weatherGif: document.querySelector('#weather-gif'),
  loading: document.querySelector('#loading-overlay'),
  container: document.querySelector('.main-container'),
};

export function showLoading() {
  elements.loading.classList.remove('hidden');
}

export function hideLoading() {
  elements.loading.classList.add('hidden');
}

export function renderWeather(data, unit = 'C', gifUrl = null) {
  elements.location.textContent = data.location;
  elements.condition.textContent = data.condition;
  elements.humidity.textContent = `Humidity: ${data.humidity}%`;
  elements.wind.textContent = `Wind: ${data.windspeed} km/h`;

  if (unit === 'C') {
    elements.temp.textContent = `${data.tempC}°C`;
  } else {
    elements.temp.textContent = `${data.tempF}°F`;
  }

  if (gifUrl) {
    elements.weatherGif.src = gifUrl;
    elements.weatherGif.alt = data.condition;
  }

  updateBackground(data.icon);
}

function updateBackground(iconName) {
  document.body.className = '';
  if (iconName) document.body.classList.add(iconName);
}

export function getSearchLocation() {
  const input = document.querySelector('#city-input');
  const city = input.value.trim();
  input.value = '';
  return city;
}
