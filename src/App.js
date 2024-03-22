import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from'./Components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
