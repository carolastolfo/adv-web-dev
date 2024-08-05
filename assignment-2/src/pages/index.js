import { useState, useEffect } from 'react';

export default function Contacts() {
  
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        setContacts(data);
      })
      .catch(console.log);
  }, []);
  
  return (
    <div className='contact-list'>
      <h1>My Contact List!</h1>
      <div className='contact-box'>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} email={contact.email} />
      ))}
      </div>
    </div>
  );
}

function Contact(props){
  return(
    <div className='contact-item'>
      <h3 className='contact-name'>{props.name}</h3>
      <p className='contact-email'>{props.email}</p>
    </div>
  )
}