import React from 'react';
import './Button.css'


const Button = ({ label, clicked }) => {
  return (
  <button
    className= 'button'
    onClick={clicked}
  >{label}</button>
  );
}

export default Button;