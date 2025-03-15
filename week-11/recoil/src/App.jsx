import React, { createContext, useContext, useState } from "react";
import { RecoilRoot, atom } from "recoil";


const CountContext = createContext();

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )

}

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Count />
    </RecoilRoot>
  )
}

function Increase() {
  const { count, setCount } = useContext(CountContext);

  return <button onClick={() => setCount(count + 1)}>Increase</button>
}


function Decrease() {
  const { count, setCount } = useContext(CountContext);

  return <button onClick={() => setCount(count - 1)}>Decrease</button>
}

function Count() {
  const { count } = useContext(CountContext);
  return <p>The count is: {count}</p>
}


function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}


export default App;