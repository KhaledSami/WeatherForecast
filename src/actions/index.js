import axios from 'axios';

const API_KEY = '27894c6235020739c33ab0f798fe1bd9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetechWeather(city) {
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);
	console.log(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}