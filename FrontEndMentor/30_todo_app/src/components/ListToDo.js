import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { items, theme, deleteTask, clearTasks, completeTask } = props;

  const [filterTasks, setFilterTasks] = useState('all');

  const filterHandler = (filter) => {
    setFilterTasks(filter);
  };

  const filterItems = items.filter((listItem) => {
    if (filterTasks === 'all') return true;
    if (filterTasks === 'active' && !listItem.complete) return true;
    if (filterTasks === 'completed' && listItem.complete) return true;
    return false;
  });

  const listItems = filterItems.map((listItem) => (
    <ListItem
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
      completeTask={completeTask}
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
          <button
            type="button"
            aria-label="show all tasks"
            className="filter-btn"
            onClick={() => filterHandler('all')}
          >
            All
          </button>
          <button
            type="button"
            aria-label="show active tasks"
            className="filter-btn"
            onClick={() => filterHandler('active')}
          >
            Active
          </button>
          <button
            type="button"
            aria-label="show completed tasks"
            className="filter-btn"
            onClick={() => filterHandler('completed')}
          >
            Completed
          </button>
        </div>
        <button
          type="button"
          aria-label="clear completed tasks"
          className="filter-btn"
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
  completeTask: PropTypes.func,
};

ListToDo.defaultProps = {
  items: null,
  theme: true,
  deleteTask: null,
  clearTasks: null,
  completeTask: null,
};
