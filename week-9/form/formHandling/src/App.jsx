import { useState } from 'react';
import Header from "./Components/Header";
import Form from "./Components/Form";
import './App.css';

function App() {
  return (
    <div style={{
      backgroundImage: "url('https://imgs.search.brave.com/DyW5i6aYHQyIjGXPef1erz6cKIcO9Xc8JCFN0GTGPLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/dW1iYmVsbHMtZmxv/b3ItZ3ltLWFpLWdl/bmVyYXRpdmVfMTIz/ODI3LTIzNzQzLmpw/Zz9zZW10PWFpc19o/eWJyaWQ')",
      backgroundSize: "cover",
      height: "100vh"
    }}>
      <Header message={"Form"} />

      <Form />
    </div>
  )
}

export default App
