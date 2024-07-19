/* IMPORTS -----------------------------------------------------*/
// import files 
import './App.css'

// import packages
import axios from 'axios'

// imports hooks
import { useState } from 'react'

// import components
import Form from './components/Form'
import ForecastDisplay from './components/ForecastDisplay';

/* API -----------------------------------------------------*/
// load environment variables from .env into process.env
const API_KEY = import.meta.env.VITE_apiKey;
const baseURL = 'https://api.tomorrow.io/v4/weather';
const forecastEndpoint = 'https://api.tomorrow.io/v4/weather/forecast';
const realtimeEndpoint = 'https://api.tomorrow.io/v4/weather/realtime';

/* MAIN APP LOGIC -----------------------------------------------------*/
function App() {
  // set initial state
   const [locationData, setLocationData] = useState(null);

  async function getWeather(location) {
    try {
      // make api call and save response into variable
      const response = await axios.get(`${forecastEndpoint}?location=${location}&apikey=${API_KEY}`);
      
      // save into state
      setLocationData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

/* MAIN APP DISPLAY  --------------------------------------------------*/
  return (
    <>
      <h1>What's the Weather in...</h1>
      <Form locationSearch={getWeather} />
      <ForecastDisplay location={locationData}/>
    </>
  )
}

/* EXPORT -----------------------------------------------------*/
export default App
