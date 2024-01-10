// App.js
import React, { useState, useEffect } from "react";
import jsonData from "../../data//todos.json";
import Pagination from "./pagination";
import "../css/style.css";

const App = () => {
  const [jsonArray, setJsonArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setJsonArray(jsonData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jsonArray.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = id => {
    const updatedArray = jsonArray.filter((item) => item.id !== id);
    setJsonArray(updatedArray);
  }

  return (
    <div>
      <div className="main-content-warpper">
        <ul>
          <h2 className="title">TODO LIST</h2>
          {currentItems.map((item, index) => (
            <li key={index}>
              <ul className="list-container">
                <li>UserId: {item.userId}</li>
                <li>ID: {item.id}</li>
                <li>Title: {item.title}</li>
                <li>Completed: {item.completed ? "Yes" : "No"}</li>
                <li>
                  {(
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  )}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={jsonArray.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;