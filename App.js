// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import JsonInput from "./components/JsonInput";
import DropdownOptions from "./components/DropdownOptions";
import ResponseRenderer from "./components/ResponseRenderer";

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    document.title = "Your Roll Number";
  }, []);

  return (
    <div className="App">
      <h1>Frontend Application</h1>
      <JsonInput setResponseData={setResponseData} setError={setError} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {responseData && <DropdownOptions setFilters={setFilters} />}
      {responseData && <ResponseRenderer data={responseData} filters={filters} />}
    </div>
  );
};

export default App;




