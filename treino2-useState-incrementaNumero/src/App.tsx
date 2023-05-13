import { useState } from 'react';
import styles from './App.module.css';

import './global.css';

export function App() {
  const[count, setCount] = useState(0);

  return (
    <>
      <section className={styles.container}>
        <strong> Clique no botão e incremente o contator </strong>

        <button onClick={() => setCount((count) => (count + 1))}> 
          O número é {count} 
        </button>
      </section>
    </>
  )
}