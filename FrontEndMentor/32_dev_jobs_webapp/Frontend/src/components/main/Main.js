import React from 'react';
import Search from '../search/Search';
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
      logo={obj.logo.slice(2)}
      logoBackground={obj.logoBackground}
      position={obj.position}
      postedAt={obj.postedAt}
      contract={obj.contract}
      location={obj.location}
    />
  ));

  return (
    <div className={styles.main}>
      <Search />
      <div className={styles.grid}>{jobCards}</div>
      <div className={styles.button}>
        <Button text="Load More" />
      </div>
    </div>
  );
}

export default Main;
