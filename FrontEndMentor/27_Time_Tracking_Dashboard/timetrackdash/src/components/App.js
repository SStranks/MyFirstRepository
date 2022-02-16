import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import StatsCard from './StatsCard';

function App() {
  const [userData, setUserData] = useState({});

  const fetchStats = async () => {
    try {
      const response = await fetch('./assets/data.json');
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
    <StatsCard key={item.title} title={item.title} icon={item.icon} timeframes={item.timeframes} />
  ));

  return (
    <div className="App">
      <UserCard img={userData.img} />
      {stats}
    </div>
  );
}

export default App;
