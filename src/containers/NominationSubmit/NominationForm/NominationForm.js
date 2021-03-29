import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../../components/UI/Button/Button';
import RangeInput from '../../../components/UI/RangeInput/RangeInput';
import FormInput from '../../../components/UI/FormInput/FormInput';
import FormTextarea from '../../../components/UI/FormTextarea/FormTextarea';

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 60px 40px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 60%;
  }
`;

const FormErrorMessage =styled.span`
  color: var(--color-red-error);
  font-size: 1.4rem;
  margin-top: 20px;
`;

const NominationForm = ({ formSubmitted, formErrorMessage }) => {
  const [controls, setControls] = useState({
    email: {
      value: '',
      isValid: null,
      isTouched: false,
      errorMsg: null,
      validation: {
        required: true,
        pattern: 'email',
      }
    },
    description: {
      value: '',
      isValid: null,
      isTouched: false,
      errorMsg: null,
      validation: {
        required: true,
        minLength: 10,
      }
    },
    involvement: {
      value: 5,
      isValid: true,
    },
    talent: {
      value: 5,
      isValid: true,
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const candidateData = {
        email: controls.email.value,
        description: controls.description.value,
        score: {
          involvement: +controls.involvement.value,
          talent: +controls.talent.value,
        },  
      };
  
      formSubmitted(candidateData);
    }
  };


  const validatefField = (value, rules) => {
    let isValid = true;
    const pattern = {
      email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    }

    if(!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.trim().length <= rules.maxLength && isValid;
    }

    if (rules.pattern) {
      isValid = pattern[rules.pattern].test(value.trim()) && isValid;
    }

    return isValid;
  };

  const getErrorMessage = (value, elemName) => {
    if (!value.length) {
      return 'This field is required';
    }

    if (!controls[elemName].isValid) {
      if (controls[elemName].validation.minLength) {
        return `Value too short, minimum ${controls[elemName].validation.minLength}`;
      }
      return 'Please enter a valid value';
    }

    return null;
  }

  const validateForm = () => {

    for (const control in controls) {
      if (!controls[control].isValid) {
        return false;
      }
    };

    return true;
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const updatedControls = {
      ...controls,
      [name]: {
        ...controls[name],
        value,
      }
    };

    // this only affects email and description
    if (controls[name].validation) {
      updatedControls[name].isTouched = true;
      updatedControls[name].isValid =  validatefField(value, controls[name].validation);
      updatedControls[name].errorMsg = getErrorMessage(value.trim(), name);
    }

    setControls(updatedControls);
  }

  return(
    <Form onSubmit={handleSubmit}>
      <FormInput 
        label='Email'
        id='email'
        name='email'
        type='email'
        value={controls.email.value}
        isTouched={controls.email.isTouched}
        isValid={controls.email.isValid}
        error={controls.email.errorMsg}
        inputChanged={event => onInputChange(event)}
      />
      <FormTextarea 
        label='Description'
        id='description'
        name='description'
        value={controls.description.value}
        isTouched={controls.description.isTouched}
        isValid={controls.description.isValid}
        error={controls.description.errorMsg}
        textareaChanged={event => onInputChange(event)}
      />
      <RangeInput 
        id='involvement'
        name='involvement'
        minValue='0'
        maxValue='10'
        label='Involvement'
        value={controls.involvement.value}
        onRangeChanged={event => onInputChange(event)}
        mtop='20'
        mbottom='20'
      />
      <RangeInput 
        id='talent'
        name='talent'
        minValue='0'
        maxValue='10'
        label='Talent'
        value={controls.talent.value}
        onRangeChanged={event => onInputChange(event)}
        mtop='30'
        mbottom='80'
      />
      <Button
        type='submit'
        label='send'
      />
      {formErrorMessage && <FormErrorMessage>{formErrorMessage}</FormErrorMessage>}
    </Form>
  );
}

export default NominationForm;
