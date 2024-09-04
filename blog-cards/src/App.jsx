// src/App.jsx
import React from "react";
import BlogList from "./BlogList";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold py-8">Blog Cards</h1>
      <BlogList />
    </div>
  );
};

export default App;