import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__content">
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
