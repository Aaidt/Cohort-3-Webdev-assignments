import React from 'react'
import { useState } from "react";
import "../myApp.css";

const PetAdoptionForm = () => {
// const DropDown = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState("");

//   const toggleOpen = () => {
//     setOpen(!open);
//   }

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <div style={{display: "flex"}}>
//       <input type="text" value={value} onChange={handleChange}></input>
//       <span><button style={{borderRadius: "10px", margin: 10, padding: 7}} onClick={toggleOpen}>{open ? "isOpen" : "not Open"}</button></span>
//       {open && (
//         <ul>
//           <li onClick={() => setValue("dog")}>DOG</li>
//           <li onClick={() => setValue("cat")}>CAT</li>
//         </ul>
//       )}
//     </div>
// )
// }

  return (
    <>
      <div className="form">
        
        <div>
          <b>
            Pet Name:
          </b>
          <input style={{margin: 20, width: 900}} type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <b>
            Pet Type:
          </b>
          <div>
            <DropDown />
          </div>
        </div>

        <div>
          <b>
            Breed:
          </b>
          <input style={{margin: 20, width: 900}} type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <b>
            Your name:
          </b>
          <input style={{margin: 20, width: 900}} type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <b>
            Email:
          </b>
          <input style={{margin: 20, width: 900}} type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <b>
            Phone:
          </b>
          <input style={{margin: 20, width: 900}} type="text" placeholder="Enter name of the pet:"></input>
        </div>
      </div>
    </>
  )
}

export default PetAdoptionForm