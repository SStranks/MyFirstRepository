import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function useFlagRender(countries) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [output, setOutput] = useState();

  useEffect(async () => {
    setLoading(true);
    setError(false);
    try {
      const promises = countries.map((country) =>
        axios({
          method: 'GET',
          url: country.flag,
          timeout: 2000,
        })
      );
      const flagData = await Promise.allSettled(promises);
      flagData.map((res) => {
        if (res.status === 'fulfilled') {
          return (
            <Card
              key={country.name}
              flag={res}
              country={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        }
        return (
          <Card
            key={country.name}
            flag={res}
            country={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
}

export default useFlagRender;
