import React, { useState } from 'react';
import './ProfOnlyPage.css'
import axios from "axios"

const initialValues = {
  name: "",
  code: "",
  mc: "",
  prereq: "",
  preclusions: "",
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
      prereq: values.prereq,
      preclusions: values.preclusions,
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
      details: "",
    })
    alert("Added to database!")
  };

  return (
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
  );
}