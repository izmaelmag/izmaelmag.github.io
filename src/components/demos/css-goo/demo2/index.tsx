import React from 'react'
import { goo, blobs, blob } from './styles.module.css'

const GooDemo2 = () => {
  return(
    <div className={goo}>
      <div className={blobs}>
        <div className={blob}></div>
        <div className={blob}></div>
        <div className={blob}></div>
        <div className={blob}></div>
        <div className={blob}></div>
      </div>
    </div>
  )
}

export default GooDemo2