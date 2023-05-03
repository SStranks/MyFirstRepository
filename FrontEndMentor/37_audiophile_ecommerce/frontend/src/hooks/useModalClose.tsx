import { useEffect } from 'react';

type Param1 = React.Dispatch<React.SetStateAction<boolean>>;
type Param2 = React.Ref<HTMLDivElement>;
type Param3 = React.Ref<HTMLButtonElement>;

// Closes modals when ESC key or click outside of modal content (DIV)
function useModalClose(
  setModal: Param1,
  modalRef: Param2,
  openModalBtnRef: Param3
): void {
  return useEffect(() => {
    const closeEscKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? setModal(false) : undefined;

    const clickOutsideModal = (e: MouseEvent) => {
      // If the click was on modal open/close button, ignore it - let the parent toggle state.
      if (
        typeof openModalBtnRef !== 'function' &&
        openModalBtnRef?.current?.contains(e.target as HTMLElement)
      )
        return;
      if (
        typeof modalRef !== 'function' &&
        !modalRef?.current?.contains(e.target as HTMLElement)
      ) {
        setModal(false);
      }
    };

    document.body.addEventListener('keydown', closeEscKey);
    document.body.addEventListener('mouseup', clickOutsideModal);

    return () => {
      document.body.removeEventListener('keydown', closeEscKey);
      document.body.removeEventListener('mouseup', clickOutsideModal);
    };
  });
}

export default useModalClose;
