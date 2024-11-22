import React from "react";
import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highest_lowercase", label: "Highest Lowercase Alphabet" },
];

const DropdownOptions = ({ setFilters }) => {
  const handleChange = (selected) => {
    setFilters(selected.map((option) => option.value));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Filter Options:</h3>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        placeholder="Select filters..."
      />
    </div>
  );
};

export default DropdownOptions;



