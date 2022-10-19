import ProfileImg from '#Img/image-avatar.jpg';
import styles from './User.module.scss';

function User(): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={ProfileImg} alt="" />
    </div>
  );
}
export default User;
