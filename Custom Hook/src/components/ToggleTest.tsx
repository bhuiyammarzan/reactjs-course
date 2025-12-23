import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleTest: React.FC = () => {
  const [isOpen, toggleOpen] = useToggle();
  const [isTest, toggleTest] = useToggle();
  return (
    <>
      <div>
        <button onClick={toggleOpen}>Toggle</button>
        {isOpen && <p>Hello, this is visible</p>}
      </div>
      <div>
        <button onClick={toggleTest}>Test</button>
        {isTest && <p>Hello, this is test</p>}
      </div>
    </>
  );
};

export default ToggleTest;
