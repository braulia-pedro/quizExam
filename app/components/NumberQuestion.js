import React from 'react';
import styles from './NumberQuestion.module.css';

const CustomButton = ({ number, isActive }) => {
  return (
    <div
      className={`${styles.button} ${
        isActive ? styles.borderPrimary : styles.borderGreen
      }`}
    >
      <span>{number}</span>
    </div>
  );
};

export default CustomButton;
