/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { data } from 'autoprefixer'
import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  const today = new Date()
  const dayOfWeekNumber = today.getDay()
  let nameOfDay

  if (dayOfWeekNumber === 1) {
    nameOfDay = 'Monday'
  } else if (dayOfWeekNumber === 2) {
    nameOfDay = 'Tuesday'
  } else if (dayOfWeekNumber === 3) {
    nameOfDay = 'Wednesday'
  } else if (dayOfWeekNumber === 4) {
    nameOfDay = 'Thursday'
  } else if (dayOfWeekNumber === 5) {
    nameOfDay = 'Friday'
  } else {
    console.log('Nothing')
  }

  const API_TOKEN = process.env.REACT_APP_API_KEY
  const API =
    'https://api.openweathermap.org/data/2.5/onecall?lat=49.2608724&lon=-123.113952&exclude=minutely,hourly,alerts&appid='
  const [weatherIcon, setWeatherIcon] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API}${API_TOKEN}`,
    })
      .then((res) => {
        data = res.data
        console.log(data)
        setWeatherIcon(data.current.weather[0].icon)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col h-auto py-6 w-60 items-center justify-around bg-red-200'>
        <p>{nameOfDay}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          alt='Weather Icon'
        />
        <div className='flex justify-between w-1/2'>
          <p>27</p>
          <p>26</p>
        </div>
      </div>
    </div>
  )
}

export default App
