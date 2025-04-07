import React from 'react'

export const ComponentOne = () => {
  const menu = ['Home', 'Projects', 'Contacts']
  const clickMe = (menuItem)=> {
    console.log(menuItem)
  }

  return (
    <header>
      {menu.map((item, index)=> (
        <button key = {index} onClick = {()=> clickMe(item)}>{item}</button>
      )
      )}
  </header>
   )
 
}
