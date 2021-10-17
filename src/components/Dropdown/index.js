import React from 'react'
import { useCity } from '../../context/CityContext'
import Downdrop from 'react-dropdown'
import 'react-dropdown/style.css'
import { cities } from '../../utils/Cities'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import styles from './Dropdown.module.css'

const options = cities

const Dropdown = () => {
  const { city, setCity } = useCity()

  const changeHandler = (e) => {
    setCity(e.value)
  }

  return (
    <Downdrop
      className={styles.dropdown}
      controlClassName={styles.controlClassName}
      value={city}
      onChange={changeHandler}
      options={options}
      arrowClosed={<MdKeyboardArrowUp />}
      arrowOpen={<MdKeyboardArrowDown />}
    />
  )
}

export default Dropdown
