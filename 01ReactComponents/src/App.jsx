import { useState } from 'react'

import './App.css'

// independent count update.

function MyButton({count, onClick}){
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )

}

function MyApp(){
  const [count, setcount] = useState(0);

  function ClickHandle(){
    setcount(count+1);
  }

  return(
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={ClickHandle}/>
      <MyButton count={count} onClick={ClickHandle}/>
    </div>
  )
}



export default MyApp;
