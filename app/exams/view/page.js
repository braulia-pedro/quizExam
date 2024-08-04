import styles from './ViewExams.module.css';
import Button from '../../components/Button';
import Header from '../../components/Header';
export default function ViewExamsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <h2>Lista de Exames</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Exame 1 - <Button type="trash">Eliminar</Button> <Button type="edite">Editar</Button>    
        </li>
        <li className={styles.listItem}>
          Exame 2 - <Button type="trash">Eliminar</Button> <Button type="edite">Editar</Button>
        </li>
        
      </ul>
    </div>
  );
}
