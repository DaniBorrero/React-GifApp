import React from 'react'

export const GifGirdItem = ({title, url}) => {  
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt = {title} /> 
      <p>{title}</p>
    </div>
  )
}
