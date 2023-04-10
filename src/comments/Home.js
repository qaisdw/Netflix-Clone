import {useState,useEffect} from 'react';
import MovieListFun from "./ModalMovie";

export default function HomeFun(){
    const [movies, setMovies] = useState([]);

    async function gitMovieData() {
        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        const jsonData = await response.json();
        setMovies(jsonData);
        console.log(movies);
      }

    // Similar to componentDidMount and componentDidUpdate:
      useEffect(() => { gitMovieData()});
      

    return (
        <>
        <MovieListFun moviesData={movies}/>
        </>
        )
}