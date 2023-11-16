import { PropsWithChildren } from 'react';

type TProps = {
  formId: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FormInput(props: PropsWithChildren<TProps>): JSX.Element {
  const { children, formId } = props;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div data-formId={formId}>{children}</div>;
}

export default FormInput;
