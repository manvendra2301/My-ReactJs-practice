import React from "react";
import { createContext ,useState} from "react";

export const counterContextvar = createContext(null) ;

export const CounterProvider = (props) => {

  const [count, setCount] = useState(0);
  return (
    <counterContextvar.Provider value={{count, setCount}}>
      {props.children}
    </counterContextvar.Provider>
  )
}