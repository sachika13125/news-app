import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
