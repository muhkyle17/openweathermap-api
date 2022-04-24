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
  const [daily, setDaily] = useState([])
  const [dayToday, setDayToday] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API}${API_TOKEN}`,
    })
      .then((res) => {
        data = res.data
        const eachDay = data.daily
        setDaily(eachDay)
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
    let dayName = null
    switch (index) {
      case 0:
        tomorrow.setDate(tomorrow.getDate())
        dayName = days[tomorrow.getDay()]
        return <p className='text-2xl'>{dayName.slice(0, 3)}</p>
      case 1:
        tomorrow.setDate(tomorrow.getDate() + 1)
        dayName = days[tomorrow.getDay()]
        return <p className='text-2xl'>{dayName.slice(0, 3)}</p>
      case 2:
        tomorrow.setDate(tomorrow.getDate() + 2)
        dayName = days[tomorrow.getDay()]
        return <p className='text-2xl'>{dayName.slice(0, 3)}</p>
      case 3:
        tomorrow.setDate(tomorrow.getDate() + 3)
        dayName = days[tomorrow.getDay()]
        return <p className='text-2xl'>{dayName.slice(0, 3)}</p>
      case 4:
        tomorrow.setDate(tomorrow.getDate() + 4)
        dayName = days[tomorrow.getDay()]
        return <p className='text-2xl'>{dayName.slice(0, 3)}</p>
      case 5:
        tomorrow.setDate(tomorrow.getDate() + 5)
        dayName = days[tomorrow.getDay()]
        return <p className='text-2xl'>{dayName.slice(0, 3)}</p>
      default:
        console.log('Please work')
        break
    }
  }

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate())
    const dayName = days[tomorrow.getDay()]
    setDayToday(dayName)
  }, [])

  function colorDayNumber(days, index) {
    const today = new Date()
    const tomorrow = new Date(today)
    if (index === 0) {
      tomorrow.setDate(tomorrow.getDate())
      const dayName = days[tomorrow.getDay()]
      return dayName === dayToday ? 'bg-gray-300' : 'bg-gray-200'
    } else if (index === 1) {
      tomorrow.setDate(tomorrow.getDate() + 1)
      const dayName = days[tomorrow.getDay()]
      return dayName === dayToday ? 'bg-gray-300' : 'bg-gray-200'
    } else if (index === 2) {
      tomorrow.setDate(tomorrow.getDate() + 2)
      const dayName = days[tomorrow.getDay()]
      return dayName === dayToday ? 'bg-gray-300' : 'bg-gray-200'
    } else if (index === 3) {
      tomorrow.setDate(tomorrow.getDate() + 3)
      const dayName = days[tomorrow.getDay()]
      return dayName === dayToday ? 'bg-gray-300' : 'bg-gray-200'
    } else if (index === 4) {
      tomorrow.setDate(tomorrow.getDate() + 4)
      const dayName = days[tomorrow.getDay()]
      return dayName === dayToday ? 'bg-gray-300' : 'bg-gray-200'
    } else if (index === 5) {
      tomorrow.setDate(tomorrow.getDate() + 5)
      const dayName = days[tomorrow.getDay()]
      return dayName === dayToday ? 'bg-gray-300' : 'bg-gray-200'
    } else {
      console.log('Please work')
    }
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>
      <div className='flex items-center justify-center border border-gray-300'>
        {daily.slice(0, 5).map((day, index) => (
          <div
            className={`flex flex-col h-auto py-6 w-60 items-center justify-around  ${colorDayNumber(
              days,
              index
            )}`}
            key={index}
          >
            {consecutiveDays(days, index)}
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt='Weather Icon'
            />
            <div className='flex gap-7'>
              <p className='text-3xl'>{Math.trunc(day.temp.min)}&#176;</p>
              <p className='text-3xl'>{Math.trunc(day.temp.max)}&#176;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
