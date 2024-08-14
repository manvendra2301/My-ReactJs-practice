import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyButton from './App.jsx'
import MyApp from './App.jsx'
import Practice from './practice.jsx'
import ListFunction from './RenderingList.jsx'
import ShoppingList from './RenderingList.jsx'
import Avatar from './props.jsx'
import Profile from './childrenProp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <Profile/>

  </StrictMode>,
)
