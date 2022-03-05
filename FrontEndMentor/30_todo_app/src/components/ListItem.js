import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { deleteTask, theme, listItem, completeTask } = props;

  return (
    <li
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
      data-complete={listItem.complete ? listItem.id : ''}
      draggable
    >
      <input
        type="checkbox"
        onChange={() => completeTask(listItem)}
        defaultChecked={listItem.complete}
        id={listItem.id}
      />
      <label
        className={listItem.complete ? 'task-complete' : ''}
        htmlFor={listItem.id}
      >
        {listItem.task}
      </label>
      <button
        className="btn-delete"
        type="button"
        aria-label="delete task"
        onClick={() => deleteTask(listItem)}
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
  completeTask: PropTypes.func,
};

ListItem.defaultProps = {
  deleteTask: null,
  theme: null,
  listItem: null,
  completeTask: null,
};
