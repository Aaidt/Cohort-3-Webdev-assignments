import React, { useState }from "react";
import "../myApp.css"; 
import FormData from "./FormData"

const Form = () => {

    const [Form, setForm] = useState([]);

    const [Values, setValues] = useState({
        Name: "",
        Age: "",
        Gender: ""
    })

    const { Name, Age, Gender } = Values;
    
    const [Visible, setVisible] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...Values,
            [name]: value
        })
    }

    const handleSubmit = () => {
        setVisible(true)
        console.log(`
            Name: ${Name}
            Age: ${Age}
            Gender: ${Gender}
            `);

        const data = { Name, Age, Gender }
        setForm((Values) => [...Values, data])
    }

    const handleGoBack = () => {
        setVisible(!Visible)
    }

    if(!Visible){
        return (
            <div>
                <div className="form">
                    <label htmlFor="Name">Name:</label>
                    <input type="text"
                        placeholder="Enter your name:"
                        name="Name"
                        value={Name}
                        onChange={handleChange}/>

                    <label htmlFor="Age">Age:</label>
                    <input type="text"
                        placeholder="Enter your age:"
                        name="Age"
                        value={Age} 
                        onChange={handleChange}/>
                    
                    <label htmlFor="Gender">Gender:</label>
                    <input type="text"
                        placeholder="Enter your Gender:"
                        name="Gender"
                        value={Gender} 
                        onChange={handleChange}/>
                    
                    <button onClick={handleSubmit}>SUBMIT</button>
                </div>
                
            </div>
    )}

    return <FormData handleGoBack={handleGoBack} data={Form}/>

}

export default Form;