import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RecentTrends from "./components/RecentTrends"
function App() {
  // useEffect(() => {
  //   fetch("http://localhost:9000/trends")
  //     .then((res) => res.text())
  //     .then((res) => console.log(res));
  // });
  return (
    <div className="App">
      <Header />
      <RecentTrends />
    </div>
  );
}

export default App;
