import React, { useState } from 'react';
import CreateToDo from './CreateToDo';
import ListToDo from './ListToDo';

function App() {
  const [theme, setTheme] = useState(true);

  const themeHandler = () => {
    return theme ? setTheme(false) : setTheme(true);
  };

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
      <div className={`header-background ${!theme ? 'dark-header' : ''}`} />
      <header>
        <h1>Todo</h1>
        <button
          className={`${!theme ? 'dark-button' : ''}`}
          type="button"
          aria-label="theme toggle button"
          onClick={themeHandler}
          onKeyPress={themeHandler}
        />
      </header>
      <main>
        <CreateToDo theme={theme} />
        <ListToDo items={initialList} theme={theme} />
        <span className="instruction">Drag and drop to reorder list</span>
      </main>
    </>
  );
}

export default App;
