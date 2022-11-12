import { useRef, useState } from 'react';
import styles from './_InputTextArea.module.scss';

type ElemProps = {
  name: string;
  placeholder: string;
  // formSubmitValidate: () => void;
};

function TextArea(props: ElemProps): JSX.Element {
  const { name, placeholder } = props;
  const [text, setText] = useState({ text: '', error: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (text.error) containerRef.current?.classList.remove('error');
    setText((prev) => ({ ...prev, text: e.currentTarget?.value }));
  };

  // formSubmitValidate(text, setText);

  return (
    <div
      className={`${styles.container} ${text.error ? styles.error : ''}`}
      ref={containerRef}>
      <textarea
        name={name}
        // id=""
        // cols="30"
        // rows="10"
        className={styles.container__input}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={text.text}
      />
    </div>
  );
}

export default TextArea;
