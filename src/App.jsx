import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; //keep as CSS stylesheet so global CSS styling
import CharacterList from './components/CharacterList';

function App(){
  return (
    <div className="app-container">
      <CharacterList />

    </div>
  )
}


export default App

