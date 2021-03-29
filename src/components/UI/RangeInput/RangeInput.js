import React from 'react';
import styled from 'styled-components';
import { InputGroupStyles} from '../inputStyles';
import { RangeInputStyles } from './RangeInputStyles'

const InputGroup = styled.div`${InputGroupStyles}`;

const Label = styled.label`
  color: var(--color-white);
  font-size: 1.3rem;
  margin-bottom: 12px;
`;

const Range = styled.input`${RangeInputStyles};`;

const RangeInput = ({ minValue, maxValue, stepValue, id, label, onRangeChanged, value, mtop, mbottom}) => {
  const rangeBackgroundWidth = (value - minValue) / (maxValue - minValue) * 100;
  return (
    <InputGroup mtop={mtop} mbottom={mbottom}>
      <Label 
        htmlFor={id}
        className='input__label'
      >{label} ( {value} )</Label>
      <Range 
        progress= {rangeBackgroundWidth}
        className='input__control'
        type='range' 
        min={minValue} 
        max={maxValue} 
        step={stepValue} 
        id={id}
        name={id}
        value={value} 
        onChange={onRangeChanged} 
      />
    </InputGroup>
  );
}

export default RangeInput;
