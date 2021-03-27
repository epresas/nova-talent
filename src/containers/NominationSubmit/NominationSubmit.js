import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import axios from 'axios';

import NominationForm from './NominationForm/NominationForm';

const NominationSubmit = (props) => {
  const apiUrl = 'http://localhost:3001';

  const [nominations, setNominations] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/nominations`)
      .then((response) => {
        setNominations(response.data);
      })
  }, []);
  
  const handleNomination = (data) => {
    const updatedNominations = nominations;
    const { email, description, score } = data;
    const isCandidateRegistered = updatedNominations.data.find(candidate => candidate.email === email);
    
    // If candidate email exists, discard application
    if (isCandidateRegistered) {
      console.log('candidate already exists!');
      return false;
    }

    const nomination = {
      id: uuid(),
      email,
      description,
      score,
      referrer: uuid(),
      dateReferred: new Date().toISOString(),
      status: +score.talent >= 8 ? 'APPROVED' : 'REJECTED',
    }

    updatedNominations.data.push(nomination);

    debugger;
    axios.post(`${apiUrl}/nominations`, updatedNominations)
      .then(response => {
        debugger;
      })
      .catch(err => {
        console.log(err);
      })

  };

  return (
    <NominationForm formSubmitted={handleNomination} />
  );
}

export default NominationSubmit;
