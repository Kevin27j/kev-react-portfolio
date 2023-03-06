import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/HomePage';
import Projects from './components/Projects/Projects';

function App() {
  const styles = {
    textAlign: "center"
  }

  return (
    <div className="App" style={styles}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;