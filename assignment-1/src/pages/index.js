import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState();

  var movies = [
    {id: 1, title: 'Mad Max: Fury Road', director: 'George Miller', genre: 'Action', description: 'A dystopian movie with lots of cars.' },
    {id: 2, title: 'Blade Runner', director: 'Ridley Scott', genre: 'Cyberpunk', description: 'A movie about replicants and what it means to be human.' },
  ];
  return (
    <>
         <div className="home"> {/*className is here so i can call it in the css file, i dont know if it is best practice but its how we did last semester*/}
      <AppTitle /> 
      <div className="">
        <MovieList movies={movies} onSelectMovie={setSelectedMovie} /> {/*displays the movie list based on MovieList component and passes props */}
        {selectedMovie && <MovieDetails movie={selectedMovie} />} {/* setting the selected movie based on click and passing it to moviedetail to get the recommendation*/}
      </div>
    </div>
    </>
  );
} 

function AppTitle() {
  return (
    <header className="title">
      <h1>Check out your next favourite movies!</h1>
    </header>
  );
}

function MovieList({movies, onSelectMovie}) { //this component
  return (
    <div className="movie-list">
      <h2>Movie List</h2> 
      <ul>
        {movies.map(movie => (  // google showed me this way of manipulating arrays. with this i can display a list of all movies no matter the size of the array
          <li key={movie.id} onClick={() => onSelectMovie(movie)}> {/* here is an event handler to call my stated variable and update the currently selected movie */}
            {movie.id}. {movie.title} directed by {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MovieDetails({movie}) {
  const [reviews, setReviews] = useState([
    { id: 1, movieId: movie.id, comment: 'Amazing movie!'}, //using movie id here to make those arrays parallel
    { id: 2, movieId: movie.id, comment: 'Love the acting!'},
  ]);

  const addReview = (review) => {
    setReviews([...reviews, { ...review, id: reviews.length + 1, movieId: movie.id }]); //here i am adding the new review as the last item in the array and machting the id with the id of the movie
  };

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p>{movie.description}</p>
      <ReviewList reviews={reviews} />
      <ReviewForm onAddReview={addReview} />
    </div>
  );
}

function ReviewList({reviews}) {
  return (
    <div className="my-reviews">
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            {review.comment} - {review.rating} stars
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewForm({onAddReview}) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview({comment});
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Leave a Review</h3>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}
