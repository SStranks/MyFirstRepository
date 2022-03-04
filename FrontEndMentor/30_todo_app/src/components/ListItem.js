import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { deleteTask, theme, listItem } = props;
  const [taskComplete, setTaskComplete] = useState(listItem.complete);

  const deleteTaskHandler = (task) => {
    deleteTask(task, theme, listItem);
  };

  const checkBoxHandler = (event) => {
    setTaskComplete(event.target.checked);
  };

  return (
    <li
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
    >
      <input type="checkbox" onChange={checkBoxHandler} />
      <p className={taskComplete ? 'task-complete' : ''}>{listItem.task}</p>
      <button
        className="btn-delete"
        type="button"
        aria-label="delete task"
        onClick={() => deleteTaskHandler(listItem)}
      />
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  deleteTask: PropTypes.func,
  theme: PropTypes.bool,
  listItem: PropTypes.shape({
    id: PropTypes.number,
    complete: PropTypes.bool,
    task: PropTypes.string,
  }),
};

ListItem.defaultProps = {
  deleteTask: null,
  theme: null,
  listItem: null,
};
