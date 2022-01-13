import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Character from './components/character';

function App() {

  return (
    <div style={{ minHeight: '100vh', display:'flex', flexDirection:'column' }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
