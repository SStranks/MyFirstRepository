import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { items, theme, deleteTask, clearTasks } = props;

  const listItems = items.map((listItem) => (
    <ListItem
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
      deleteTask={deleteTask}
      theme={theme}
      listItem={listItem}
    />
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
        <button
          type="button"
          aria-label="clear completed tasks"
          className="filter-clear"
          onClick={clearTasks}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
};

export default ListToDo;

ListToDo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      complete: PropTypes.bool,
      task: PropTypes.string,
    })
  ),
  theme: PropTypes.bool,
  deleteTask: PropTypes.func,
  clearTasks: PropTypes.func,
};

ListToDo.defaultProps = {
  items: null,
  theme: true,
  deleteTask: null,
  clearTasks: null,
};
