import React, { useRef } from "react";

const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name: ", nameRef.current?.value ?? "");
    console.log("Email: ", emailRef.current?.value ?? "");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <input type="text" ref={nameRef} placeholder="Name" />
      <br />
      <input type="email" ref={emailRef} placeholder="Email" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
