/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { data } from 'autoprefixer'
import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  const API_TOKEN = process.env.REACT_APP_API_KEY
  const API =
    'https://api.openweathermap.org/data/2.5/onecall?lat=49.2608724&lon=-123.113952&units=metric&exclude=minutely,hourly,alerts&appid='
  const [weatherDays, setWeatherDays] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API}${API_TOKEN}`,
    })
      .then((res) => {
        data = res.data

        const days = data.daily
        console.log(days)
        setWeatherDays(days)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  function consecutiveDays(days, index) {
    const today = new Date()
    const tomorrow = new Date(today)
    if (index === 0) {
      tomorrow.setDate(tomorrow.getDate())
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 1) {
      tomorrow.setDate(tomorrow.getDate() + 1)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 2) {
      tomorrow.setDate(tomorrow.getDate() + 2)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 3) {
      tomorrow.setDate(tomorrow.getDate() + 3)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 4) {
      tomorrow.setDate(tomorrow.getDate() + 4)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 5) {
      tomorrow.setDate(tomorrow.getDate() + 5)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 6) {
      tomorrow.setDate(tomorrow.getDate() + 6)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else if (index === 7) {
      tomorrow.setDate(tomorrow.getDate() + 7)
      const dayName = days[tomorrow.getDay()]
      return <p>{dayName}</p>
    } else {
      console.log('Please work')
    }
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      {weatherDays.map((day, index) => (
        <div
          className='flex flex-col h-auto py-6 w-60 items-center justify-around bg-red-200'
          key={index}
        >
          {consecutiveDays(days, index)}
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt='Weather Icon'
          />
          <div className='flex justify-between w-1/2'>
            <p>{Math.trunc(day.temp.min)}&#176;</p>
            <p>{Math.trunc(day.temp.max)}&#176;</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
