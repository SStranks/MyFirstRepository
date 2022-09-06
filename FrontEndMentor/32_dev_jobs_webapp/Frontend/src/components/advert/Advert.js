import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Advert.module.scss';
import Button from '../custom/Button';

function Advert(props) {
  const {
    company,
    website,
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    location,
    description,
    requirements,
    role,
  } = props;

  const requirementList = requirements.items.map((el, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={i}>{el}</li>
  ));

  // eslint-disable-next-line react/no-array-index-key
  const roleList = role.items.map((el, i) => <li key={i}>{el}</li>);
  console.log(logo.slice(2));

  return (
    <div className={styles.layout}>
      <div className={styles.banner}>
        <div style={{ backgroundColor: logoBackground }}>
          <img src={logo.slice(2)} alt="company logo" />
        </div>
        <div>
          <div>
            <h2>{company}</h2>
            <p>{website}</p>
          </div>
          <Button text="Company Site" />
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div>
            <p>
              {postedAt}
              <span>.</span>
              {contract}
            </p>
            <h1>{position}</h1>
            <h4>{location}</h4>
          </div>
          <Button text="Apply Now" />
        </div>
        <div>
          <p>{description}</p>
          <h3>Requirements</h3>
          <p>{requirements.content}</p>
          <ul>{requirementList}</ul>
          <h3>What You Will Do</h3>
          <p>{role.content}</p>
          <ol>{roleList}</ol>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <div>
            <h3>{position}</h3>
            <p>{company}</p>
          </div>
          <Button text="Apply Now" />
        </div>
      </div>
    </div>
  );
}

Advert.propTypes = {
  logo: PropTypes.string,
  logoBackground: PropTypes.string,
  company: PropTypes.string,
  website: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  requirements: PropTypes.shape({
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  role: PropTypes.shape({
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
};

Advert.defaultProps = {
  logo: PropTypes.string,
  logoBackground: PropTypes.string,
  company: PropTypes.string,
  website: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  requirements: PropTypes.shape({
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  role: PropTypes.shape({
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Advert;
