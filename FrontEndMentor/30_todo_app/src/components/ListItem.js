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

  if (taskComplete) {
    console.log(listItem.id);
  }

  return (
    <li
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
      data-complete={taskComplete ? listItem.id : ''}
    >
      <input
        type="checkbox"
        onChange={checkBoxHandler}
        defaultChecked={listItem.complete}
      />
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
