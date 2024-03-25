import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="dropdown">
      <div className="sorted-by">Sorted by</div>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
