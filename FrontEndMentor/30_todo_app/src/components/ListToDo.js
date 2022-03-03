import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { items, theme } = props;
  console.log(items);

  const listItems = items.map((listItem) => (
    <li
      className={`card list__item ${!theme ? 'dark-card' : ''}`}
      key={listItem.id}
    >
      <input type="checkbox" />
      <p>{listItem.task}</p>
      <img src="assets/icon-cross.svg" alt="remove list item" />
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <div className={`card filter-list ${!theme ? 'dark-card' : ''}`}>
        <span>5 Items Left</span>
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
};

ListToDo.defaultProps = {
  items: null,
  theme: true,
};
