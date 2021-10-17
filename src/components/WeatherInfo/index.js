import React from 'react'
import styles from './WeatherInfo.module.css'
import { BiWind } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'

const WeatherInfo = ({ temperature, city, description, wind, humidity }) => {
  const tempConvert = () => (temperature - 273.15).toFixed(1)
  const WEEKDAY = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const d = new Date()

  return (
    <section className={styles.weather__container}>
      <div className={styles['weather--temp']}>{tempConvert() + ' °C'}</div>
      <div className={styles['weather--city']}>
        {city}, {WEEKDAY[d.getDay()]}
      </div>
      <div className={styles['weather--description']}>{description}</div>
      <div className={styles.line}></div>
      <div className={styles['weather--humwind']}>
        <BiWind color="#FF9200" />
        <span>{wind} Mps</span>
      </div>
      <div className={styles['weather--humwind']}>
        <WiHumidity color="#FF9200" /> <span>{humidity}%</span>
      </div>
    </section>
  )
}

export default WeatherInfo
