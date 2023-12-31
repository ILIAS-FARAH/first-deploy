import React from 'react'
import apikey from './API/KeyApi'
import { useEffect,useState } from 'react';
import Movies from './components/Movies'
import Genres from './components/Genres';

export default function App() {
  const [movie,setMovies] = useState([])
  const [genres,setGenres]=useState({
    id:'',
    name: "popular"
  }) 
  async function fetchMovies(genre) {
    const url1 = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apikey}`;
    try {
      let response;
      if (genre) {
        const url2 = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&language=en-US&api_key=${apikey}`;
        response = await fetch(url2);
      } else {
        response = await fetch(url1);
      }
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results)
    }catch(error){console.log(error.message)}}



    useEffect(()=>{
      fetchMovies()
    },[])
    useEffect(()=>{
      fetchMovies(genres)
    },[genres])
    const HandleGenre=(gen)=>{
      // console.log(gen)
      setGenres(gen)
    }

    
  return (
    <div className='App'>
      <div className='row'>
        <div className='container-fluid col p-4'>
          <Genres onGenre={HandleGenre} selectedGenre={genres}/>
        </div>
        <div className='container-fluid col-9 p-4'>
          <Movies movies={movie} genrename={genres}/>
        </div>
      </div>
    </div>
  )
}
