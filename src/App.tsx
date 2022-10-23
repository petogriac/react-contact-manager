import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Routes from './routes';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Header></Header>
      <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
