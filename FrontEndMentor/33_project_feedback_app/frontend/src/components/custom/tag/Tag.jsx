import PropTypes from 'prop-types';
import styles from './_Tag.module.scss';

function Tag(props) {
  const { title, active } = props;

  return (
    <div className={`${styles.tag} ${active ? styles['tag--active'] : ''}`}>
      {title}
    </div>
  );
}

Tag.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};

Tag.defaultProps = {
  title: PropTypes.string,
  active: PropTypes.bool,
};

export default Tag;
