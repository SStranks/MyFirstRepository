import { PropsWithChildren, useContext } from 'react';
import styles from './FormButtons.module.scss';
import { ModalContext } from './Modal';

// NOTE:  This is a compound component

/* -------------------------------- */
/*   Main Compound Component        */
/* -------------------------------- */

function FormButtons(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

/* -------------------------------- */
/*   Sub-Components                 */
/* -------------------------------- */

function CancelBtn(): JSX.Element | null {
  const contextValue = useContext(ModalContext);
  if (!contextValue) return null;

  return (
    <div className={styles.btnCancel}>
      <button type="button" onClick={() => contextValue.setIsModalOpen(false)}>
        Cancel
      </button>
    </div>
  );
}

function DiscardBtn(): JSX.Element | null {
  const contextValue = useContext(ModalContext);
  if (!contextValue) return null;

  return (
    <div className={styles.btnDiscard}>
      <button type="button" onClick={() => contextValue.setIsModalOpen(false)}>
        Discard
      </button>
    </div>
  );
}

// NOTE:  Buttons external to form; onSubmit references e.nativeEvent.submitter.name e.g 'saveDraft'
function SaveDraftBtn(): JSX.Element | null {
  return (
    <div className={styles.btnSaveDraft}>
      <button type="submit" form="submitFormInvoice" name="saveDraft">
        Save as Draft
      </button>
    </div>
  );
}

function SaveSendBtn(): JSX.Element | null {
  return (
    <div className={styles.btnSaveSend}>
      <button type="submit" form="submitFormInvoice" name="saveSend">
        Save & Send
      </button>
    </div>
  );
}

function SaveChangesBtn(): JSX.Element | null {
  return (
    <div className={styles.btnSaveChanges}>
      <button type="submit" form="submitFormInvoice" name="saveChanges">
        Save Changes
      </button>
    </div>
  );
}

FormButtons.CancelBtn = CancelBtn;
FormButtons.DiscardBtn = DiscardBtn;
FormButtons.SaveDraftBtn = SaveDraftBtn;
FormButtons.SaveSendBtn = SaveSendBtn;
FormButtons.SaveChangesBtn = SaveChangesBtn;

export default FormButtons;
