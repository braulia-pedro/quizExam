import React from 'react';
import { FaBell} from 'react-icons/fa'; 
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.menu}>
            <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <a href="/" className={styles.homeLink}>Home</a>
          </div>
        </div>
      <div className={styles.centerSection}>
        <input type="text" className={styles.searchBar} placeholder="Pesquisar..." />
      </div>
      <div className={styles.rightSection}>
        <button className={styles.addButton}>Adicionar Exame</button>
        <FaBell className={styles.notificationIcon} />
        <button className={styles.loginButton}>Entrar</button>
      </div>
    </header>
  );
};

export default Header;
