import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CreateToDo.scss';

const CreateToDo = (props) => {
  const { theme, newTaskHandler } = props;
  const [newTask, setNewTask] = useState('');

  const textInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTaskHandler = (event) => {
    if (newTask === '' || event.key !== 'Enter') return;
    const idx = Math.floor(Math.random() * 10000);
    newTaskHandler(idx, newTask);
    setNewTask('');
  };

  return (
    <div className={`card create-todo ${!theme ? 'dark-card' : ''}`}>
      <input type="checkbox" onClick={addTaskHandler} />
      <input
        type="text"
        value={newTask}
        placeholder="Create a new todo.."
        onChange={textInput}
        onKeyDown={addTaskHandler}
      />
    </div>
  );
};

CreateToDo.propTypes = {
  theme: PropTypes.bool,
  newTaskHandler: PropTypes.func,
};

CreateToDo.defaultProps = {
  theme: true,
  newTaskHandler: null,
};

export default CreateToDo;
