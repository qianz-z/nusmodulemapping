import React, { useState } from 'react';
import './ProfOnlyPage.css'

const initialValues = {
    module_name: "",
    module_code: "",
    module_desc: "",
    module_prereq: "",
    module_preclu: "",
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
    console.log(values)
    // this.setState({ msg: 'submitted' })
  };

  return (
        <form  onSubmit = {handleSubmit} className = "form">
            <label>Module Name: </label>
            <input
            value={values.module_name}
            onChange={handleInputChange}
            label="Module Name"
            name="module_name"
            />
            <br/>

            <label>Module Code: </label>
            <input
            value={values.module_code}
            onChange={handleInputChange}
            label=">Module Code"
            name="module_code"
            />
            <br/>

            <label>Module Description: </label>
            <textarea
            value={values.module_desc}
            onChange={handleInputChange}
            label="Module Description"
            name="module_desc"
            />
            <br/>

            <label>Module Prerequisites: </label>
            <input
            value={values.module_prereq}
            onChange={handleInputChange}
            label="Module Prerequisites"
            name="module_prereq"
            />
            <br/>

            <label>Module Preclusions: </label>
            <input
            value={values.module_preclu}
            onChange={handleInputChange}
            label="Module Preclusions"
            name="module_preclu"
            />
            <br/>

          <button type = "submit" > Submit </button>
        </form>
  );
}


// export default class ProfOnlyPage extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         module_name: '',
//         module_code: '',
//         module_desc: '',
//         module_prereq: '',
//         module_preclu: '',
//     };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({
//         module_name: event.target.module_name,
//         module_code: event.target.module_code,
//         module_desc: event.target.module_desc,
//         module_prereq: event.target.module_prereq,
//         module_preclu: event.target.module_preclu,
//     });
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.module_name + + this.state.module_code +
//       + this.state.module_desc +
//       + this.state.module_prereq + this.state.module_preclu );
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form className = "form" onSubmit={this.handleSubmit}>
//             <label> Module Name:
//                 <input type="text" value={this.state.module_name} onChange={this.handleChange} />
//             </label>
//                 <br/>

//             <label> Module Code:
//                 <input type="text" value={this.state.module_code} onChange={this.handleChange} />
//             </label>
//             <br/>

//             <label> Description:
//                 <textarea value={this.state.module_desc} onChange={this.handleChange} />
//             </label>
//             <br/>

//             <label> Prerequisites:
//                 <input type="text" value={this.state.module_prereq} onChange={this.handleChange} /> 
//             </label>
//                 <br/>

//             <label> Preclusions:
//                 <input type="text" value={this.state.module_preclu} onChange={this.handleChange} />
//             </label>
//             <br/>

//             <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }