import React from "react";
import { RandomUsers } from "./components/randomUser"

function App() {

  return (
    <div>
      <RandomUsers />
      <LoadUsers />
    </div>
  )
}

const LoadUsers = () => {
  return (
    <button>Load Users</button>
  )
}

export default App;