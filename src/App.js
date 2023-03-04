import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      </Routes>
    </div>
  );
}

export default App;