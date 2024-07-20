import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incValue = ()=>{
    setCount(count+1);
  }

  const decValue = ()=>{
    if(count > 0)
      setCount(count-1)
  }

  return (
    <>
      <h1>COUNTER : {count}</h1>
      <button
      onClick={incValue}
      >increase</button>
      <br />
      <button
      onClick={decValue}
      >decrease</button>
    </>
  )
}

export default App
