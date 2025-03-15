import './App.css'
import React, { useState, useEffect, useRef, createContext, useContext } from "react"
import { usePostTitle, useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

// import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import { useRef } from "react"

// function useDebounce(originalFn) {
//   const currentClock = useRef();

//   const fn = () => {
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(originalFn, 200);
//   }

//   return fn
// }

const useDebounce = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(value)
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay])

  return debouncedVal
}

function App() {

  // const [state, setState] = useState(0);
  // const prev = usePrev(state);

  const [inputVal, setInputVal] = useState("");
  const debouncedVal = useDebounce(inputVal, 200);

  // function sendDataToBackend(){
  //   fetch("api.amazon.com/search/");
  // }

  // const debouncedFn = useDebounce(sendDataToBackend)

  function change(e){
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("expensive operation happened");
  }, [debouncedVal])

  return (
    <>
      <input type="text" onChange={change}></input>
      {/* <p>The current value is: {state}</p>
      <button onClick={() => setState(state + 1)}>Click Me</button>
      <p>The previous value is: {prev}</p> */}
    </>
  )




  // const [currentPost, setCurrentPost] = useState(1)

  // const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost, 10);

  // if (loading) {
  //   return <div>
  //     Loading...
  //   </div>
  // }

  // return <div>
  //   <button onClick={() => setCurrentPost(1)}>1</button>
  //   <button onClick={() => setCurrentPost(2)}>2</button>
  //   <button onClick={() => setCurrentPost(3)}>3</button>
  //   {JSON.stringify(finalData)}
  // </div>


  // const postTitle = usePostTitle();

  // return <div>
  //   {postTitle}
  // </div>
}



/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */




//   return <div>
//     <BrowserRouter>

//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//           <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//           <Route path="/" element={<Landing />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// function Layout() {
//   return <div>
//     <Header />
//     <div>
//       <Outlet />
//     </div>

//     Footer
//   </div>
// }

// function Header(){
//   return <div>
//     <Link to="/">Allen</Link>
//     | 
//     <Link to="/neet/online-coaching-class-11">Class 11</Link> 
//     | 
//     <Link to="/neet/online-coaching-class-12">Class 12</Link>
//   </div>
// }


// function ErrorPage(){
//   return <div>
//     Page not found
//   </div>
// }


// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   const InputRef = useRef();
//   function Focus() {
//     InputRef.current.focus()
//   }
//   return <div>
//       NEET programs for Class 11th
//       <input ref={InputRef}></input>
//       <button onClick={Focus}>Focus</button>
//   </div>
// }

// function Class12Program() {
//   const navigate = useNavigate();
//   function redirectUser(){
//     navigate("/");
//   }
//   return <div>
//       NEET programs for Class 12th
//       <button onClick={redirectUser}>Go Back</button>
//   </div>

// const BulbContext = createContext();

// function BulbProvider({ children }){

//   const [BulbOn, setBulbOn] = useState(true);

//   return <BulbContext.Provider value={{
//     BulbOn: BulbOn,
//     setBulbOn: setBulbOn
//   }}>

//     {children}

//   </BulbContext.Provider>
// }


// function App() {

//   return <div>
//     <BulbProvider>
//       <LightBulb />
//     </BulbProvider>
//   </div>
// }

// function LightBulb(){

//   return <div>
//     <BulbState />
//     <ToggleBulbState />
//   </div>
// }


// function BulbState(){
//   const { BulbOn } = useContext(BulbContext)
//   return <div>
//     {BulbOn ? "ON" : "OFF"} 
//   </div>
// }

// function ToggleBulbState(){
//   const { setBulbOn } = useContext(BulbContext)
//   function toggle(){
//     setBulbOn(currentState => !currentState); 
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>
// }

export default App
