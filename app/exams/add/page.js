"use client";
import React, { useState } from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import styles from './AddExam.module.css';

export default function AddExamPage() {
  const [alternatives, setAlternatives] = useState([{ id: 1, value: '' }]);

  const handleAddAlternative = (e) => {
    e.preventDefault();
    setAlternatives([...alternatives, { id: alternatives.length + 1, value: '' }]);
  };

  const handleAlternativeChange = (index, event) => {
    const newAlternatives = alternatives.map((alternative, i) =>
      i === index ? { ...alternative, value: event.target.value } : alternative
    );
    setAlternatives(newAlternatives);
  };

  return (
    <div className={styles.container}>
      <Header /> 
      <div className={styles.mainContent}>
        <h2>Adicionar Novo Exame</h2>
        <form className={styles.form}>
          <label>
            Título:
            <input type="text" className={styles.inputField} placeholder="Insira o título do Exame" />
          </label>
          <label>
            Descrição:
            <textarea name="description" className={styles.inputField} placeholder="Descrição"></textarea>
          </label>

          <label>
            Categoria:
            <input type="text" className={styles.inputField} placeholder="Categoria" />
          </label>
          <div class="w-10 h-10 flex flex-row justify-center items-center rounded-full cursor-pointer font-montserrat text-xs border-2 border-green-400 text-green-400 bg-green-50"><span>1</span></div>

          <label>
            Questão:
            <textarea type="text" className={styles.inputField} placeholder="Insira a questão" name="questions" />
          </label>
          <label>
            Opções:
            <textarea type="text" className={styles.textarea} placeholder="Insira a alternativa correcta" name="questions" />
              {alternatives.map((alternative, index) => (
                <textarea
                  key={alternative.id}
                  rows="2"
                  className={`${styles.textareal} `}
                  
                  placeholder="Insira a alternativa incorreta"
                  value={alternative.value}
                  onChange={(e) => handleAlternativeChange(index, e)}
                />
              ))}
          </label> 

          <Button type="add" onClick={handleAddAlternative}>
            Adicionar alternativa
          </Button>
          <Button type="edite">Continuar</Button>
        </form> 
        </div>        
      <Footer />
    </div>
  );
}  
