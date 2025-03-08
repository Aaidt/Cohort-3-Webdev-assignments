import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
  const { formData, handleGoBack } = this.props
    return (
      <>  
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.petName}</td>
                <td>{data.petType}</td>
                <td>{data.breed}</td>
                <td>{data.adopterName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button style={{
          padding: "10px 20px", 
          boxSizing: "border-box",
          width: "auto", 
          display: "inline-block",
          borderRadius: "10px"
          }} onClick={handleGoBack}>
          Go Back
        </button>
      </>
    )
  }
}

export default AdopterData