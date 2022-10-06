import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import IconArrowLeft from '../../../assets/svg/shared/icon-arrow-left.svg';
import Button from '../../custom/button/Button';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  const [btnMobileFilter, setBtnMobileFilter] = useState({
    planned: true,
    'in-progress': false,
    live: false,
  });
  const btnMobileFilterActive = useRef();

  // Temporary Dev
  const num1 = 2;
  const num2 = 3;
  const num3 = 1;

  const btnMobileFilterClickHandler = (e) => {
    setBtnMobileFilter({
      planned: false,
      'in-progress': false,
      live: false,
      [e.target.value]: true,
    });
  };

  return (
    <div className={styles.bar}>
      <div className={styles.bar__nav}>
        <Link to="/">
          <div className={styles.bar__link}>
            <img src={IconArrowLeft} alt="" />
            <p>Go Back</p>
          </div>
        </Link>
        <h3>Roadmap</h3>
      </div>
      <div className={styles.bar__btn}>
        <Button
          text="+ Add Feedback"
          disabled={false}
          classList={['bg-magenta']}
        />
      </div>
      <div className={styles['bar__mobile-nav']}>
        <button
          className={styles['bar__mobile-nav__btn1']}
          type="button"
          onClick={btnMobileFilterClickHandler}
          value="planned">
          Planned ({num1})
        </button>
        <button
          className={styles['bar__mobile-nav__btn2']}
          type="button"
          onClick={btnMobileFilterClickHandler}
          value="in-progress">
          In-Progress ({num2})
        </button>
        <button
          className={styles['bar__mobile-nav__btn3']}
          type="button"
          onClick={btnMobileFilterClickHandler}
          value="live">
          Live ({num3})
        </button>
        <div
          className={`${styles['bar__mobile-nav__activebar']} ${
            btnMobileFilter.planned
              ? styles.col1
              : btnMobileFilter['in-progress']
              ? styles.col2
              : styles.col3
          }`}
          ref={btnMobileFilterActive}
        />
      </div>
    </div>
  );
}

export default UtilityBar;
