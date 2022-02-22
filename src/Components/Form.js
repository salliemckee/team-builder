import React from "react";

const Form = (props) => {
  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.change(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          placeholder="Enter Your name here."
          value={props.values.name}
          name="name"
          onChange={onChange}
        />
      </label>
      <label>
        Email
        <input
          placeholder="Enter your email here."
          value={props.values.email}
          name="email"
          onChange={onChange}
        />
      </label>
      <label>
        Role
        <input
          placeholder="Enter your role here."
          value={props.values.role}
          name="role"
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Create your team!" />
    </form>
  );
};

export default Form;
