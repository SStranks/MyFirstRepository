/* eslint-disable react/jsx-props-no-spreading */
// import BoardDelete from '#Components/forms/board-del/BoardDel copy';
import TaskAdd from '#Components/forms/task-add/TaskAdd';
import TaskDelete from '#Components/forms/task-del/TaskDel';
import TaskEdit from '#Components/forms/task-edit/TaskEdit copy';
import TaskView from '#Components/forms/task-view/TaskView copy';
import { ActionType } from '#Context/RootModalContext';
import { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import styles from './_Modal.module.scss';

const domNode = document.querySelector('#modal') as HTMLElement;

const MODAL_COMPONENTS = {
  // 'board-delete': BoardDelete,
  'task-add': TaskAdd,
  'task-view': TaskView,
  'task-edit': TaskEdit,
  'task-delete': TaskDelete,
};

const ACTIONS = {
  OPENMODAL: 'open-modal',
  CLOSEMODAL: 'close-modal',
  CLOSEALL: 'close-all',
};

const initialState = {
  modalType: [],
  modalProps: {},
};

type StateType = {
  modalType: string[];
  modalProps: { [key: string]: { [key: string]: unknown } };
};

const openModal = (state: StateType, action: ActionType) => {
  console.log('ROOTMODAL REDUCER: HELLO!', action);
  const newState = { ...state };
  newState.modalType?.push(action.modalType as string);
  newState.modalProps[action.modalType as string] =
    action.modalProps as StateType['modalProps'];
  console.log(newState);
  return newState;
};

const closeModal = (state: StateType, action: ActionType) => {
  const newState = { ...state };
  newState.modalType?.pop();
  delete newState.modalProps[action.modalType as string];
  return newState;
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: StateType,
  action: ActionType
): StateType => {
  console.log('SWITCH', state, initialState);
  switch (action.type) {
    case ACTIONS.OPENMODAL: {
      return openModal(state, action);
    }
    case ACTIONS.CLOSEMODAL: {
      return closeModal(state, action);
    }
    case ACTIONS.CLOSEALL: {
      return {
        modalType: [],
        modalProps: {},
      };
    }
    default: {
      return state;
    }
  }
};

type ElemProps = {
  setRootModalDispatch: React.Dispatch<
    React.SetStateAction<React.Dispatch<ActionType>>
  >;
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function RootModal(props: ElemProps): JSX.Element | null {
  console.log('START', initialState);

  const { setRootModalDispatch, activeBoardId, setActiveBoardId } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, initialState, activeBoardId, setActiveBoardId);

  useEffect(() => {
    // Lift dispatch to App component
    setRootModalDispatch(() => dispatch);
  }, [setRootModalDispatch]);

  // eslint-disable-next-line unicorn/no-null
  if (state.modalType.length <= 0) return null;

  const activeComponents = state.modalType.map((el, i) => {
    const ModalComponent =
      MODAL_COMPONENTS[el as keyof typeof MODAL_COMPONENTS];
    const modalProps = state.modalProps[el as keyof typeof MODAL_COMPONENTS];
    // eslint-disable-next-line react/no-array-index-key, @typescript-eslint/no-explicit-any
    return <ModalComponent {...(modalProps as any)} key={i} />;
  });

  console.log(activeComponents);

  return ReactDOM.createPortal(
    <div className={styles.container}>{activeComponents}</div>,
    domNode
  );
}

export default RootModal;
