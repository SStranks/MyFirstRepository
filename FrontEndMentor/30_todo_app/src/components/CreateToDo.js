import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CreateToDo.scss';

const CreateToDo = (props) => {
  const { theme } = props;

  return (
    <div className={`card create-todo ${!theme ? 'dark-card' : ''}`}>
      <input type="checkbox" />
      <input type="text" placeholder="Create a new todo.." />
    </div>
  );
};

CreateToDo.propTypes = {
  theme: PropTypes.bool,
};

CreateToDo.defaultProps = {
  theme: true,
};

export default CreateToDo;
