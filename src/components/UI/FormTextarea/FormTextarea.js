import React from 'react';
import styled from 'styled-components';
import { InputGroupStyles } from '../inputStyles';

const InputGroup = styled.div`${InputGroupStyles}`;

const Label = styled.label`
  color: var(--color-grey-dark);
  font-size: 1.3rem;
  position: absolute;
  top: 12%;
  transform: translate(10px, -50%);
  transition: top .15s ease-in, color .3s ease-in;

  .input-filled + & {
    top: -12px;
    color: var(--color-white);
  }
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 3px;
  padding: 10px;
  resize: none;

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

const FormTextarea = ({ id, label, value, textareaChanged, isValid, isTouched, error }) => {
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
    <InputGroup  mbottom='30'>
      <Textarea 
        id={id}
        name={id}
        className={getInputClasses().join(' ')}
        onChange={textareaChanged}
        onBlur={textareaChanged}
        value={value}
        rows='10'
      >{value}</Textarea>
      <Label
        htmlFor={id}
      >{label}</Label>
    {!isValid && <ErrorMessage>{error}</ErrorMessage>}
    </InputGroup>
  );
}

export default FormTextarea;
