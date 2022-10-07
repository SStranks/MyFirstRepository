import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconModalClose from '../../assets/svg/shared/icon-close.svg';
import IconModalHamburger from '../../assets/svg/shared/icon-hamburger.svg';
import AsideRoadmap from '../aside-roadmap/AsideRoadmap';
import AsideTags from '../aside-tags/AsideTags';
import styles from './_Header.module.scss';

function Header() {
  const [modalActive, setModalActive] = useState(false);

  const btnModalHandler = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__content}>
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
      </Link>
      <button
        className={styles.header__btn}
        type="button"
        onClick={btnModalHandler}>
        <img
          className={styles.header__icon}
          src={modalActive ? IconModalClose : IconModalHamburger}
          alt=""
        />
      </button>
      {modalActive ? (
        <div className={styles['mobile-modal']}>
          <div className={styles['mobile-modal__side']}>
            <AsideTags />
            <AsideRoadmap />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Header;
