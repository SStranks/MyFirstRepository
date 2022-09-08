import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../search/Search';
import Button from '../custom/Button';
import Card from '../card/Card';
import styles from './_Main.module.scss';

function Main() {
  const [jobs, setJobs] = useState([]);

  // Load all jobs on initial render
  useEffect(() => {
    const apiGetAll = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://localhost:4000/api/jobs',
          timeout: 2000,
        });
        setJobs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiGetAll();
  }, []);

  const jobCards = jobs.map((obj) => (
    <Card
      key={obj.id}
      id={obj.id}
      company={obj.company}
      website={obj.website}
      logo={obj.logo.slice(2)}
      logoBackground={obj.logoBackground}
      position={obj.position}
      postedAt={obj.postedAt}
      contract={obj.contract}
      location={obj.location}
      description={obj.description}
      requirements={obj.requirements}
      role={obj.role}
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
