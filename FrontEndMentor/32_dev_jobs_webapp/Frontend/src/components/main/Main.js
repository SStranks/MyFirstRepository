import React from 'react';
import Button from '../custom/Button';
import Card from '../card/Card';
import styles from './_Main.module.scss';

// Temporary Data
import jsonData from '../../data.json';

function Main() {
  const jobCards = jsonData.map((obj) => (
    <Card
      key={obj.id}
      company={obj.company}
      logo={`./src/assets/svg/${obj.logo.slice(9)}`}
      logoBackground={obj.logoBackground}
      position={obj.position}
      postedAt={obj.postedAt}
      contract={obj.contract}
      location={obj.location}
    />
  ));

  return (
    <div className={styles.main}>
      <div className={styles.grid}>{jobCards}</div>
      <Button text="Load More" />
    </div>
  );
}

export default Main;
