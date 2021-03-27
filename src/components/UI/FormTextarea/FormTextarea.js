import React from 'react';
import styles from './FormTextarea.module.css';

const FormTextarea = ({ id, label, value, textareaChanged }) => {
  return (
    <div className={styles.inputGroup}>
      <textarea 
        id={id} 
        className={styles.inputControl}
        onChange={textareaChanged}
        value={value}
      >{value}</textarea>
      <label
        htmlFor={id}
        className={styles.inputLabel}
      >{label}</label>
    </div>
  );
}

export default FormTextarea
