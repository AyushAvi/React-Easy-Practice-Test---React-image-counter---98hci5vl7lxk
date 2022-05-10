import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  const [size,setSize] = useState(300);

  const handleClick = () => {
    setSize(prevSize => prevSize + 2);
  }
  return (
    <div id="main">
      <img onClick={handleClick} src={star}  height={`${size}px`} width={`${size}px`} />
    </div>
  )
}


export default App;
