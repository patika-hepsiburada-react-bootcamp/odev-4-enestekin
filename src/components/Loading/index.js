import React from 'react'
import { Ellipsis } from 'react-css-spinners'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Ellipsis />
    </div>
  )
}

export default Loading
