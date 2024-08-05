import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

{/*genre (dropdown | year (input field) | popularity | title*/}

export default function Filters(){
  
  const [sorted, setSorted] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmYyNzIzN2Q4ZTllODE2MDkxMDAwYzVlY2ZmMWI3MiIsIm5iZiI6MTcyMjM4Njc3Mi41ODg4NCwic3ViIjoiNjZhMDFiNTNjOTQ2YmRmOTk0MGE2YzUxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6r442_LKzCRCTfepAK3yk95-7EedvIiPGIj1JMYblng'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${selectedGenre}`, options)
    .then(response => response.json())
    .then((data) => {
      setSorted(data);
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
  })



  return (
    <ButtonGroup>
      <DropdownButton as={ButtonGroup} title="Genre" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1" onSelect={setSelectedGenre('&with_genres=28')}>Action</Dropdown.Item>
        <Dropdown.Item eventKey="2" onSelect={setSelectedGenre('&with_genres=12')}>Adventure</Dropdown.Item>
      </DropdownButton>
      
      <Button>1</Button>
      <Button>2</Button>
    </ButtonGroup>
  )
};

{/* import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Filters() {
  const [sorted, setSorted] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [year, setYear] = useState("");
  const [sortPopOrder, setSortPopOrder] = useState("desc");
  const [sortTitleOrder, setSortTitleOrder] = useState("desc");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmYyNzIzN2Q4ZTllODE2MDkxMDAwYzVlY2ZmMWI3MiIsIm5iZiI6MTcyMjM4Njc3Mi41ODg4NCwic3ViIjoiNjZhMDFiNTNjOTQ2YmRmOTk0MGE2YzUxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6r442_LKzCRCTfepAK3yk95-7EedvIiPGIj1JMYblng'
    }
  };

  const fetchData = async () => {
    const sortOrder = sortBy === "popularity" ? sortPopOrder : sortTitleOrder;
    const genreQuery = selectedGenre ? `&with_genres=${selectedGenre}` : '';
    const yearQuery = year ? `&primary_release_year=${year}` : '';

    try {
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

  useEffect(() => {
    fetchData();
  }, [selectedGenre, year, sortPopOrder, sortTitleOrder, sortBy]);

  const togglePopSortOrder = () => {
    setSortPopOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const toggleTitleSortOrder = () => {
    setSortTitleOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    if (sortType === 'popularity') {
      togglePopSortOrder();
    } else {
      toggleTitleSortOrder();
    }
  };

  return (
    <div>
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title="Genre" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1" onSelect={() => setSelectedGenre('28')}>Action</Dropdown.Item>
          <Dropdown.Item eventKey="2" onSelect={() => setSelectedGenre('12')}>Adventure</Dropdown.Item>
        </DropdownButton>

        <input 
          type="text"
          inputMode="numeric"
          placeholder="Year" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
        />

        <Button onClick={() => handleSort("popularity")}>
          Popularity {sortPopOrder === "asc" ? "↑" : "↓"}
        </Button>

        <Button onClick={() => handleSort("title")}>
          Title {sortTitleOrder === "asc" ? "↑" : "↓"}
        </Button>
      </ButtonGroup>

 
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
 */}