import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './componrnts/Item'
import Cart from './componrnts/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Item name="mackbook pro" price={1000}/>
    <Item name="pendrive" price={2000}/>
    <Item name="mobile" price={3500}/>
    <Cart/>
    </>
  )
}

export default App
