import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";

  /*const movies = [
    {
      id: 1,
      title: "Movie 1",
      openingText: "A long time ago...",
      releaseDate: "1977-05-25",
    },
    {
      id: 2,
      title: "Movie 2",
      openingText: "An even longer time ago...",
      releaseDate: "1999-05-19",
    },
  ];
*/
const App = () => {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    try {
    const response = await fetch("https://swapi.dev/api/films/");

    if(!response.ok){
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    //console.log(data);

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_data,
      };
    });


      setMovies(transformedMovies);
    }catch (error) {
      setError(error.message);
    }
  };

  let content;

  if (error) {
    content = <p>{error}</p>;
  } else {
    content = <MoviesList movies = {movies} />;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
