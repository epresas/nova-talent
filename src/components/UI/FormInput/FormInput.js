import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ id, label, value, type, inputChanged }) => {
  return (
    <div className={styles.inputGroup}>
      <input 
        type={type} 
        className={styles.inputControl} 
        value={value}
        id={id}
        name={id}
        onChange={inputChanged}
      />
      <label 
        htmlFor={id}
        className={styles.inputLabel}
      >{label}</label>
    </div>
  );
}

export default FormInput;
