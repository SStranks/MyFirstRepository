/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import BoardAdd from '#Components/forms/board-add/BoardAdd';
import BoardDelete from '#Components/forms/board-del/BoardDel';
import BoardEdit from '#Components/forms/board-edit/BoardEdit';
import Error from '#Components/forms/error/Error';
import TaskAdd from '#Components/forms/task-add/TaskAdd';
import TaskDelete from '#Components/forms/task-del/TaskDel';
import TaskEdit from '#Components/forms/task-edit/TaskEdit';
import TaskView from '#Components/forms/task-view/TaskView';
import { TRootModalContextAction } from '#Context/RootModalContext';
import { TRootModalState } from '#Types/types';
import { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import styles from './_RootModal.module.scss';

const domNode = document.querySelector('#modal') as HTMLElement;

const MODAL_COMPONENTS = {
  error: Error,
  'task-add': TaskAdd,
  'task-view': TaskView,
  'task-edit': TaskEdit,
  'task-delete': TaskDelete,
  'board-add': BoardAdd,
  'board-edit': BoardEdit,
  'board-delete': BoardDelete,
};

const ACTIONS = {
  OPENMODAL: 'open-modal',
  CLOSEMODAL: 'close-modal',
  CLOSEALL: 'close-all',
};

const initialState = {
  modalType: [],
  modalProps: [],
};

const openModal = (state: TRootModalState, action: TRootModalContextAction) => {
  console.log('ROOTMODAL REDUCER: HELLO!', action);
  const newState = { ...state };
  newState.modalType?.push(action.modalType as string);
  if (action.modalProps) {
    newState.modalProps?.push(action.modalProps);
  } else {
    newState.modalProps?.push({});
  }
  return newState;
};

const closeModal = (state: TRootModalState) => {
  const newState = { ...state };
  newState.modalType?.pop();
  newState.modalProps?.pop();
  return newState;
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: TRootModalState,
  action: TRootModalContextAction
): TRootModalState => {
  console.log('SWITCH', state, initialState);
  switch (action.type) {
    case ACTIONS.OPENMODAL: {
      return openModal(state, action);
    }
    case ACTIONS.CLOSEMODAL: {
      return closeModal(state);
    }
    case ACTIONS.CLOSEALL: {
      return {
        modalType: [],
        modalProps: [],
      };
    }
    default: {
      return state;
    }
  }
};

type ElemProps = {
  setRootModalDispatch: React.Dispatch<
    React.SetStateAction<React.Dispatch<TRootModalContextAction>>
  >;
};

function RootModal(props: ElemProps): JSX.Element | null {
  const { setRootModalDispatch } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Lift dispatch to App component
    setRootModalDispatch(() => dispatch);
  }, [setRootModalDispatch]);

  useEffect(() => {
    // NOTE:  Click handler is through clickCapture - can't attach ref if null check prevents DOM render.
    // On press of ESC key; close modal.
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        dispatch({
          type: 'close-modal',
        });
      }
    };

    document?.addEventListener('keyup', keyHandler);

    return () => {
      document?.removeEventListener('keyup', keyHandler);
      // TODO:  Accessibility to implement here.
      // document.querySelector('#root')?.removeAttribute('inert');
    };
  }, []);

  // eslint-disable-next-line unicorn/no-null
  if (state.modalType.length <= 0) return null;

  const activeComponents = state.modalType.map((el, i) => {
    const ModalComponent =
      MODAL_COMPONENTS[el as keyof typeof MODAL_COMPONENTS];
    const modalProps = state.modalProps[i];
    // const modalProps = state.modalProps[el as keyof typeof MODAL_COMPONENTS];
    return (
      // eslint-disable-next-line react/no-array-index-key, @typescript-eslint/no-explicit-any
      <div className={styles.animationFadeIn} key={i}>
        <div className={styles.subContainer}>
          <ModalComponent
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(modalProps as any)}
            // key={i}
          />
        </div>
      </div>
    );
  });

  const modalClickHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if ((target as HTMLElement).id === 'root-modal') {
      dispatch({
        type: 'close-modal',
      });
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles.container} ${styles.animationFadeIn}`}
      onClickCapture={modalClickHandler}
      id="root-modal">
      {activeComponents[activeComponents.length - 1]}
    </div>,
    domNode
  );
}

export default RootModal;
