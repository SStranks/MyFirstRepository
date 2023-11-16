import { PropsWithChildren, useReducer, createContext, useMemo } from 'react';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';

interface IFormContext {
  formDispatch: React.Dispatch<IFormAction>;
  genId: () => number;
}
export interface IFormState {
  [x: number]: {
    value: string | number | boolean;
    setValue:
      | React.Dispatch<React.SetStateAction<string>>
      | React.Dispatch<React.SetStateAction<number>>
      | React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    validationFn: (value: string | number | boolean) => boolean;
  };
}

export interface IFormAction {
  type: string;
  payload: IFormContextPayload;
}

interface IFormContextPayload {
  identity: number;
  value?: string | number | boolean;
  setValue?:
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<number>>
    | React.Dispatch<React.SetStateAction<boolean>>;
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationFn?: (value: any) => boolean;
}

type TProps = {
  appendClass: string;
  name: string;
  submitHandler: (formData: HTMLFormElement) => void;
};

const registerInput = (
  state: IFormState,
  payload: IFormContextPayload
): IFormState => {
  const newState = { ...state };
  const { identity, value, setValue, setError, validationFn } = payload;
  if (
    value === undefined ||
    setValue === undefined ||
    setError === undefined ||
    validationFn === undefined
  )
    throw new Error('Error');
  newState[identity] = { value, setValue, setError, validationFn };
  return newState;
};

const unregisterInput = (
  state: IFormState,
  payload: IFormContextPayload
): IFormState => {
  const newState = { ...state };
  delete newState[payload.identity];
  return newState;
};

const updateInputValue = (
  state: IFormState,
  payload: IFormContextPayload
): IFormState => {
  const newValue = payload.value;
  if (newValue === undefined) throw new Error('Error');
  const newState = { ...state };
  newState[payload.identity].value = newValue;
  return newState;
};

const validateInput = (
  state: IFormState,
  payload: IFormContextPayload
): IFormState => {
  const { identity } = payload;
  const { value, validationFn } = state[identity];
  const error = validationFn(value);
  state[identity].setError(error);
  return state;
};

// TODO:  GenID is generating numbers. Switch to strings.
const validateAllInputs = (state: IFormState): IFormState => {
  Object.keys(state).forEach((identity) => {
    const isValid = state[Number(identity)].validationFn(
      state[Number(identity)].value
    );
    state[Number(identity)].setError(!isValid);
  });
  return state;
};

const ACTIONS = {
  REGISTER: 'registerInput',
  UNREGISTER: 'unregisterInput',
  UPDATE: 'updateInputValue',
  VALIDATE: 'validateInput',
  VALIDATEALL: 'validateAll',
  ERROR: 'dispatchErrors',
};

const reducer = (state: IFormState, action: IFormAction): IFormState => {
  switch (action.type) {
    case ACTIONS.REGISTER: {
      return registerInput(state, action.payload);
    }
    case ACTIONS.UNREGISTER: {
      return unregisterInput(state, action.payload);
    }
    case ACTIONS.UPDATE: {
      return updateInputValue(state, action.payload);
    }
    case ACTIONS.VALIDATE: {
      return validateInput(state, action.payload);
    }
    case ACTIONS.VALIDATEALL: {
      return validateAllInputs(state);
    }
    default: {
      return state;
    }
  }
};

export const FormContext = createContext<IFormContext>({} as IFormContext);

function Form(props: PropsWithChildren<TProps>): JSX.Element {
  const { appendClass, submitHandler, name, children } = props;
  const [formState, formDispatch] = useReducer(reducer, {});
  const genId = useComponentIdGenerator();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // // Check if each formData input is empty. If true, add a new object to newFormData.
    // const newFormData = validateInputs(formData);
    // // If there are any empty inputs/objs in newFormData, abort form submission and merge the form state with the newFormData objs.
    // if (Object.keys(newFormData).length > 0) {
    //   return setFormData(
    //     (prev) => ({ ...prev, ...newFormData } as typeof prev)
    //   );
    // }

    formDispatch({
      type: 'validateAll',
      payload: {
        identity: 0,
      },
    });

    console.log(formState);

    // After validation, pass back up to component
    return submitHandler(e.target as HTMLFormElement);
  };

  const providerValue = useMemo(() => {
    return { formDispatch, genId };
  }, [formDispatch, genId]);

  return (
    <FormContext.Provider value={providerValue}>
      <form className={appendClass} name={name} onSubmit={onSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

export default Form;
