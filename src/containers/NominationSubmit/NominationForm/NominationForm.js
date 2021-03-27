import React, { useState } from 'react'

import Button from '../../../components/UI/Button/Button';
import RangeInput from '../../../components/UI/RangeInput/RangeInput';
import FormInput from '../../../components/UI/FormInput/FormInput';
import FormTextarea from '../../../components/UI/FormTextarea/FormTextarea';

const NominationForm = ({ formSubmitted }) => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [involvement, setInvolvement] = useState(5);
  const [talent, setTalent] = useState(5);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const candidateData = {
      email,
      description,
      score: {
        involvement: +involvement,
        talent: +talent,
      },  
    };

    formSubmitted(candidateData);

  };

  const onInputChange = (event) => {
    const { id: controlName, value: controlValue } = event.target;
    switch (controlName) {
      case 'email':
        setEmail(controlValue);
        break;
      case 'description':
        setDescription(controlValue);
        break;
      case 'involvement':
        setInvolvement(controlValue);
        break;
      case 'talent':
        setTalent(controlValue);
        break;
      default:
        break;
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <FormInput 
        label='Email'
        id='email'
        type='email'
        value={email}
        inputChanged={event => onInputChange(event)}
      />
      <FormTextarea 
        label='Description'
        id='description'
        value={description}
        textareaChanged={event => onInputChange(event)}
      />
      <RangeInput 
        id='involvement'
        minValue='0'
        maxValue='10'
        label='Involvement'
        value={involvement}
        onRangeChanged={event => onInputChange(event)}
      />
      <RangeInput 
        id='talent'
        minValue='0'
        maxValue='10'
        label='Talent'
        value={talent}
        onRangeChanged={event => onInputChange(event)}
      />
      <Button
        type='submit'
        label='send'
      />
    </form>
  );
}

export default NominationForm;
