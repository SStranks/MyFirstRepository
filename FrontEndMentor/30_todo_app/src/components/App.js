import React, { useState } from 'react';
import CreateToDo from './CreateToDo';
import ListToDo from './ListToDo';

const initialList = [
  { id: 1, complete: true, task: 'Complete online JavaScript course' },
  { id: 2, complete: true, task: 'Jog around the park 3x' },
  { id: 3, complete: true, task: '10 minutes meditation' },
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

  const completeTask = (task) => {
    setTaskList((prevState) => {
      const newState = [...prevState];
      const index = newState.map((el) => el.id).indexOf(task.id);
      newState[index] = {
        ...newState[index],
        complete: !newState[index].complete,
      };
      return newState;
    });
  };

  // const completeTask = (task) => {
  //   setTaskList((prevState) => {
  //     const newState = [...prevState];
  //     const index = newState.map((el) => el.id).indexOf(task.id);
  //     const mutant = { ...newState[index] };
  //     mutant.complete = !mutant.complete;
  //     newState[index] = mutant;
  //     // NOTE:  newState[index].complete = !newState[index].complete;  WHY DOESN'T THIS WORK??
  //     return newState;
  //   });
  // };

  // const completeTask = (task) => {
  //   const completeState = task.complete;
  //   setTaskList((prevState) => {
  //     const newState = [...prevState];
  //     const index = newState.map((el) => el.id).indexOf(task.id);
  //     newState[index].complete = !completeState;
  //     // NOTE:  newState[index].complete = !newState[index].complete;  WHY DOESN'T THIS WORK??
  //     return newState;
  //   });
  // };

  const clearCompleted = () => {
    let completedTasks = [
      ...document.querySelectorAll('[data-complete]:not([data-complete=""])'),
    ];
    completedTasks = completedTasks.map((el) => Number(el.attributes[1].value));
    setTaskList((prevState) => {
      return prevState.filter((task) => !completedTasks.includes(task.id));
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
        <ListToDo
          items={taskList}
          theme={theme}
          deleteTask={deleteTask}
          completeTask={completeTask}
          clearTasks={clearCompleted}
        />
        <span className="instruction">Drag and drop to reorder list</span>
      </main>
    </>
  );
}

export default App;
