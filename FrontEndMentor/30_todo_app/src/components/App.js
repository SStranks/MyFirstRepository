import React, { useState } from 'react';
import CreateToDo from './CreateToDo';
import ListToDo from './ListToDo';

const initialList = [
  { id: 1, complete: true, task: 'Complete online JavaScript course' },
  { id: 2, complete: false, task: 'Jog around the park 3x' },
  { id: 3, complete: false, task: '10 minutes meditation' },
  { id: 4, complete: false, task: 'Read for 1 hour' },
  { id: 5, complete: false, task: 'Pick up groceries' },
  { id: 6, complete: false, task: 'Complete Todo App on Frontend Mentor' },
];

function App() {
  const [theme, setTheme] = useState(true);
  const [taskList, setTaskList] = useState(initialList);

  const themeHandler = () => {
    return theme ? setTheme(false) : setTheme(true);
  };

  const newTaskHandler = (idx, task) => {
    setTaskList((prevState) => {
      return [...prevState, { id: idx, complete: false, task }];
    });
  };

  const deleteTask = (task) => {
    setTaskList((prevState) => {
      return prevState.filter((el) => el.id !== task.id);
    });
  };

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
        <CreateToDo theme={theme} newTaskHandler={newTaskHandler} />
        <ListToDo items={taskList} theme={theme} deleteTask={deleteTask} />
        <span className="instruction">Drag and drop to reorder list</span>
      </main>
    </>
  );
}

export default App;
