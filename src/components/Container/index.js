import React from 'react'
import { useCity } from '../../context/CityContext'
import { useQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from '../../graphql/Queries'
import Dropdown from '../Dropdown'
import styles from './Container.module.css'
import WeatherIcons from '../../utils/WeatherIcons'
import WeatherInfo from '../WeatherInfo'
import Loading from '../Loading'

const Container = () => {
  const { city } = useCity()
  const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
    variables: { name: city },
  })

  if (error) return <h1>{error}</h1>

  if (loading) return <Loading />

  console.log(data.getCityByName)
  return (
    <>
      <Dropdown />
      <main className={styles.container}>
        <div className={styles.weathericons}>
          <WeatherIcons
            iconCode={data.getCityByName.weather.summary.icon}
            size={150}
          />
        </div>
        <WeatherInfo
          temperature={data.getCityByName.weather.temperature.actual}
          city={data.getCityByName.name}
          description={data.getCityByName.weather.summary.description}
          wind={data.getCityByName.weather.wind.speed}
          humidity={data.getCityByName.weather.clouds.humidity}
        />
      </main>
    </>
  )
}

export default Container
