import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Nominations = (props) => {
  const apiUrl = 'http://localhost:3001';
  const [nominations, setNominations] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/nominations`)
      .then((response) => {
        setNominations(response.data);
      })
  }, []);

  let items = <p>Loading...</p>;

  if (nominations) {
    items = nominations.data.map(nomination => (
      <li key={nomination.id}>
        <p>email: {nomination.email}</p>
        <p>description: {nomination.description}</p>
        <p>status: {nomination.status}</p>
      </li>
    )
    )
  }

  return (
    <div>
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default Nominations;
