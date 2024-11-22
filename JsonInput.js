import React, { useState } from "react";
import { processData } from "../api";

const JsonInput = ({ setResponseData, setError }) => {
  const [jsonInput, setJsonInput] = useState("");

  const handleSubmit = async () => {
    try {
      // Validate JSON input
      const parsedData = JSON.parse(jsonInput);
      if (!parsedData.data || !Array.isArray(parsedData.data)) {
        throw new Error("Invalid JSON format. Expected: { 'data': ['A', 'B', 'C'] }");
      }

      // Send data to backend
      const response = await processData(parsedData);
      setResponseData(response);
      setError(null); // Clear errors on success
    } catch (err) {
      setError(err.message || "Invalid JSON");
    }
  };

  return (
    <div>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter valid JSON (e.g., { "data": ["A", "B", "C"] })'
        rows="5"
        cols="50"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JsonInput;




