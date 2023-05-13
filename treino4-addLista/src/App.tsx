import { useState } from 'react';
import styles from './App.module.css';
import './global.css';

export function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask() {
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  function handleRemoveTask(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
