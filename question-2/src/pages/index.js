import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const url = "https://api.randomuser.me/";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPerson(data.results[0]);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {loading || !person ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>{person.name.first} {person.name.last}</div>
          <img src={person.picture.large} alt="User" />
        </div>
      )}
    </div>
  );
}
