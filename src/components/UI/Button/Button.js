import React from 'react';
import styled from 'styled-components';

const ButtonEl = styled.button`
  background: var(--color-white);
  border: 2px solid var(--color-white);
  border-radius: 3px;
  color: var(--color-grey-dark);
  height: 40px;
  text-transform: uppercase;
  transition: all .2s ease-in;
  width: 160px;

  &:focus, &:active, &:hover {
    background: var(--color-gray-dark);
    color: var(--color-white);
    outline: none;
  }
`;

const Button = ({ label, clicked }) => {
  return (
  <ButtonEl
    className= 'button'
    onClick={clicked}
  >{label}</ButtonEl>
  );
}

export default Button;