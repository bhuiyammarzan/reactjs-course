import React, { useState } from "react";

const BasicValidationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Please fill all fields!");
    } else {
      setError("");

      console.log("Form Submitted: ", { name, email });
      alert("Form Submitted Successfully!");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Basic Validation Form</h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicValidationForm;
