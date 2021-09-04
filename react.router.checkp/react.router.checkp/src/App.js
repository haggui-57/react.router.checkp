import './App.css';
import './Component/MoviesData'
import {useState} from 'react'
import { MoviesData } from './Component/MoviesData';
import AddMouvie from './Component/AddMovies'
import MoviesList from './Component/MoviesList';
import Navbarr from './Component/Navbar';

import AppRouter from './router/router'

function App() {


  return (
    
    <div className="App">
      <AppRouter />

    
  
    </div>
  );
}

export default App;
