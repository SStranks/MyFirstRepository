import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { items, theme, deleteTask } = props;

  const deleteTaskHandler = (task) => {
    deleteTask(task);
  };

  const listItems = items.map((listItem) => (
    <li
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
    >
      <input type="checkbox" />
      <p>{listItem.task}</p>
      <button
        className="btn-delete"
        type="button"
        aria-label="delete task"
        onClick={() => deleteTaskHandler(listItem)}
      />
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <div className={`card filter-list ${!theme ? 'dark-card' : ''}`}>
        <span>{listItems.length} Items Left</span>
        <div className="filter-options">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <span className="filter-clear">Clear Completed</span>
      </div>
    </>
  );
};

export default ListToDo;

ListToDo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ complete: PropTypes.bool, item: PropTypes.string })
  ),
  theme: PropTypes.bool,
  deleteTask: PropTypes.func,
};

ListToDo.defaultProps = {
  items: null,
  theme: true,
  deleteTask: null,
};
