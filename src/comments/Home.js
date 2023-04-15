import {useState,useEffect} from 'react';
import MovieListFun from "./MovieList";

export default function HomeFun(){
    const [movies, setMovies] = useState([]);

    async function gitMovieData() {
      try {
          const url = process.env.REACT_APP_SERVER_URL;
          console.log(movies);
          const response = await fetch(`${url}/trending`);
          const jsonData = await response.json();
          setMovies(jsonData);
          console.log(movies);
      } catch (error) {
          console.error(error);
      }
  }

  function commentHandler(newMovie,id){
    movies.map(m=>{
        if(m.id===id){
            movies=newMovie.comment;
            return movies
        }
    })
  }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {gitMovieData();}, []);
      

    return (
        <>
        <MovieListFun moviesData={movies}  commentHandler={commentHandler}/>
        </>
        )
}