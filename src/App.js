import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from'./Components/Home';
import NewsFeed from './Components/NeesFeed';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <NewsFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
