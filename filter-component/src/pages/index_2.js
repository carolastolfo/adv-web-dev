import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Filters() {
  const [sorted, setSorted] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  {/* authentication key is here */}
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmYyNzIzN2Q4ZTllODE2MDkxMDAwYzVlY2ZmMWI3MiIsIm5iZiI6MTcyMjM4Njc3Mi41ODg4NCwic3ViIjoiNjZhMDFiNTNjOTQ2YmRmOTk0MGE2YzUxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6r442_LKzCRCTfepAK3yk95-7EedvIiPGIj1JMYblng'
    }
  };

  {/* async fetch to avoid infinite api calls */}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreQuery = selectedGenre ? `&with_genres=${selectedGenre}` : '';
        const yearQuery = year ? `&primary_release_year=${year}` : '';
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortBy}.${sortOrder}${genreQuery}${yearQuery}`,
          options
        );
        const data = await response.json();
        setSorted(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [selectedGenre, year, sortOrder, sortBy]);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSort = (sortType) => {
    if (sortBy === sortType) {
      toggleSortOrder();
    } else {
      setSortBy(sortType);
      setSortOrder("desc");
    }
  };
  
  {/*genre (dropdown | year (input field) | popularity | title*/}
  return (
    <div>
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title="Genre" id="bg-nested-dropdown">
          <Dropdown.Item onClick={() => { setSelectedGenre(''); setGenre(""); }}>None</Dropdown.Item>
          <Dropdown.Item eventKey="1" onClick={() => {setSelectedGenre('28'); setGenre("Action");}}>Action</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => {setSelectedGenre('12'); setGenre("Adventure")}}>Adventure</Dropdown.Item>
          <Dropdown.Item eventKey="3" onClick={() => {setSelectedGenre('35'); setGenre("Comedy")}}>Comedy</Dropdown.Item>
          <Dropdown.Item eventKey="4" onClick={() => {setSelectedGenre('80'); setGenre("Crime")}}>Crime</Dropdown.Item>
          <Dropdown.Item eventKey="5" onClick={() => {setSelectedGenre('18'); setGenre("Drama")}}>Drama</Dropdown.Item>
          <Dropdown.Item eventKey="6" onClick={() => {setSelectedGenre('10749'); setGenre("Romance")}}>Romance</Dropdown.Item>
          <Dropdown.Item eventKey="7" onClick={() => {setSelectedGenre('878'); setGenre("Science Fiction")}}>Science Fiction</Dropdown.Item>
        </DropdownButton>
        
        <input 
          type="text"
          inputMode="numeric"
          placeholder="Year" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
        />

        <Button onClick={() => handleSort("popularity")}>
          Popularity {sortOrder === "asc" ? "↑" : "↓"}
        </Button>

        <Button onClick={() => handleSort("title")}>
          Title {sortOrder === "asc" ? "↑" : "↓"}
        </Button>
      </ButtonGroup>

      <div>
        <h2>{genre}</h2>
      </div>

      {/* Display the results */}
      {/* Insert your component name here and pass {sorted} to it */}
      <div>
        {sorted.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
