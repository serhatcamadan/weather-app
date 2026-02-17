import './style.css';
import { getWeatherData, getGiphy } from './api.js';
import processWeatherData from './weatherProcessor.js';
import * as dom from './domController.js';

let currentData = null;
let currentUnit = 'C';

async function performSearch() {
    const city = document.querySelector('#city-input').value;
    if (!city) return;

    try {
        dom.showLoading();
        const raw = await getWeatherData(city);
        currentData = processWeatherData(raw);
        const gif = await getGiphy(currentData.condition);
        dom.renderWeather(currentData, currentUnit, gif);
    } catch (err) {
        alert(err.message);
    } finally {
        dom.hideLoading();
    }
}

document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch();
});

document.querySelector('#unit-toggle').addEventListener('click', (e) => {
    currentUnit = currentUnit === 'C' ? 'F' : 'C';
    e.target.textContent = `°C / °F`;
    if (currentData) dom.renderWeather(currentData, currentUnit);
});