import React from 'react'
import "../myApp.css";
import Dropdown from 'react-bootstrap/Dropdown';

const PetAdoptionForm = () => {
  const tableOutline = {
    backgroundColor: "rgba(207, 142, 44, 0.5)",
    marginRight: "200px", 
    marginLeft: "200px",
    height: "100vh" 
  }

  return (
    <div style={tableOutline}>
      
      <div>
        <b>
          Pet Name:
        </b>
        <input style={{margin: 20}} type="text" placeholder="Enter name of the pet:"></input>
      </div>

      <div>
        <b>
          Pet Type:
        </b>
        <Dropdown>
          <Dropdown.toggle variant="success" id="dropdown-basic">
            Pet Types
          </Dropdown.toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action1">Dog</Dropdown.Item>
            <Dropdown.Item href="#action2">Cat</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <b>
          Pet Name:
        </b>
        <input style={{margin: 20}} type="text" placeholder="Enter name of the pet:"></input>
      </div>

      <div>
        <b>
          Pet Name:
        </b>
        <input style={{margin: 20}} type="text" placeholder="Enter name of the pet:"></input>
      </div>

      <div>
        <b>
          Pet Name:
        </b>
        <input style={{margin: 20}} type="text" placeholder="Enter name of the pet:"></input>
      </div>
    </div>
  )
}

export default PetAdoptionForm