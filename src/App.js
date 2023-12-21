import { useState } from "react";
import "./App.css";
import { moviesData } from "./Data";
import Navigation from "./components/Navigation/Navigation";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import FilterMovie from "./components/FilterMovie/FilterMovie";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [newRate, setNewRate] = useState("");

  /*i added the newrate in the filtermovie so the stars will be yellow 
  for the first click and send it props to filtermovie and value*/

  return (
    <div className="App">
      <Navigation setInputSearch={setInputSearch}  inputSearch={inputSearch} />
      <AddMovie add={add} />
      <FilterMovie
        //setInputSearch={setInputSearch} 
        newRate={newRate}
        setNewRate={setNewRate}
       //inputSearch={inputSearch}
        
      />
      <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} />
    </div>
  );
}

export default App;
