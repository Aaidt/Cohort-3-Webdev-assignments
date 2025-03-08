import React from 'react'
import { useState } from "react";
import "../myApp.css";

const PetAdoptionForm = () => {

  const [formData, setFormData] = useState([]);
  const[values, setValues] = useState({
    petName:"",
    petType:"Dog",
    breed:"",
    adopterName:"",
    email:"",
    phone:""
  })

  const { petName, petType, breed, adopterName, email, phone } = values;

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]:value
    })
  } 

  if(!show){
    return (
      <>
        <div className="form">
          
          <div>
            <label htmlFor="petName">Pet Name:</label>
            <input 
              type="text" 
              placeholder="Enter name of the pet:"
              name="petName"
              value={petName}
              onChange={handleChange}>
            </input>
          </div>
  
          <div>
            <label htmlFor="petType">Pet Type:</label>
          </div>
  
          <div>
            <label htmlFor="breed">Breed:</label>
            <input 
              type="text" 
              placeholder="Enter breed:"
              value={breed}
              name="breed"
              onChange={handleChange}>
            </input>
          </div>
  
          <div>
            <label htmlFor="adopterName">Your name:</label>
            <input 
              type="text" 
              placeholder="Enter name of the adopter:"
              value={adopterName}
              name="adopterName"
              onChange={handleChange}>
            </input>
          </div>
  
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              placeholder="Enter email:"
              value={email}
              name="email"
              onChange={handleChange}>
            </input>
          </div>
  
          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              type="text" 
              placeholder="Enter phone number:"
              value={phone}
              name="phone"
              onChange={handleChange}>
            </input>
          </div>

        </div>
      </>
    )
  }
  
}

export default PetAdoptionForm