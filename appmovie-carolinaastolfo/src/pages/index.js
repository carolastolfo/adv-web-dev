import {useState} from 'react';

export default function Home() {

  const movies = [
    {id: 1, title: 'Mad Max: Fury Road', director: 'George Miller', genre: 'Action', rating: '❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥', description: 'A dystopian movie with lots of cars.' },
    {id: 2, title: 'Blade Runner', director: 'Ridley Scott', genre: 'Cyberpunk', rating: '🌃🌃🌃🌃🌃', description: 'A movie on replicants and what it means to be human.' },
    {id: 3, title: 'The Lord of the Rings', director: 'Peter Jackson', genre: 'Adventure', rating: '🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️', description: 'A movie about destroying a ring.' },
    {id: 4, title: 'Ghost in the Shell', director: 'Mamoru Oshii', genre: 'Cyberpunk', rating: '🤖🤖🤖🤖', description: 'A philosophical movie with cyborgs.' },
    {id: 5, title: 'Drive', director: 'Nicolas Winding Refn', genre: 'Action', rating: '🚗💨💨', description: 'A movie about a stunt driver who moonlights as a getaway driver.' },
    {id: 6, title: 'Dune', director: 'Denis Villeneuve', genre: 'Adventure', rating: '⌛⌛⌛⌛⌛', description: 'An epic movie that sets the ground for a messianic holy war.' },
  ]

  const [currentMovie, setCurrentMovie] = useState(movies[0]);

  const handleNextMovie = () => {
    const nextIndex = movies.indexOf(currentMovie) + 1; 
    setCurrentMovie(movies[nextIndex]);
  };
  
  return (
    <>
    <Header/>
      <MovieList movies={movies}/>
      <MoreOnMovie movie={currentMovie}/>
      <h2>{currentMovie.title}</h2>
      <button className="button-1" onClick={handleNextMovie}>Get more on the next movie!</button>   
      <SignUp/>
    </>
  );
}

function Header(){
  return(
    <div>
    <h1>Check out your next favourite movies!</h1>
  </div>
  )
}

function MovieList({movies}) { 
  return (
    <>
    <h3>Here are some amazing movies!</h3> 
    <div className="movie-list">
        <p>1. {movies[0].title} directed by {movies[0].director}</p>
        <p>2. {movies[1].title} directed by {movies[1].director}</p>
        <p>3. {movies[2].title} directed by {movies[2].director}</p>
        <p>4. {movies[3].title} directed by {movies[3].director}</p>
        <p>5. {movies[4].title} directed by {movies[4].director}</p>
        <p>6. {movies[5].title} directed by {movies[5].director}</p>
    </div>
    </>
  );
}

function MoreOnMovie({movie}) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p><b>Director:</b> {movie.director}</p>
      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>What is it about?</b> {movie.description}</p>
      <p><b>Rating:</b> {movie.rating}</p>
    </div>
  );
}

function SignUp(){
  const [fname, setFName] = useState("");
  const [lname, setlNAme] = useState("");
  const onFirstNameChange = (e)=>{ 
    setFName( e.target.value );
  }
  const onLastNameChange = (e) => {
    setlNAme(e.target.value);
  }
  return (
    <>
      <form>
        <h4>Hi {fname} {lname}! Don't forget to sign up to leave your rating!</h4>
        <label for="txt_fname">Name:</label><input id="txt_fname" onChange={onFirstNameChange}/>
        <label for="txt_lname">Last Name:</label><input id="txt_lname" onChange={onLastNameChange}/>  
        <input className="button-2" type="submit" value="Register"/>
      </form>
    </>
  );
}



