import React from 'react'
import { useState } from "react";
import "../myApp.css";

const PetAdoptionForm = () => {

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