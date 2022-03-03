import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { items } = props;
  console.log(items);

  const listItems = items.map((listItem) => (
    <li className="card list__item" key={listItem.id}>
      <input type="checkbox" />
      <p>{listItem.task}</p>
      <img src="assets/icon-cross.svg" alt="remove list item" />
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <div className="filter-list">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </>
  );
};

export default ListToDo;

ListToDo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ complete: PropTypes.bool, item: PropTypes.string })
  ),
};

ListToDo.defaultProps = {
  items: null,
};
