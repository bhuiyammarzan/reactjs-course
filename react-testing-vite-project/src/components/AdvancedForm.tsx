import React, { useState } from "react";

type FormData = {
  gender: string;
  country: string;
  agree: boolean;
};

const AdvancedForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    country: "Bangladesh",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  // Handles input (radio/checkbox) and select changes with proper typing
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Form with Checkbox, Radio & Select</h2>

      <label htmlFor="">
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleOnChange}
        />
        Male
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleOnChange}
        />
        Female
      </label>
      <br />
      <label htmlFor="">
        Country:
        <select
          name="country"
          value={formData.country}
          onChange={handleOnChange}
        >
          <option value="Bangladesh">Bangladesh</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label>
      <br />
      <label htmlFor="">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleOnChange}
        />
        I agree to terms and conditions
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;
