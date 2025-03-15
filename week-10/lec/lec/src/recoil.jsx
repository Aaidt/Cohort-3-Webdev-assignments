import React, { useContext, useState } from "react";

const CountContext = createContext();

const CountContextProvider = ({ children }) => {       
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )

}


function App (){
    return (
        <div>
            <CountContextProvider>
                <Increase />
                <Decrease />
                <Count />
            </CountContextProvider>
        </div>
    )
}

function Increase(){
    const {count, setCount} = useContext();

    return <button onClick={setCount(count+1)}>Increase</button>
}


function Increase(){
    const {count, setCount} = useContext();

    return <button onClick={setCount(count-1)}>Decrease</button>
}

function Increase(){
    const {count, setCount} = useContext();
    return <p>The value is: {count}</p>
}

export default App;