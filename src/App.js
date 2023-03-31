import { useState, useEffect } from 'react';

import { getMovie } from './services/omdbapi';

import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import Navbar from './components/Navbar';

import './App.css';


function App() {
  // store the data about a movie
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie('Clueless');
      console.log(data);
      setMovie(data)
    };
    fetchData();
  }, [])


  return (
    <div className="App">

      <Navbar />
    
      <Form movieSearch={getMovie} setMovie={setMovie}/>


     <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
