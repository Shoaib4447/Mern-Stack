import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';  
import MovieCard from './MovieCard';
// Api Key = 366c04fb 

// OMDB API URL
const API_URL = 'http://www.omdbapi.com?apikey=366c04fb';

// Movie Object
// const Movie1 = {
//     "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
//     "Year": "2007",
//     "imdbID": "tt1132238",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
// }

// App Component
const App = ()=> {

  // States
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Terminator');
  },[]);

  console.log(movies);
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon} 
        alt="Search"
        onClick={()=>searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
          ))}
        </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

      {/* <div className="container">
        <MovieCard movie1={movies[0]} />
      </div> */}
    </div>
  )
}

export default App;



// import { useState,useEffect } from "react";

// const CounterApp = ()=>{
//   const [counter, setCounter] = useState(0);
//   useEffect(()=>{
//     // alert('Page Reload');
//     setCounter(0);
//   },[])
//   return(
//     <>
//       <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
//     </>
//   )
// }



// const Person = (props)=>{
//   return(
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.last_Name}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

// const App = ()=> {
//   return (
//     <div className='text-center'>
//       <Person 
//         name={'John'}  
//         last_Name={'Doe'} 
//         age={14}
//       />
//       <Person 
//         name={'Ibrahim'}  
//         last_Name={'Ahmed'} 
//         age={15}
//       />
//       <CounterApp/>
//     </div>
//   );
// }
