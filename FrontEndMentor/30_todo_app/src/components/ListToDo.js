import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { items, theme, deleteTask } = props;

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
        <span className="filter-clear">Clear Completed</span>
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
};

ListToDo.defaultProps = {
  items: null,
  theme: true,
  deleteTask: null,
};
