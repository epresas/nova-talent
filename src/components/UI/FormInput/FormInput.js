import React from 'react';
import styled from 'styled-components';
import { InputGroupStyles } from '../inputStyles';

const InputGroup = styled.div`${InputGroupStyles}`;

const Label = styled.label`
  color: var(--color-grey-dark);
  font-size: 1.3rem;
  position: absolute;
  top: 20px;
  transform: translate(10px, -50%);
  transition: top .15s ease-in, color .3s ease-in;

  .input-filled + & {
    top: -12px;
    color: var(--color-white);
  }
`;

const InputControl = styled.input`
  border: none;
  border-radius: 3px;
  height: 40px;
  padding: 0 10px;

  &:focus {
    outline-color: var(--color-grey-medium);

    & + ${Label} {
      top: -12px;
      color: var(--color-white);
    }
  }

  &.is-error {
    color: var(--color-red-error);
    border: 1px solid var(--color-red-error);

    &:focus {
      outline-color: var(--color-red-error);
    }

    & + ${Label} {
      color: var(--color-red-error);
    }
  }
`;

const ErrorMessage = styled.span`
  color: var(--color-red-error);
  font-size: 1.2rem;
  margin-top: 5px;
`;


const FormInput = ({ id, label, value, type, inputChanged, isValid, isTouched, error }) => {
  const getInputClasses = ()  => {
    const classesArray = [];
  
    if (value) {
      classesArray.push('input-filled');
    }
  
    if (isTouched && !isValid) {
      classesArray.push('is-error');
    }
  
    return classesArray;
  };

  return (
    <InputGroup mbottom='30'>
      <InputControl 
        type={type} 
        value={value}
        className={getInputClasses().join(' ')}
        id={id}
        name={id}
        onChange={inputChanged}
        onBlur={inputChanged}
      />
      <Label 
        htmlFor={id}
      >{label}</Label>
    {!isValid && <ErrorMessage>{error}</ErrorMessage>}
    </InputGroup>
  );
}

export default FormInput;
