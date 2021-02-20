import React from 'react';
import './App.css';
//Components
import Table from "./components/Table";
import YourButtons from './components/YourButtons';
import YourCards from "./components/YourCards";
import OpponentCard from "./components/OpponentCard";
function App() {
  return (
    <div className="App">
      <OpponentCard />
      <Table />
      <YourCards />
      <YourButtons />
    </div>
  );
}

export default App;
