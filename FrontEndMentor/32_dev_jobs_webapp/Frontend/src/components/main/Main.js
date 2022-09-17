import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../search/Search';
import Button from '../custom/Button';
import Card from '../card/Card';
import styles from './_Main.module.scss';

function Main() {
  const [jobs, setJobs] = useState([]);
  const [gridCount, setGridCount] = useState({ count: 3, loadedAll: false });

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

  const btnClickHandler = () => {
    if (gridCount.count + 3 >= jobs.length) {
      return setGridCount((prev) => ({
        count: prev.count + 3,
        loadedAll: true,
      }));
    }
    return setGridCount((prev) => ({
      count: prev.count + 3,
      loadedAll: false,
    }));
  };

  const jobCards = jobs
    .slice(0, gridCount.count)
    .map((obj) => (
      <Card
        key={obj.id}
        id={obj.id}
        company={obj.company}
        website={obj.website}
        logo={obj.logo.slice(15)}
        logoBackground={obj.logoBackground}
        position={obj.position}
        postedAt={obj.postedAt}
        contract={obj.contract}
        location={obj.location}
        description={obj.description}
        requirements={obj.requirements}
        role={obj.role}
        timeStamp={jobs.timeStamp}
      />
    ));

  return (
    <div className={styles.main}>
      <Search setJobs={setJobs} setGridCount={setGridCount} />

      <div className={styles.grid}>{jobCards}</div>

      <div className={styles.button}>
        <Button
          onClick={btnClickHandler}
          text={gridCount.loadedAll ? 'Loaded' : 'Load More'}
          disabled={gridCount.loadedAll}
        />
      </div>
    </div>
  );
}

export default Main;
