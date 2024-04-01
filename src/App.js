import './App.css';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRouter from './AppRouter';

function App() {
  const supabase = createClient('https://lmeeybcsaqkvpfljrqqu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZWV5YmNzYXFrdnBmbGpycXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMDY5ODAsImV4cCI6MjAyNzU4Mjk4MH0.53bvlh1zL0r39eiztlrV0ctXED_OxdwPHqaGF6YlevI');
  
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
