import { ChangeEvent, useState } from 'react';

import styles from './App.module.css';

import './global.css';

export function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const maxLength = 20;

  function atualizaTexto(event: ChangeEvent<HTMLInputElement>) {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
      setCount(newText.length);
    }
  }

  return (
    <>
      <section className={styles.container}>
        <strong> Digite na caixa abaixo </strong>

        <input 
          type="text" 
          placeholder="Digite aqui" 
          maxLength={maxLength}
          onChange={atualizaTexto}
        />

        {count === maxLength && <p style={{ color: 'red' }}> Número máximo de caracteres atingidos!! </p>}

        <p> {count}/{maxLength} caracteres digitados. </p>

        <p className={styles.caixaTexto}> {text} </p>
      </section>
    </>
  )
}