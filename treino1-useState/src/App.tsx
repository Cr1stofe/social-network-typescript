import { useState } from 'react';
import styles from './App.module.css';

import './global.css';

export function App() {
  const [texto, setTexto] = useState("Olá");

  function alteraTexto() {
    const newText = texto === "Olá" ? "Tchau" : "Olá";
    setTexto(newText);
  }

  return (
    <>
      <header className={styles.header}>
        <strong> Clique no botão e altere o texto </strong>
      </header>

      <div className={styles.container}>
        <p> {texto} </p>
        
        <button
          className={styles.button}
          onClick={alteraTexto}> Clique aqui
        </button>
      </div>
    </>
  )
}