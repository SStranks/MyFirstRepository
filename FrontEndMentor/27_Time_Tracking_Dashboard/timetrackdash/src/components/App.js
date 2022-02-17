import React, { Fragment, useState, useEffect } from 'react';
import UserCard from './UserCard';
import StatsCard from './StatsCard';

function App() {
  const [userData, setUserData] = useState({ stats: [] });
  const [activePeriod, setActivePeriod] = useState('week');

  const timePeriods = [
    { title: 'day', txt: 'Daily' },
    { title: 'week', txt: 'Weekly' },
    { title: 'month', txt: 'Monthly' },
  ];

  const statsSelectHandler = (event) => {
    const { id } = event.target;
    setActivePeriod(id);
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('data/data.json');
      const data = await response.json();
      const loadedData = {
        name: data.name,
        img: data.img,
        stats: data.stats,
      };
      setUserData(loadedData);
    } catch (err) {
      throw new Error('Data not found!');
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const stats = userData.stats.map((item) => (
    <StatsCard
      key={item.title}
      title={item.title}
      icon={item.icon}
      timeFrames={item.timeframes}
      activePeriod={activePeriod}
    />
  ));

  return (
    <>
      <UserCard
        img={userData.img}
        click={statsSelectHandler}
        timePeriods={timePeriods}
        activePeriod={activePeriod}
      />
      {stats}
    </>
  );
}

export default App;
