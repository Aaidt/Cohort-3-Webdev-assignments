import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
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
        </table>
      </>
    )
  }
}

export default AdopterData