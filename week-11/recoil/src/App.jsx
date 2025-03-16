// import React, { createContext, useContext, useState, useEffect, memo } from "react";
// import { useSetRecoilState, useRecoilValue, RecoilRoot, atom } from "recoil";
// import { counterAtom, evenSelector } from "./store/atom/counter.js"

// // const CountContext = createContext();

// // const CountContextProvider = ({ children }) => {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <CountContext.Provider value={{ count, setCount }}>
// //       {children}
// //     </CountContext.Provider>
// //   )

// // }

// // function Counter() {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     setInterval(() => {
// //       setCount(count => count+1)
// //     }, 3000)
// //   }, [])
// //   return (
// //     <div>
// //       <Count />
// //       <Increase />
// //       <Decrease />
// //     </div>
// //   )
// // }

// // const Count = memo(function () {
// //   // const { count } = useContext(CountContext);
// //   // const count = useRecoilValue(counterAtom)
// //   // return <div>{count}</div>
// //   return <div>
// //     1
// //   </div>
// // })


// // const Increase = memo(function () {
// //   // const { count, setCount } = useContext(CountContext);
// //   // const setCount = useSetRecoilState(counterAtom);

// //   function Increase() {
// //     // setCount(c => c + 1)
// //   }

// //   return <button onClick={Increase}>Increase</button>
// // })


// // const Decrease = memo(function () {
// //   // const { count, setCount } = useContext(CountContext);
// //   // const setCount = useSetRecoilState(counterAtom);

// //   function Decrease() {
// //     // setCount(c => c - 1);
// //   }
// //   return <button onClick={Decrease} >Decrease</button>
// // })


// function App() {
//   // return (
//   //   <div>
//   //     <RecoilRoot>
//   //       <Counter />
//   //     </RecoilRoot>
//   //   </div>
//   // )

//   return <div>
//     <RecoilRoot>
//       <Buttons />
//       <Counter />
//       <IsEven />
//     </RecoilRoot>

//   </div>
// }


// function Buttons() {
//   const setCount = useSetRecoilState(counterAtom)

//   function increase() {
//     setCount(c => c + 2);
//   }

//   function decrease() {
//     setCount(c => c - 1);
//   }


//   return <div>
//     <button onClick={increase}>Increase</button>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }

// function Counter() {
//   const count = useRecoilValue(counterAtom);
//   return <div>
//     {count}
//   </div>
// }

// function IsEven() {
//   const even = useRecoilValue(evenSelector);
//   return <div>
//     {even ? "Even" : "Odd"}
//   </div>
// }

// export default App;

import React, { createContext, useContext, useState, useEffect, memo } from "react";
import { useSetRecoilState, useRecoilValue, RecoilRoot, atom, useRecoilState } from "recoil";
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom, totalnotificationSelector } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
  const totalNotficationCount = useRecoilValue(totalnotificationSelector);
  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ({totalNotficationCount})</button>
    </>
  )
}

export default App;