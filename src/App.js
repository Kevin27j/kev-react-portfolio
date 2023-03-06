import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/HomePage';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;