import React from 'react';
import '../styles/CreateToDo.scss';

const CreateToDo = () => {
  return (
    <div className="create-todo">
      <input type="checkbox" />
      <input type="text" placeholder="Create a new todo.." />
    </div>
  );
};

export default CreateToDo;
