import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';

import NominationForm from './NominationForm/NominationForm';

const NominationSubmit = (props) => {
  const apiUrl = 'http://localhost:3001';
  const history = useHistory();
  const [nominations, setNominations] = useState(null);
  const [formError, setFormError] = useState(null);

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
      setFormError(`Candidate already exists, can't nominate`)
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

    axios.post(`${apiUrl}/nominations`, updatedNominations)
      .then(response => {
        history.push('/nominations');
      })
      .catch(err => {
        console.log(err);
      })

  };

  return (
    <NominationForm formSubmitted={handleNomination} formErrorMessage={formError}/>
  );
}

export default NominationSubmit;
