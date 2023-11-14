// src/App.tsx
import React from "react";
import Table from "./components/Table/Table";

const App = () => {
  // Example data with more keys
  const data = [
    { id: 1, name: "John", age: 25, country: "USA", salary: 50000, position: "Developer", department: "Engineering" },
    { id: 2, name: "Jane", age: 30, country: "Canada", salary: 60000, position: "Designer", department: "Creative" },
    // Add more data with additional keys
  ];

  const clickableColumns = ["name", "position"];

  const renderModalContent = (rowData: { [key: string]: any }) => (
    <div>
      <h2>{rowData.name}'s Details</h2>
      <p>Age: {rowData.age}</p>
      <p>Country: {rowData.country}</p>
    </div>
  );

  return (
    <div>
      <h1>React Table with Modal</h1>
      <Table data={data} clickableColumns={clickableColumns} modalContentRenderer={renderModalContent} />
    </div>
  );
};

export default App;
