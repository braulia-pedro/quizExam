import React from 'react';
import Button from './Button'; 
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftButtons}>
        <Button type="">Apresentação</Button>
        <Button type="">Questões</Button>
        <Button type="">Resultado</Button>
      </div>
      <div className={styles.rightButtons}>
        <Button type="check">Continuar</Button>
      </div>
    </footer>
  );
};

export default Footer;
