import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather'

const rootReducer = combineReducers({
  weatherReducer: WeatherReducer
});

export default rootReducer;
