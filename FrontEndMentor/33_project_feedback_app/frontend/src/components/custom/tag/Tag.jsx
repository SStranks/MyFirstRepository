/* eslint-disable react/prop-types */
import styles from './_Tag.module.scss';

function Tag(props) {
  const { title, name, id, defaultChecked, onChange, disabled } = props;

  return (
    <label htmlFor={id} className={styles.tag} onChange={onChange}>
      <input
        type="radio"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {title}
    </label>
  );
}

export default Tag;
