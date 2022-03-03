import React from 'react';
import CreateToDo from './CreateToDo';
import ListToDo from './ListToDo';

function App() {
  const initialList = [
    { id: 1, complete: true, task: 'Complete online JavaScript course' },
    { id: 2, complete: false, task: 'Jog around the park 3x' },
    { id: 3, complete: false, task: '10 minutes meditation' },
    { id: 4, complete: false, task: 'Read for 1 hour' },
    { id: 5, complete: false, task: 'Pick up groceries' },
    { id: 6, complete: false, task: 'Complete Todo App on Frontend Mentor' },
  ];

  return (
    <>
      <img
        className="header-background"
        src="/assets/bg-desktop-light.jpg"
        alt=""
      />
      <header>
        <h1>Todo</h1>
        <img src="/assets/icon-sun.svg" alt="light dark theme switch" />
      </header>
      <main>
        <CreateToDo />
        <ListToDo items={initialList} />
        <span className="instruction">Drag and drop to reorder list</span>
      </main>
    </>
  );
}

export default App;
