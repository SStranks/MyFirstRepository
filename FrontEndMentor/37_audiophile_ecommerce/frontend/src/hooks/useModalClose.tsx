import { useEffect } from 'react';

type Param1 = React.Dispatch<React.SetStateAction<boolean>>;
type Param2 = React.Ref<HTMLDivElement>;

// Closes modals when ESC key or click outside of modal content (DIV)
function useModalClose(setModal: Param1, modalRef: Param2): void {
  return useEffect(() => {
    const closeEscKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? setModal(false) : undefined;

    const clickOutsideModal = (e: MouseEvent) => {
      if (
        typeof modalRef !== 'function' &&
        !modalRef?.current?.contains(e.target as HTMLElement)
      )
        setModal(false);
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
