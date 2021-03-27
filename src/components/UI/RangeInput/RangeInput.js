import React from 'react';
import './RangeInput.css'

const RangeInput = ({ minValue, maxValue, stepValue, id, label, onRangeChanged, value}) => {
  return (
    <div className='input-group'>
      <label 
        htmlFor={id}
        className='input__label'
      >{label}</label>
      <input 
        className='input__control'
        type='range' 
        min={minValue} 
        max={maxValue} 
        step={stepValue} 
        id={id} 
        value={value} 
        onChange={onRangeChanged} 
      />
    </div>
  );
}

export default RangeInput;
