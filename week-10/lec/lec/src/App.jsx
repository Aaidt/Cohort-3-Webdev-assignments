import './App.css'
import React, { useState, useEffect, createContext, useContext } from "react"
import { usePostTitle, useFetch } from "./hooks/useFetch";

// import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import { useRef } from "react"

function App(){
  const [currentPost, setCurrentPost] = useState(1)

  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  return <div>
    <button onClick={() => setCurrentPost(1)}>1</button>
    <button onClick={() => setCurrentPost(2)}>2</button>
    <button onClick={() => setCurrentPost(3)}>3</button>
    {JSON.stringify(finalData)}
  </div>


  // const postTitle = usePostTitle();

  // return <div>
  //   {postTitle}
  // </div>
}

















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
