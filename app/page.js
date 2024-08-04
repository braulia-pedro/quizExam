import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h1>Bem-vindo ao Sistema de Gestão de Exames</h1>
        <p>Crie e gerencie seus exames facilmente.</p>

      </div>
      <div className={styles.grid}>
        <Link href="/exams/add">
          <div className={styles.card}>
            <h2>Criar Exame &rarr;</h2>
            <p>Adicione novos exames ao sistema.</p>
          </div>
          </Link> 
        <Link href="/exams/view">
          <div className={styles.card}>
            <h2>Gerenciar Exames &rarr;</h2>
            <p>Veja e edite seus exames existentes.</p>
          </div>
        </Link>  

      </div>
    </div>
  );
}

