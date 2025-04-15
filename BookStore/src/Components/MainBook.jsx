import React from 'react'




const MainBook = ({name, image, description, openPop_Up}) => {
  return (
    <div>
      <span><img src={image} alt={name} /></span>
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={openPop_Up}>View characters</button>
    </div>
  )
}

export default MainBook


