import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const {
    theme,
    listItem,
    completeTask,
    deleteTask,
    dragTask,
    dragEnter,
    itemNum,
    dragging,
  } = props;

  return (
    <li
      className={`card list__item ${!theme ? 'dark-card' : ''} ${
        dragging ? 'task-drag' : ''
      }`}
      key={listItem.id}
      data-complete={listItem.complete ? listItem.id : ''}
      draggable
      onDragStart={(e) => {
        dragTask(e, itemNum);
      }}
      onDragEnter={(e) => {
        dragEnter(e, itemNum);
      }}
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
  dragTask: PropTypes.func,
  dragEnter: PropTypes.func,
  itemNum: PropTypes.number,
  dragging: PropTypes.bool,
};

ListItem.defaultProps = {
  deleteTask: null,
  theme: null,
  listItem: null,
  completeTask: null,
  dragTask: null,
  dragEnter: null,
  itemNum: null,
  dragging: null,
};
