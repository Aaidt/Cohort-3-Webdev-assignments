import React from 'react'
import { useState } from "react";
import "../myApp.css";

const PetAdoptionForm = () => {

  return (
    <>
      <div className="form">
        
        <div>
          <label>
            Pet Name:
          </label>
          <input type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <label>
            Pet Type:
          </label>
          <div>
            
          </div>
        </div>

        <div>
          <label>
            Breed:
          </label>
          <input type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <label>
            Your name:
          </label>
          <input type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <label>
            Email:
          </label>
          <input type="text" placeholder="Enter name of the pet:"></input>
        </div>

        <div>
          <label>
            Phone:
          </label>
          <input type="text" placeholder="Enter name of the pet:"></input>
        </div>
      </div>
    </>
  )
}

export default PetAdoptionForm