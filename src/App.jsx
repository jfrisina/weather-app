// imports
import { useState } from 'react'
import './App.css'
import dotenv from 'dotenv'
import axios from 'axios'

// load environment variables from .env into process.env
dotenv.config();

// API 
const API_KEY = process.env.API_KEY;

const baseURL = 'https://api.tomorrow.io/';

// set up the http header, which is a key-value pair that provides additional information about the request or the response. Used to transmit various types of metadata between the client and the server.


// main app code
function App() {
  const [count, setCount] = useState(0)

  // display
  return (
    <>
      <h1>What's up with the Weather</h1>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

    </>
  )
}

export default App
