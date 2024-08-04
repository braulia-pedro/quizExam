
import React from 'react';
import styles from './Button.module.css';
import { FaCheckCircle,FaPlusCircle,FaPencil,FaCheck,FaTrash, FaTimesCircle, FaRegThumbsUp} from 'react-icons/fa';
const icons = {
  trash:<FaTrash />,
  plus:<FaPlusCircle />,
  check:<FaCheckCircle />,
  edite:<FaPencil />,
  edy:<FaCheck />,
  times:<FaTimesCircle />,
  tumb:<FaRegThumbsUp />,
  add: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.0032 3.8125C2.80246 5.27804 0.75 8.47519 0.75 11.9955C0.75 15.5158 2.80246 18.713 6.0032 20.1785" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.25 21C19.2206 21 23.25 16.9706 23.25 12C23.25 7.02944 19.2206 3 14.25 3C9.27944 3 5.25 7.02944 5.25 12C5.25 16.9706 9.27944 21 14.25 21Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M14.25 7.5V16.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M9.75 12H18.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
  delete: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M6 18L18 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  ),
};


const Button = ({ type, children, onClick }) => {
  const buttonType = type ? styles[`button${type.charAt(0).toUpperCase() + type.slice(1)}`] : '';

  return (
    <button className={`${styles.button} ${buttonType}`} onClick={onClick}>
      <span className={styles.icon}>
        {icons[type]}
      </span>
      {children}
    </button>
  );
};

export default Button;
