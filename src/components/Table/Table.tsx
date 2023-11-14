// src/components/Table/Table.tsx
import React, { FC, useState } from "react";
import Modal from "../Modal/Modal";
import "./Table.css";

interface TableProps {
  data: Array<{ [key: string]: any }>;
  clickableColumns: string[];
  cellRenderer?: (column: string, value: any) => React.ReactNode;
  modalContentRenderer: (rowData: { [key: string]: any }) => React.ReactNode;
}

const Table: FC<TableProps> = ({ data, clickableColumns, cellRenderer, modalContentRenderer }) => {
  const [selectedRow, setSelectedRow] = useState<{ [key: string]: any } | null>(null);

  const handleClick = async (row: { [key: string]: any }, column: string) => {
    if (clickableColumns.includes(column)) {
      if (column === "name") {
        setSelectedRow(row);
      } else if (column === "position") {
        // Perform API call for the 'position' column
        try {
          const response = await fetch(`/test/api/position/${row.position}`);
          const data = await response.json();
          console.log("API Response:", data);
        } catch (error) {
          console.error("API Error:", error);
        }
      }
    } else {
      alert(`Row clicked! Row ID: ${row.id}`);
    }
  };

  const closeModal = () => {
    setSelectedRow(null);
  };

  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {columns.map((column) => (
                <td
                  key={column}
                  onClick={() => handleClick(row, column)}
                  className={`table-cell ${clickableColumns.includes(column) ? "clickable" : ""}`}
                >
                  {cellRenderer ? cellRenderer(column, row[column]) : row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRow && (
        <Modal onClose={closeModal}>
          <div className="modal-content">{modalContentRenderer(selectedRow)}</div>
        </Modal>
      )}
    </div>
  );
};

export default Table;
