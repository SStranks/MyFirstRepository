/* eslint-disable unicorn/filename-case */
import {
  InputPropType,
  NestedInputPropType,
  newFormDataType,
  ReturnDataType,
} from '#Types/types';

export function isInput(input: unknown): input is InputPropType {
  return (input as Record<string, InputPropType>).inputName !== undefined;
}

// For setting initial state; Generates object of single input objects, to be spread into receiving input.
// Unique keys are negative numbers - useComponentIdGenerator starts at 0.
export function genGroupInputs(arg: string[], name: string) {
  return arg.reduce((acc, cur, i, arr) => {
    const key = `input-${name}-${i - arr.length}`;
    acc[key] = {
      value: cur,
      error: false,
      key: i - arr.length,
      inputName: `input-${name}-${i - arr.length}`,
    };
    return acc;
  }, {} as NestedInputPropType);
}

// Adds single input to an existing group of inputs.
// Generate unique Id local/in the component and pass in. Previous state is amended and returned;
export function addInputToGroup<T>(
  uniqueId: string,
  group: string,
  prevState: T
): T {
  const newInput = {
    value: '',
    error: false,
    key: uniqueId,
    inputName: uniqueId,
  };
  return {
    ...prevState,
    [group]: {
      ...prevState[group as keyof typeof prevState],
      [uniqueId]: newInput,
    },
  } as typeof prevState;
}

export function deleteInputFromGroup<T>(data: ReturnDataType, prevState: T): T {
  const { [data.groupId as keyof typeof prevState]: inputGroup, ...rest } =
    prevState;
  delete inputGroup[data.inputName as keyof typeof inputGroup];
  return { [data.groupId as string]: inputGroup, ...rest } as typeof prevState;
}

export function deleteInputSingle<T>(data: ReturnDataType, prevState: T): T {
  const prevCopy = prevState;
  delete prevCopy[data.inputName as keyof typeof prevCopy];
  return prevCopy as typeof prevState;
}

export function updateInputFromGroup<T>(data: ReturnDataType, prevState: T): T {
  let { [data.groupId as keyof typeof prevState]: inputGroup } = prevState;
  let { [data.inputName as keyof typeof inputGroup]: input } = inputGroup;
  input = { ...input, value: data.value };
  inputGroup = { ...inputGroup, [data.inputName]: input };
  return {
    ...prevState,
    [data.groupId as string]: inputGroup,
  } as typeof prevState;
}

export function updateInput<T>(data: ReturnDataType, prevState: T): T {
  return {
    ...prevState,
    [data.inputName]: {
      ...prevState[data.inputName as keyof typeof prevState],
      value: data.value,
    },
  };
}

// Check all inputs for value as empty string. Return object containing objects of each input that fails validation, with error set to true.
export function validateInputs<T extends newFormDataType>(
  formData: T
): typeof newFormData {
  const newFormData = {} as newFormDataType;
  Object.entries(formData).forEach(([key, prop]) => {
    // Typeguard: If input is single, or group of inputs.
    // InputProp | NestedInputProp.
    if (isInput(prop)) {
      if (prop.value === '') {
        newFormData[key] = { ...prop, error: true };
      }
    } else {
      const groupInput = { ...prop } as Record<string, InputPropType>;
      let numOfFailed = 0;
      Object.entries(prop).forEach(([grpKey, grpProp]) => {
        if (grpProp.value === '') {
          groupInput[grpKey] = { ...grpProp, error: true };
          numOfFailed += 1;
        }
      });
      if (numOfFailed > 0) newFormData[key] = { ...groupInput };
    }
  });
  return newFormData;
}
