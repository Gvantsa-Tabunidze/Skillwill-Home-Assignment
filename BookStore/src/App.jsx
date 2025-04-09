import { useState } from 'react'
import './App.css'
import MainBook from './Components/MainBook'
import BookCover from './assets/a walk to remember.png'

function App() {


const mainBook = {
  name:'A Walk To Remember',
  descr: 'A Walk to Remember is a novel by American writer Nicholas Sparks, released in October 1999. This is a story of two teenagers who fall in love with each other despite the disparity of their personalities',
  character_names: ['Landon Carter', 'Jamie Sullivan'],
  img: BookCover
}

const openDiv = ()=>{
  alert(`Main characters are ${mainBook.character_names[0]} and ${mainBook.character_names[1]}`)
}

  return (
    <>
        <MainBook image={mainBook.img} name={mainBook.name} description={mainBook.descr} openPop_Up={openDiv} />   
    </>
  )
}

export default App
