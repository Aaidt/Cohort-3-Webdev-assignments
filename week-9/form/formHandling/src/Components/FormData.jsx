import React, { useState } from "react";

import Form from "./Form";

const FormData = ({ handleGoBack, data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((data, index) => 
                    <tr key={index}>
                        <td>{data.Name}</td>
                        <td>{data.Age}</td>
                        <td>{data.Gender}</td>
                    </tr>)}
                </tbody>
            </table>

            <button onClick={handleGoBack}>Go back</button>
        </div>
    )
}


export default FormData