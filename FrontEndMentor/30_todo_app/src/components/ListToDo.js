import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../styles/ListToDo.scss';

const ListToDo = (props) => {
  const { setList, items, theme, deleteTask, clearTasks, completeTask } = props;

  const [filterTasks, setFilterTasks] = useState('all');
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const dragTaskEnter = (e, itemNum) => {
    if (e.target !== dragNode.current) {
      const newList = [...items];
      newList.splice(itemNum, 0, newList.splice(dragItem.current, 1)[0]);
      dragItem.current = itemNum;
      setList(newList);
    }
  };

  // const dragTaskEnter = (e, itemNum) => {
  //   if (e.target !== dragNode.current) {
  //     setList(() => {  // NOTE: Why doesn't this work??
  //       const newList = [...items];
  //       newList.splice(itemNum, 0, newList.splice(dragItem.current, 1)[0]);
  //       dragItem.current = itemNum;
  //       // console.log('DRAG', prevList);
  //       return newList;
  //     });
  //   }
  // };

  const dragTaskEnd = () => {
    setDragging(false);
    dragItem.current = null;
    dragNode.current.removeEventListener('dragend', dragTaskEnd);
    dragNode.current = null;
  };

  const dragTaskStart = (e, itemNum) => {
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', dragTaskEnd);
    dragItem.current = itemNum;
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const filterHandler = (filter) => {
    setFilterTasks(filter);
  };

  const filterItems = items.filter((listItem) => {
    if (filterTasks === 'all') return true;
    if (filterTasks === 'active' && !listItem.complete) return true;
    if (filterTasks === 'completed' && listItem.complete) return true;
    return false;
  });

  const listItems = filterItems.map((listItem, itemNum) => (
    <ListItem
      // className={`card list__item ${!theme ? 'dark-card' : ''}}`}
      key={listItem.id}
      completeTask={completeTask}
      deleteTask={deleteTask}
      theme={theme}
      listItem={listItem}
      itemNum={itemNum}
      dragTask={dragTaskStart}
      dragEnter={dragTaskEnter}
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
            className={`filter-btn ${
              filterTasks === 'all' ? 'filter-active' : ''
            }`}
            onClick={() => filterHandler('all')}
          >
            All
          </button>
          <button
            type="button"
            aria-label="show active tasks"
            className={`filter-btn ${
              filterTasks === 'active' ? 'filter-active' : ''
            }`}
            onClick={() => filterHandler('active')}
          >
            Active
          </button>
          <button
            type="button"
            aria-label="show completed tasks"
            className={`filter-btn ${
              filterTasks === 'completed' ? 'filter-active' : ''
            }`}
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
  setList: PropTypes.func,
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
  setList: null,
  items: null,
  theme: true,
  deleteTask: null,
  clearTasks: null,
  completeTask: null,
};
