import { ActionType } from '#Context/RootModalContext';
import { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import styles from './_Modal.module.scss';

const domNode = document.querySelector('#modal') as HTMLElement;

const ACTIONS = {
  SHOWMODAL: 'show-modal',
};

const initialState = {
  modalType: undefined,
  modalProps: {},
};

type StateType = {
  modalType: string | undefined;
  modalProps: Record<string, unknown>;
};

const setInitialState = (state: StateType, action: string) => {
  console.log('ROOTMODAL REDUCER: HELLO!', action);
  return state;
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ACTIONS.SHOWMODAL: {
      return setInitialState(state, action.modalType);
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
};

function RootModal(props: ElemProps): JSX.Element | null {
  const { setRootModalDispatch } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Lift dispatch to App component
    setRootModalDispatch(() => dispatch);
  }, [setRootModalDispatch]);

  // eslint-disable-next-line unicorn/no-null
  if (!state.modalType) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div>ROOT MODAL</div>
    </div>,
    domNode
  );
}

export default RootModal;
