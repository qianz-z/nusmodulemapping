import React, { useState } from 'react';
import './ProfOnlyPage.css'
import axios from "axios"

const initialValues = {
  name: "",
  code: "",
  mc: "",
  prereq: [],
  preclusions: [],
  major:  [],
  details: "",
  };

export default function ProfOnlyPage() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newModule = {
      name: values.name,
      code: values.code,
      mc: values.mc,
      prereq: values.prereq.split(","),
      preclusions: values.preclusions.split(","),
      major: values.major.split(","),
      details: values.details
    };;
    axios.post('http://localhost:3001/profonly', newModule)
    console.log(values)
    setValues({
      name: "",
      code: "",
      mc: "",
      prereq: "",
      preclusions: "",
      major:"",
      details: "",
    })
    alert("Added to database!")
  };

  return (
    <div>
      <div className='text'>
        <p>Hello Professors! This page is for you to add in additional modules into the database so that the students can take!</p>
        <p>Do take note that if there are more that one prerequisites or preclusions, you can separate them by adding commas!</p>
        <p><span>Example, </span>
          <span className='example'>Module Name: Discrete Structure </span>
          <span className='example'>Module Code: CS1231 </span>
          <span className='example'>Module Credits: 4</span>
          <span className='example'>Module Prerequisites: </span>
          <span className='example'>Module Preclusions: MA1100,CS1231S</span>
          <span className='example'>Major: Computer Science,Computer Engineer</span>
          <span className='example'>Module Details: This module introduces mathematical tools required in the study of computer science.</span>
        </p>
      </div>
    
        <form  onSubmit = {handleSubmit} className = "form">
            <label>Module Name: </label>
            <input
            value={values.name}
            onChange={handleInputChange}
            label="Module Name"
            name="name"
            />
            <br/>

            <label>Module Code: </label>
            <input
            value={values.code}
            onChange={handleInputChange}
            label=">Module Code"
            name="code"
            />
            <br/>

            <label>Module Credits: </label>
            <input
            value={values.mc}
            onChange={handleInputChange}
            label="Module Credits"
            name="mc"
            />
            <br/>

            <label>Module Prerequisites: </label>
            <input
            value={values.prereq}
            onChange={handleInputChange}
            label="Module Prerequisites"
            name="prereq"
            />
            <br/>

            <label>Module Preclusions: </label>
            <input
            value={values.preclusions}
            onChange={handleInputChange}
            label="Module Preclusions"
            name="preclusions"
            />
            <br/>

            <label>Major: </label>
            <input
            value={values.major}
            onChange={handleInputChange}
            label="Major"
            name="major"
            />
            <br/>

            <label>Module Details: </label>
            <textarea
            value={values.details}
            onChange={handleInputChange}
            label="Module Details"
            name="details"
            />
            <br/>

          <button type = "submit" > Submit </button>
        </form>
      </div>
  );
}