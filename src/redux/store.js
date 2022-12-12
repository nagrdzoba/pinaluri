import {createStore} from 'redux';
import { WeatherReducer } from './reducer';

 const store = createStore(
     WeatherReducer
 );

 export default store;