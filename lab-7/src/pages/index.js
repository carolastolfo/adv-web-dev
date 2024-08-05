import { useState } from "react";

export default function Home() {   // i used the same movie array i had used before to expand on the movie website idea

  const movies = [
    { id: 1, title: 'Mad Max: Fury Road', 
      director: 'George Miller', 
      genre: 'Action', 
      rating: '❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥', 
      description: 'A dystopian movie with lots of cars.' },

    { id: 2, title: 'Blade Runner', 
      director: 'Ridley Scott', 
      genre: 'Cyberpunk', 
      rating: '🌃🌃🌃🌃🌃', 
      description: 'A movie on replicants and what it means to be human.' },

    { id: 3, title: 'The Lord of the Rings', 
      director: 'Peter Jackson', 
      genre: 'Adventure', 
      rating: '🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️🧙‍♂️', 
      description: 'A movie about destroying a ring.' },
  ];

  const [rating, setRating] = useState("");

  const [currentMovie, setCurrentMovie] = useState(movies[0]);

  const [comment, setComment] = useState("");

  const onAddRating = (e) => {
    setRating(e.target.value);
  };

  const onAddComment = (e) => {
    setComment(e.target.value);
  };

  const onSelectMovie = (movie) => {
    setCurrentMovie(movie);
    setRating("");       //here i'm resetting the rating and comment when a new movie is selected 
    setComment("");     
  };
 //i planned to create a new array to store comments and ratings using map and key to sort with movie.id, 
 //but i could not figure out all the issues in time

  return (
    <>
      <h1>Check out your next favourite movies!</h1>
      <MovieList moviesList={movies} movieSelector={onSelectMovie} />
      <MovieDetails
        selectedMovie={currentMovie}
        userComment={comment}
        commentBtn={onAddComment}
        addRating={onAddRating}
        userRating={rating} />
    </>
  );
}

function MovieList({ moviesList, movieSelector }) { //just using the word props started to get confusing, so I used the variable assigned name
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {moviesList.map((movie) => (
          <li key={movie.id} onClick={() => movieSelector(movie)}>
            {movie.id}. {movie.title} directed by {movie.director}.
          </li>
        ))}
      </ul>
    </div>
  );
}

function MovieDetails({ selectedMovie, userComment, commentBtn, addRating, userRating }) {
  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <p><strong>Director:</strong> {selectedMovie.director}</p>
      <p><strong>Genre:</strong> {selectedMovie.genre}</p>
      <p><strong>Rating:</strong> {selectedMovie.rating}</p>
      <p>{selectedMovie.description}</p>
      <UserInput newRating={userRating} newComment={userComment} />
      <Comment commentBtn={commentBtn} userComment={userComment} />
      <Rating addRating={addRating} userRating={userRating} />
    </div>
  );
}

function Rating({ addRating, userRating }) {
  return (
    <div>
      <h3>Add your own rating!</h3>
      <label>Your rating here</label>
      <input type="text" value={userRating} onChange={addRating} />
      <button onClick={() => alert(`Your rate is: ${userRating}!`)}>Rate!</button> {/* alert to check if i was updating the state correctly*/}
    </div>
  );
}

function Comment({ commentBtn, userComment }) {
  return (
    <div>
      <h3>Leave your comment here!</h3>
      <input type="text" value={userComment} onChange={commentBtn} />
    </div>
  );
}

function UserInput({ newRating, newComment }) {
  return (
    <>
      <p>Your Rating: {newRating}</p>
      <p>Your Comment: {newComment}</p>
    </>
  );
}