import React from "react";
import useForm from "../hooks/useForm";

type LoginValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: LoginValues) => {
    console.log("Form submitted: ", values);
  };

  const { values, handleChange, handleSubmit, resetForm } =
    useForm<LoginValues>(initialValues, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      <br />
      <button onClick={() => resetForm()}>Reset</button>
    </form>
  );
};

export default LoginForm;
