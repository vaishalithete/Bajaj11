import React from "react";

const ResponseRenderer = ({ data, filters }) => {
  if (!data) return null;

  const renderFilteredData = () => {
    let filteredData = {};

    if (filters.includes("alphabets")) filteredData.alphabets = data.alphabets || [];
    if (filters.includes("numbers")) filteredData.numbers = data.numbers || [];
    if (filters.includes("highest_lowercase"))
      filteredData.highest_lowercase = data.highest_lowercase || "";

    return filteredData;
  };

  const filteredData = renderFilteredData();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Filtered Response:</h3>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default ResponseRenderer;




