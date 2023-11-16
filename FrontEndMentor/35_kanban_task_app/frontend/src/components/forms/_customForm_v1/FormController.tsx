import { TFormAction, TFormState } from './Form';

type TProps = {
  formState: TFormState;
  formDispatch: React.Dispatch<TFormAction>;
};

function FormController(props: TProps): JSX.Element {
  const { formState, formDispatch } = props;

  return <div className="">a</div>;
}

export default FormController;
