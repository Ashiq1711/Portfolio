import React from 'react'
import './Title.css'

const Title = ({text,theme_pattern}) => {
  return (
    <div className="title">
        <h1>{text}</h1>
        <img src={theme_pattern} alt="" />
      </div>
  )
}

export default Title