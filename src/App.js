import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState(initialFormValues);

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues(initialFormValues);
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {members.map((member, index) => {
        return (
          <div key={index}>
            {member.name}, {member.email}, {member.role}
          </div>
        );
      })}
    </div>
  );
}

export default App;
