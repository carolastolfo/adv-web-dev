import { useState, useEffect } from 'react';

export default function Location() {
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
  }, []);

  if (loading || !person) return <div>Loading...</div>;

  const { street, city, state } = person.location;
  return (
    <div>
      <div>{person.name.first} {person.name.last}</div>
      <div>{street.number} {street.name}</div>
      <div>{city}, {state}</div>
    </div>
  );
}
