import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  useEffect(() => {
    fetch("http://localhost:9000/trends")
      .then((res) => res.text())
      .then((res) => console.log(res));
  });
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
