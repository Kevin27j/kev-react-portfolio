import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/HomePage';
import Projects from './components/Projects/Projects';
import ContactPage from './components/Contact/ContactPage';

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
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;